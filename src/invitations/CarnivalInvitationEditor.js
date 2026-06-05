import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Text, Image, Group, Ellipse, Transformer, Rect } from "react-konva";
import useImage from "use-image";
import jsPDF from "jspdf";
import "./Invitation.css";
import carnivalInvitationData from "../data/carnivalInvitationData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const fonts = [
  "Great Vibes","Playfair Display","Cinzel","Dancing Script","Cormorant Garamond",
  "Libre Baskerville","Merriweather","Lora","Crimson Text","EB Garamond",
  "Abril Fatface","Josefin Sans","Raleway","Poppins","Montserrat",
  "Quicksand","Sacramento","Parisienne","Allura","Tangerine",
  "Cardo","Vollkorn","Philosopher","Spectral"
];

const stickers = [
  "https://cdn-icons-png.flaticon.com/512/616/616490.png",
  "https://cdn-icons-png.flaticon.com/512/616/616494.png",
  "https://cdn-icons-png.flaticon.com/512/3468/3468377.png",
  "https://cdn-icons-png.flaticon.com/512/869/869869.png",
  "https://cdn-icons-png.flaticon.com/512/833/833472.png",
  "https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
  "https://cdn-icons-png.flaticon.com/512/535/535285.png",
  "https://cdn-icons-png.flaticon.com/512/742/742751.png",
  "https://cdn-icons-png.flaticon.com/512/3039/3039430.png",
  "https://cdn-icons-png.flaticon.com/512/2589/2589175.png",
  "https://cdn-icons-png.flaticon.com/512/415/415733.png",
  "https://cdn-icons-png.flaticon.com/512/3176/3176293.png",
  "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
  "https://cdn-icons-png.flaticon.com/512/869/869636.png"
];
function TextElement({ element, onSelect, onChange }) {
  return (
    <Text
      id={`node-${element.id}`}
      text={element.text}
      x={element.x}
      y={element.y}
      fontSize={element.fontSize}
      fontFamily={element.fontFamily}
      fill={element.fill}
      width={element.width}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e) => {
        onChange({
          ...element,
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
      onTransformEnd={(e) => {
        const node = e.target;

        const scaleX = node.scaleX();
        const scaleY = node.scaleY();

        node.scaleX(1);
        node.scaleY(1);

        onChange({
          ...element,
          x: node.x(),
          y: node.y(),
          width: Math.max(50, node.width() * scaleX),
          fontSize: Math.max(10, element.fontSize * scaleY),
        });
      }}
    />
  );
}

function BackgroundImage({ element, size }) {
  const [image] = useImage(element.src);

  return (
    <Image
      image={image}
      x={0}
      y={0}
      width={size.width}
      height={size.height}
      listening={false}
    />
  );
}


function ImageElement({ element, onSelect, onChange }) {
  const [image] = useImage(element.src);

  const isCircle = element.shape === "circle";
  const isOval = element.shape === "oval";

  // Circle Shape
  if (isCircle) {
    const radius = element.width / 2;

    return (
      <Group
        id={`node-${element.id}`}
        x={element.x}
        y={element.y}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={(e) =>
          onChange({
            ...element,
            x: e.target.x(),
            y: e.target.y()
          })
        }
      >
        {/* Border */}
        <Ellipse
          x={radius}
          y={radius}
          radiusX={radius + (element.strokeWidth || 4) / 2}
          radiusY={radius + (element.strokeWidth || 4) / 2}
          stroke={element.stroke || "#fff"}
          strokeWidth={element.strokeWidth || 4}
        />

        {/* Clipped Image */}
        <Group
          clipFunc={(ctx) => {
            ctx.beginPath();
            ctx.arc(radius, radius, radius, 0, Math.PI * 2);
            ctx.closePath();
          }}
        >
          <Image
            image={image}
            width={element.width}
            height={element.height}
          />
        </Group>
      </Group>
    );
  }

  // Oval Shape
  if (isOval) {
    const radiusX = element.width / 2;
    const radiusY = element.height / 2;

    return (
      <Group
        id={`node-${element.id}`}
        x={element.x}
        y={element.y}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={(e) =>
          onChange({
            ...element,
            x: e.target.x(),
            y: e.target.y()
          })
        }
      >
        {/* Border */}
        <Ellipse
          x={radiusX}
          y={radiusY}
          radiusX={radiusX}
          radiusY={radiusY}
          stroke={element.stroke || "#fff"}
          strokeWidth={element.strokeWidth || 4}
        />

        {/* Clipped Image */}
        <Group
          clipFunc={(ctx) => {
            ctx.beginPath();
            ctx.ellipse(
              radiusX,
              radiusY,
              radiusX,
              radiusY,
              0,
              0,
              Math.PI * 2
            );
            ctx.closePath();
          }}
        >
          <Image
            image={image}
            width={element.width}
            height={element.height}
          />
        </Group>
      </Group>
    );
  }

  // Default rectangle image
  return (
    <Image
      id={`node-${element.id}`}
      image={image}
      x={element.x}
      y={element.y}
      width={element.width}
      height={element.height}
      stroke={element.stroke || "#fff"}
      strokeWidth={element.strokeWidth || 4}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e) =>
        onChange({
          ...element,
          x: e.target.x(),
          y: e.target.y()
        })
      }
    />
  );
}

export default function CarnivalInvitationEditor() {
const [fontsize, setFontsize] = useState("30");
  const stageRef = useRef();
  const transformerRef = useRef();

  const [template] = useState(carnivalInvitationData);
const [elements, setElements] = useState(carnivalInvitationData.elements);
  const [selectedId, setSelectedId] = useState(null);

  const [font, setFont] = useState("Arial");
  const [color, setColor] = useState("#000");
  const [bgColor, setBgColor] = useState("#ffffff");

  const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 });

  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const saveHistory = (newElements) => {
    setHistory(prev => [...prev, elements]);
    setElements(newElements);
    setRedoStack([]);
  };
  useEffect(() => {
    const stage = stageRef.current;
    const transformer = transformerRef.current;

    if (!transformer) return;

    if (!selectedId) {
      transformer.nodes([]);
      return;
    }

    const selectedNode = stage.findOne(`#node-${selectedId}`);
    if (selectedNode) transformer.nodes([selectedNode]);

  }, [selectedId]);

  const addText = () => {
    const newEl = {
      id: Date.now(),
      type: "text",
      text: "Add Text",
      x: 200,
      y: 200,
      fontSize: fontsize,
      fontFamily: font,
      fill: color
    };
    saveHistory([...elements, newEl]);
  };

  const addSticker = (src) => {
    const newEl = {
      id: Date.now(),
      type: "image",
      src,
      x: 200,
      y: 200,
      width: 100,
      height: 100
    };
    saveHistory([...elements, newEl]);
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const newEl = {
        id: Date.now(),
        type: "image",
        src: reader.result,
        x: 200,
        y: 200,
        width: 150,
        height: 150
      };
      saveHistory([...elements, newEl]);
    };

    reader.readAsDataURL(file);
  };

  const updateElement = (id, newAttrs) => {
    saveHistory(elements.map(el => el.id === id ? newAttrs : el));
  };

  const deleteElement = () => {
    saveHistory(elements.filter(el => el.id !== selectedId));
    setSelectedId(null);
  };

  const duplicateElement = () => {
    const el = elements.find(e => e.id === selectedId);
    if (!el) return;

    const newEl = {
      ...el,
      id: Date.now(),
      x: el.x + 20,
      y: el.y + 20
    };

    saveHistory([...elements, newEl]);
  };

  const undo = () => {
    if (!history.length) return;
    const prev = history[history.length - 1];
    setRedoStack(r => [elements, ...r]);
    setElements(prev);
    setHistory(h => h.slice(0, -1));
  };

  const redo = () => {
    if (!redoStack.length) return;
    const next = redoStack[0];
    setHistory(h => [...h, elements]);
    setElements(next);
    setRedoStack(r => r.slice(1));
  };

  const editText=()=>{

const el=elements.find(e=>e.id===selectedId);

if(!el || el.type!=="text")return;

const textarea=document.createElement("textarea");

document.body.appendChild(textarea);

textarea.value=el.text;
textarea.style.position="absolute";
textarea.style.top=el.y+"px";
textarea.style.left=el.x+"px";
textarea.style.fontSize=el.fontSize+"px";

textarea.focus();

textarea.onblur=()=>{

updateElement(el.id,{
...el,
text:textarea.value
});

document.body.removeChild(textarea);
};
};

  const downloadPDF = () => {
  const dataURL = stageRef.current.toDataURL({ pixelRatio: 2 });

  const pdf = new jsPDF({
    orientation: template.size.width > template.size.height ? "landscape" : "portrait",
    unit: "px",
    format: [template.size.width, template.size.height]
  });

  pdf.addImage(
    dataURL,
    "PNG",
    0,
    0,
    template.size.width,
    template.size.height
  );

  pdf.save("Carnival Invitation.pdf");
};

  

  return (
    <>
      <Navbar />

      <div className="editor-container">

        {/* SIDEBAR */}
        <div className="invitation-editor-sidebar">
          <h4>Font</h4>
        <div style={{display:"flex",marginBottom:"10px"}}>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{width:"30%"}}/>
          <input type="number" value={fontsize} onChange={(e) => setFontsize(e.target.value)} style={{width:"20%",backgroundColor:"rgb(26, 116, 206)",height:"20px",borderRadius:"10px"}} />
          <select onChange={(e) => setFont(e.target.value)} style={{width:"50%"}}>
            {fonts.map(f => <option key={f}>{f}</option>)}
          </select></div>
          <button onClick={addText}>Add Text</button>

          <br /><br />

          <input type="file" onChange={uploadImage} />

          <br /><br />
          <div style={{display:"flex"}}>
          <button onClick={undo}>Undo</button>
          <button onClick={redo}>Redo</button>
          </div>
          <br /><br />

          <h4>Background Color</h4>
          <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />

          <h4>Stickers</h4>
          {stickers.map(s => (
            <img key={s} src={s} width="40" style={{ margin: 5, cursor: "pointer" }}
              onClick={() => addSticker(s)} alt=""
            />
          ))}

          <br /><br />

          <button onClick={downloadPDF}>Download</button>
          
        </div>
{selectedId && (
  <div
    style={{
      position: "absolute",
      top: toolbarPos.y+100,
      left: toolbarPos.x+100,
      background: "#1a74ce",
      padding: "6px 10px",
      borderRadius: 6,
      display: "flex",
      gap: 6,
      zIndex: 1000
    }}
  >
    <button onClick={editText}>Edit✏️</button>
    <button onClick={duplicateElement}>Copy📄</button>
    <button onClick={deleteElement}>Delete❌</button>
  </div>
)}
        {/* STAGE */}
        <Stage
  width={template.size.width}
  height={template.size.height}
  ref={stageRef}
  onMouseDown={(e) => {
    const clickedOnEmpty = e.target === e.target.getStage();

    if (clickedOnEmpty) {
      setSelectedId(null);
      setToolbarPos({ x: 0, y: 0 });
    }
  }}
>
          <Layer>

            {/* BACKGROUND */}
            {elements.find(el => el.type === "background") ? (
              <BackgroundImage element={elements.find(el => el.type === "background")} size={template.size}/>
            ) : (
              <Rect 
  width={template.size.width} 
  height={template.size.height} 
  fill={bgColor} 
/>
            )}

            {/* ELEMENTS */}
            {elements.map(el => {
                                      if (el.type === "text") {
                                        return (
     <TextElement
  key={el.id}
  element={el}
  onSelect={(e) => {
    setSelectedId(el.id);

    const stage = stageRef.current;
    const stageBox = stage.container().getBoundingClientRect();
    const pos = e.target.getAbsolutePosition();

    setToolbarPos({
      x: stageBox.left + pos.x,
      y: stageBox.top + pos.y - 40,
    });
  }}
  onChange={(newAttrs) => updateElement(el.id, newAttrs)}
/>
                                        );
                                      }
                                      if(el.type==="image"){
                        
                        return(
                        
                        <ImageElement
                        key={el.id}
                        element={el}
                        isSelected={el.id===selectedId}
                        onSelect={(e)=>{
                        
                        setSelectedId(el.id);
                        
                        const pos=e.target.getAbsolutePosition();
                        
                        setToolbarPos({
                        x:pos.x,
                        y:pos.y-40
                        });
                        }}
                        
                        onChange={(newAttrs)=>updateElement(el.id,newAttrs)}
                        />
                        );
                        }
                                    
                                      return null;
                                    })}

            <Transformer ref={transformerRef} />

          </Layer>
        </Stage>

      </div>

      <Footer />
    </>
  );
}