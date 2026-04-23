import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Text, Image, Transformer, Rect } from "react-konva";
import useImage from "use-image";
import jsPDF from "jspdf";
import "./Invitation.css";
import invitationElements from "../components/invitationData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const fonts = [
"Great Vibes",
"Playfair Display",
"Cinzel",
"Dancing Script",
"Cormorant Garamond",
"Libre Baskerville",
"Merriweather",
"Lora",
"Crimson Text",
"EB Garamond",
"Abril Fatface",
"Josefin Sans",
"Raleway",
"Poppins",
"Montserrat",
"Quicksand",
"Sacramento",
"Parisienne",
"Allura",
"Tangerine",
"Cardo",
"Vollkorn",
"Philosopher",
"Spectral"
];

const stickers = [

/* flowers */
"https://cdn-icons-png.flaticon.com/512/616/616490.png",
"https://cdn-icons-png.flaticon.com/512/616/616494.png",
"https://cdn-icons-png.flaticon.com/512/3468/3468377.png",
"https://cdn-icons-png.flaticon.com/512/869/869869.png",

/* hearts */
"https://cdn-icons-png.flaticon.com/512/833/833472.png",
"https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
"https://cdn-icons-png.flaticon.com/512/535/535285.png",

/* wedding rings */
"https://cdn-icons-png.flaticon.com/512/742/742751.png",
"https://cdn-icons-png.flaticon.com/512/3039/3039430.png",

/* love / romantic */
"https://cdn-icons-png.flaticon.com/512/2589/2589175.png",
"https://cdn-icons-png.flaticon.com/512/415/415733.png",

/* decorations */
"https://cdn-icons-png.flaticon.com/512/3176/3176293.png",
"https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
"https://cdn-icons-png.flaticon.com/512/869/869636.png"

];

function ImageElement({ element,onSelect, onChange }) {

const [image] = useImage(element.src);

return (
<Image
id={`node-${element.id}`}
image={image}
x={element.x}
y={element.y}
width={element.width}
height={element.height}
rotation={element.rotation || 0}
draggable
onClick={onSelect}
onTap={onSelect}

onDragEnd={(e)=>{
onChange({
...element,
x:e.target.x(),
y:e.target.y()
});
}}

onTransformEnd={(e)=>{

const node=e.target;
const scaleX=node.scaleX();
const scaleY=node.scaleY();

node.scaleX(1);
node.scaleY(1);

onChange({
...element,
x:node.x(),
y:node.y(),
rotation:node.rotation(),
width:Math.max(30,node.width()*scaleX),
height:Math.max(30,node.height()*scaleY)
});
}}
/>
);
}

export default function InvitationEditor(){

const stageRef = useRef();
const transformerRef = useRef();

const [elements,setElements] = useState(invitationElements);
const [selectedId,setSelectedId] = useState(null);

const [font,setFont] = useState("Arial");
const [color,setColor] = useState("#000");
const [bgColor,setBgColor] = useState("#ffd768");

const [toolbarPos,setToolbarPos] = useState({x:0,y:0});

const [history,setHistory] = useState([]);
const [redoStack,setRedoStack] = useState([]);

const saveHistory=(newElements)=>{
setHistory(prev=>[...prev,elements]);
setElements(newElements);
setRedoStack([]);
};

const addText=()=>{

const newEl={
id:Date.now(),
type:"text",
text:"Add Text",
x:200,
y:200,
fontSize:32,
fontFamily:font,
fill:color,
width:200
};

saveHistory([...elements,newEl]);
};

const addSticker=(src)=>{

const newEl={
id:Date.now(),
type:"image",
src,
x:200,
y:200,
width:100,
height:100
};

saveHistory([...elements,newEl]);
};

const uploadImage=(e)=>{

const file=e.target.files[0];
if(!file) return;

const reader=new FileReader();

reader.onload=()=>{

const newEl={
id:Date.now(),
type:"image",
src:reader.result,
x:200,
y:200,
width:150,
height:150
};

saveHistory([...elements,newEl]);
};

reader.readAsDataURL(file);
};

const updateElement=(id,newAttrs)=>{

saveHistory(
elements.map(el=>el.id===id?newAttrs:el)
);
};

const deleteElement=()=>{

saveHistory(
elements.filter(el=>el.id!==selectedId)
);

setSelectedId(null);
};

const duplicateElement=()=>{

const el=elements.find(e=>e.id===selectedId);
if(!el)return;

const newEl={
...el,
id:Date.now(),
x:el.x+20,
y:el.y+20
};

saveHistory([...elements,newEl]);
};

const undo=()=>{

if(history.length===0)return;

const prev=history[history.length-1];

setRedoStack(r=>[elements,...r]);
setElements(prev);
setHistory(h=>h.slice(0,-1));
};

const redo=()=>{

if(redoStack.length===0)return;

const next=redoStack[0];

setHistory(h=>[...h,elements]);
setElements(next);
setRedoStack(r=>r.slice(1));
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

const downloadPDF=()=>{

const dataURL=stageRef.current.toDataURL({pixelRatio:2});

const pdf=new jsPDF({
orientation:"portrait",
unit:"px",
format:[595,842]
});

pdf.addImage(dataURL,"PNG",0,0,595,842);
pdf.save("invitation.pdf");
};

useEffect(() => {

const stage = stageRef.current;
const transformer = transformerRef.current;

if (!transformer) return;

if (!selectedId) {
transformer.nodes([]);
transformer.getLayer().batchDraw();
return;
}

const selectedNode = stage.findOne(`#node-${selectedId}`);

if (selectedNode) {
transformer.nodes([selectedNode]);
transformer.getLayer().batchDraw();
}

}, [selectedId]);

return(
<>
<Navbar/>

<div className="editor-container">

<div className="invitation-editor-sidebar">
<div style={{width:250,padding:10}}>

<h4>Text Color</h4>
<input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>


<h4>Font Style</h4>

<select onChange={(e)=>setFont(e.target.value)}>
{fonts.map(f=><option key={f}>{f}</option>)}
</select>
<button onClick={addText}>Add Text</button>

<br/><br/>

<input type="file" onChange={uploadImage}/>



<br/><br/>

<button onClick={undo}>Undo</button>
<button onClick={redo}>Redo</button>

<br/><br/>

<h4>Background</h4>

<input type="color" value={bgColor} onChange={(e)=>setBgColor(e.target.value)}/>

<h4>Stickers</h4>

{stickers.map(s=>(
<img
key={s}
src={s}
width="50"
style={{cursor:"pointer",margin:5}}
onClick={()=>addSticker(s)}  alt=""
/>
))}

<br/><br/>

<button onClick={downloadPDF}>Download</button>

</div>
</div>

{selectedId && (

<div
style={{
position:"absolute",
top:toolbarPos.y+100,
left:toolbarPos.x+300,
background:"rgb(26, 116, 206)",
border:"1px solid #ddd",
borderRadius:6,
padding:"5px",
display:"flex",
gap:5,
zIndex:1000
}}
>

<button onClick={editText}>Edit✏️</button>
<button onClick={duplicateElement}>Copy📄</button>
<button onClick={deleteElement}>Delete❌</button>

</div>

)}

<div style={{position:"relative"}}>

<Stage
width={595}
height={842}
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

<Rect
x={0}
y={0}
width={595}
height={842}
fill={bgColor}
listening={false}
/>

{elements.map(el=>{

if(el.type==="text"){

return(

<Text
key={el.id}
id={`node-${el.id}`}
text={el.text}
fontSize={el.fontSize}
fontFamily={el.fontFamily}
fill={el.fill}
width={el.width}
draggable

onClick={(e)=>{

setSelectedId(el.id);

const pos=e.target.getAbsolutePosition();

setToolbarPos({
x:pos.x,
y:pos.y-40
});
}}

onDragEnd={(e)=>{

updateElement(el.id,{
...el,
x:e.target.x(),
y:e.target.y()
});
}}

onTransformEnd={(e)=>{

const node=e.target;

const scaleX=node.scaleX();
const scaleY=node.scaleY();

node.scaleX(1);
node.scaleY(1);

updateElement(el.id,{
...el,
x:node.x(),
y:node.y(),
width:node.width()*scaleX,
fontSize:el.fontSize*scaleY
});
}}
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

<Transformer
ref={transformerRef}
rotateEnabled
enabledAnchors={[
"top-left",
"top-right",
"bottom-left",
"bottom-right"
]}
/>

</Layer>
</Stage>

</div>

</div>

<Footer/>
</>
);
}