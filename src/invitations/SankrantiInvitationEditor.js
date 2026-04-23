import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Text, Image, Transformer, Rect } from "react-konva";
import useImage from "use-image";
import { sankrantislides } from "../data/sankrantiInvitationData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import bg from "../images/sankranti/sankranti_bg.png";
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
function BackgroundImage({ element }) {
  const [image] = useImage(element.src);
  return <Image image={image} width={595} height={842} listening={false} />;
}

function ImageElement({ element, onSelect, onChange }) {
  const [image] = useImage(element.src);

  return (
    <Image
      id={`node-${element.id}`}
      image={image}
      x={element.x}
      y={element.y}
      width={element.width}
      height={element.height}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e) =>
        onChange({ ...element, x: e.target.x(), y: e.target.y() })
      }
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
          height: Math.max(50, node.height() * scaleY)
        });
      }}
    />
  );
}

export default function SankrantiInvitationEditor() {
  const stageRef = useRef();
  const transformerRef = useRef();
  const [font, setFont] = useState("Arial");
    const [color, setColor] = useState("#000");
    const [bgColor, setBgColor] = useState("#ffffff");
  const [slidesData, setSlidesData] = useState(sankrantislides);
  const [slideIndex, setSlideIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 });

  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const elements = slidesData[slideIndex];

  // ---------------- HISTORY ----------------
  const saveHistory = (newSlides) => {
    setHistory(prev => [...prev, slidesData]);
    setSlidesData(newSlides);
    setRedoStack([]);
  };

  const undo = () => {
    if (!history.length) return;
    const prev = history[history.length - 1];
    setRedoStack(r => [slidesData, ...r]);
    setSlidesData(prev);
    setHistory(h => h.slice(0, -1));
  };

  const redo = () => {
    if (!redoStack.length) return;
    const next = redoStack[0];
    setHistory(h => [...h, slidesData]);
    setSlidesData(next);
    setRedoStack(r => r.slice(1));
  };

  // ---------------- UPDATE ----------------
  const updateElement = (id, newAttrs) => {
    const updated = slidesData.map((slide, i) =>
      i === slideIndex
        ? slide.map(el => (el.id === id ? newAttrs : el))
        : slide
    );
    saveHistory(updated);
  };

  // ---------------- ADD ----------------
  const addText = () => {
    const newEl = {
      id: Date.now(),
      type: "text",
      text: "Edit Me",
      x: 200,
      y: 200,
      fontSize: 30,
      fontFamily: font,
    };

    const updated = slidesData.map((slide, i) =>
      i === slideIndex ? [...slide, newEl] : slide
    );

    saveHistory(updated);
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

    const updated = slidesData.map((slide, i) =>
      i === slideIndex ? [...slide, newEl] : slide
    );

    saveHistory(updated);
  };

  reader.readAsDataURL(file);
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

    const updated = slidesData.map((slide, i) =>
      i === slideIndex ? [...slide, newEl] : slide
    );

    saveHistory(updated);
  };

  // ---------------- EDIT / COPY / DELETE ----------------
  const editText=()=>{

const el=elements.find(e=>e.id===selectedId);

if(!el || el.type!=="text")return;

const textarea=document.createElement("textarea");

document.body.appendChild(textarea);

textarea.value=el.text;
textarea.style.position="absolute";
textarea.style.top=el.y+"px";
textarea.style.left=el.x+200+"px";
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

  const deleteElement = () => {
    const updated = slidesData.map((slide, i) =>
      i === slideIndex
        ? slide.filter(el => el.id !== selectedId)
        : slide
    );

    saveHistory(updated);
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

    const updated = slidesData.map((slide, i) =>
      i === slideIndex ? [...slide, newEl] : slide
    );

    saveHistory(updated);
  };

  // ---------------- SLIDES ----------------
  const addSlide = () => {
    const newSlide = [
        {
            id: 20,
    type: "background",
    src: bg,
    x: 0,
    y: 0,
    width: 595,
    height: 842
        },
    ];
    setSlidesData([...slidesData, newSlide]);
  };

  const playSlides = () => {
    let i = 0;
    const interval = setInterval(() => {
      setSlideIndex(i++);
      if (i >= slidesData.length) clearInterval(interval);
    }, 1000);
  };

  const recordVideo = async () => {
  const stage = stageRef.current;

  // Create offscreen canvas
  const canvas = document.createElement("canvas");
  canvas.width = 595;
  canvas.height = 842;

  const ctx = canvas.getContext("2d");

  const stream = canvas.captureStream(30);
  const recorder = new MediaRecorder(stream, {
  mimeType: "video/mp4"
});

  let chunks = [];

  recorder.ondataavailable = (e) => {
    if (e.data.size > 0) chunks.push(e.data);
  };

  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "invitation-video.webm";
    a.click();
  };

  recorder.start();

  // 🎬 DRAW EACH SLIDE MANUALLY
  for (let i = 0; i < slidesData.length; i++) {
    setSlideIndex(i);

    // wait for React render
    await new Promise((r) => setTimeout(r, 500));

    const dataURL = stage.toDataURL({ pixelRatio: 2 });

    const img = new window.Image();
    img.src = dataURL;

    await new Promise((resolve) => {
      img.onload = () => {
        // draw multiple frames for duration
        let frames = 60; // 2 sec @30fps

        const drawFrame = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          if (frames-- > 0) {
            requestAnimationFrame(drawFrame);
          } else {
            resolve();
          }
        };

        drawFrame();
      };
    });
  }

  recorder.stop();
};

  // ---------------- TRANSFORMER ----------------
 useEffect(() => {
  const stage = stageRef.current;
  const transformer = transformerRef.current;

  if (!transformer || !stage) return;

  if (!selectedId) {
    transformer.nodes([]);
    transformer.getLayer()?.batchDraw();
    return;
  }

  const selectedNode = stage.findOne(`#node-${selectedId}`);

  if (selectedNode) {
    transformer.nodes([selectedNode]);
    transformer.getLayer().batchDraw();
  }
}, [selectedId]);

  return (<><Navbar/>
    <div className="editor-container">

      <div className="invitation-editor-sidebar">
          <h4>Text Color</h4>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

          <h4>Font</h4>
          <select onChange={(e) => setFont(e.target.value)}>
            {fonts.map(f => <option key={f}>{f}</option>)}
          </select>

          <button onClick={addText}>Add Text</button>

          <br /><br />

          <input type="file" onChange={uploadImage} />

          <br /><br />

          <button onClick={undo}>Undo</button>
          <button onClick={redo}>Redo</button>

          <br /><br />

          <h4>Background Color</h4>
          <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />

          <h4>Stickers</h4>
          {stickers.map(s => (
            <img key={s} src={s} width="40" style={{ margin: 5, cursor: "pointer" }}
              onClick={() => addSticker(s)} alt=""
            />
          ))}

          <div style={{ marginBottom: 10 }}>
  <h4>Slides</h4>

  {slidesData.map((_, index) => (
    <button
      key={index}
      onClick={() => {
        setSlideIndex(index);
        setSelectedId(null); // reset selection
      }}
      style={{
        margin: 5,
        padding: "6px 10px",
        background: slideIndex === index ? "#1a74ce" : "#ddd",
        color: slideIndex === index ? "#fff" : "#000",
        border: "none",
        borderRadius: 4,
        cursor: "pointer"
      }}
    >
      Slide {index + 1}
    </button>
  ))}
</div>
          <button onClick={addSlide}>Add New Slide</button>
          <br /><br />

        <button onClick={playSlides}>▶ Preview</button>
        <button onClick={recordVideo}>🎥 Download</button>
      </div>

      {/* FLOATING TOOLBAR */}
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
          <button onClick={editText}>Edit</button>
          <button onClick={duplicateElement}>Copy</button>
          <button onClick={deleteElement}>Delete</button>
        </div>
      )}

      {/* CANVAS */}
      <Stage
        width={595}
        height={842}
        ref={stageRef}
        onMouseDown={(e) => {
          if (e.target === e.target.getStage()) {
            setSelectedId(null);
          }
        }}
      >
        <Layer>

          {elements.find(el => el.type === "background") ? (
            <BackgroundImage element={elements.find(el => el.type === "background")} />
          ) : (
            <Rect width={595} height={842} fill="#fff" />
          )}

          {elements.map(el => {
            if (el.type === "background") return null;

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

            if (el.type === "image") {
              return (
                <ImageElement
                  key={el.id}
                  element={el}
                  onSelect={(e) => {
                    setSelectedId(el.id);
                    const pos = e.target.getAbsolutePosition();
                    setToolbarPos({ x: pos.x + 200, y: pos.y + 50 });
                  }}
                  onChange={(attrs) => updateElement(el.id, attrs)}
                />
              );
            }

            return null;
          })}

          <Transformer
  ref={transformerRef}
  rotateEnabled={true}
  keepRatio={false} // set true if you want fixed ratio
  enabledAnchors={[
    "top-left",
    "top-center",
    "top-right",
    "middle-left",
    "middle-right",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ]}
  boundBoxFunc={(oldBox, newBox) => {
    if (newBox.width < 40 || newBox.height < 40) {
      return oldBox; // prevent too small
    }
    return newBox;
  }}
/>

        </Layer>
      </Stage>

    </div><Footer/></>
  );
}