import React, { useState ,useRef} from "react";
import "../lifeoperatingsystemcss/Lifedashboard1.css"; // reuse your CSS file
import Navbar from "../Navbar/Navbar";
import lifeoperaatingsystemData from "../components/LifeoperatingsystemData";
import Footer from "../Navbar/Footer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Lifedashboard1 = () => {

  const [data, setData] = useState(
  lifeoperaatingsystemData.lifedashboard1.common
);

 

  // =========================
  // UPDATE HELPERS
  // =========================
  const updateGoal = (index, value) => {
    const updated = [...data.goals];
    updated[index].value = value;
    setData({ ...data, goals: updated });
  };

 const updateTracker = (field, value) => {
  setData({
    ...data,
    tracker: {
      ...data.tracker,
      [field]: value,
    },
  });
};

  const updatePlan = (index, value) => {
    const updated = [...data.plan];
    updated[index] = value;
    setData({ ...data, plan: updated });
  };
const addItem = (field, defaultValue) => {
  setData({
    ...data,
    [field]: [...data[field], defaultValue],
  });
};

const deleteItem = (field, index) => {
  const updated = data[field].filter(((_, i) => i !== index));
  setData({
    ...data,
    [field]: updated,
  });
};
  const dashboardRef = useRef(null);
const handlePhotoDownload = async () => {
  const element = dashboardRef.current;

  const canvas = await html2canvas(element, {
    scale: 3, // 🔥 high quality
    useCORS: true,
    backgroundColor: "#ffffff",
    width: element.scrollWidth,
    height: element.scrollHeight,
  });

  // Convert to image
  const image = canvas.toDataURL("image/png");

  // Download
  const link = document.createElement("a");
  link.href = image;
  link.download = "LifeDashboard.png";
  link.click();
};

const handlePdfDownload = async () => {
  const element = dashboardRef.current;

  const canvas = await html2canvas(element, {
    scale: 3,
    backgroundColor: "#ffffff",
  });

  const imgData = canvas.toDataURL("image/png");
const width=800;
const height=540;
  const pdf = new jsPDF({
       orientation: width > height ? "landscape" : "portrait",
    unit: "px",
    format: [width, height]
    });


  pdf.addImage(imgData, "PNG", 0, 0, width, height);
  pdf.save("LifeDashboard.pdf");
};
const [selectedDate, setSelectedDate] = useState(new Date());
const formattedDate = selectedDate.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const dayName = selectedDate.toLocaleDateString("en-US", {
  weekday: "long",
});

  // =========================
  // JSX
  // =========================
  return (
    <>
      <Navbar />

      <div className="dashboard_app-container">
        <div className="dashboard_editor-container">

          {/* ================= EDITOR ================= */}
          <div className="dashboard_editor-sidebar">
            <h2>Life Dashboard Editor</h2>

            <label>Name</label>
            <input
              value={data.name}
              onChange={(e) =>
                setData({ ...data, name: e.target.value })
              }
            />
            <h3>Select Date</h3>
<input
  type="date"
  value={selectedDate.toISOString().split("T")[0]}
  onChange={(e) => setSelectedDate(new Date(e.target.value))}
/>

<h3>Today's Plan</h3>

{data.plan.map((p, i) => (
  <div key={i} className="dynamic-field">
    <input
      value={p}
      onChange={(e) => updatePlan(i, e.target.value)}
    />

    <button
      className="delete-btn"
      onClick={() => deleteItem("plan", i)}
    >
      Delete
    </button>
  </div>
))}

<button
  className="add"
  onClick={() => addItem("plan", "New Task")}
>
  + Add Task
</button>
{/* NOTES */}
            <h3>Notes</h3>
            <textarea
              value={data.notes}
              onChange={(e) =>
                setData({ ...data, notes: e.target.value })
              }
            />

<h3>Sleep & Fitness Tracker</h3>

<input
  placeholder="Sleep Hours"
  value={data.tracker.sleep}
  onChange={(e) => updateTracker("sleep", e.target.value)}
/>

<input
  placeholder="Steps"
  value={data.tracker.steps}
  onChange={(e) => updateTracker("steps", e.target.value)}
/>

<input
  placeholder="Calories Burned"
  value={data.tracker.calories}
  onChange={(e) => updateTracker("calories", e.target.value)}
/>

<h3>Goals</h3>

{data.goals.map((g, i) => (
  <div key={i} className="dynamic-field">
    <input
      value={g.label}
      onChange={(e) => {
        const updated = [...data.goals];
        updated[i].label = e.target.value;
        setData({ ...data, goals: updated });
      }}
    />

    <input
      type="number"
      value={g.value}
      onChange={(e) => updateGoal(i, e.target.value)}
    />

    <button
      className="delete-btn"
      onClick={() => deleteItem("goals", i)}
    >
      Delete
    </button>
  </div>
))}

<button
  className="add"
  onClick={() =>
    addItem("goals", { label: "New Goal", value: 50 })
  }
>
  + Add Goal
</button>
            
            <button className="download-btn" onClick={handlePhotoDownload}>
            Download Image
          </button>
          <button className="download-btn" onClick={handlePdfDownload}>
            Download PDF
          </button>
          </div>

          {/* ================= PREVIEW ================= */}
          <div className="lifedashboard_editor-preview-wrapper">
            <div className="lifedashboard1_pdf-page" ref={dashboardRef}>
              <div className="resume-content">

                <div className="dashboard">

  {/* HEADER */}
  <div className="dashboard_header">
    <div>
      <p style={{color:"#111315",marginTop:"70px",marginLeft:"50px"}}>☀️ Good morning, {data.name}!</p>
      <p style={{color:"#111315",marginLeft:"50px"}}>Here’s your overview for today.</p>
    </div>

    <div className="dashboard_date-card">
  <strong>{formattedDate}</strong>
  <p style={{color:"#fcfafc"}}>{dayName}</p>
</div>
  </div>

  {/* ROW 1 */}
  <div className="dashboard1_row">

 {/* PLAN */}
    <div className="dashboard1_card-plans">
      <h3 className="dashboard_life_title" style={{fontSize:"15px"}}>Today's Plan</h3>

      {data.plan.map((p, i) => (<>
        <label key={i} style={{fontSize:"12px"}}>
          <input type="checkbox" style={{height:"12px",width:"12px"}} /> {p}
        </label><br></br></>
      ))}
    </div>

{/* NOTES */}
    <div className="dashboard1_card-notes">
      <h3 className="dashboard_life_title" style={{fontSize:"15px",marginBottom:"0px"}}>Notes</h3>
      <p style={{fontSize:"15px",marginTop:"0px"}}>{data.notes}</p>
    </div>
    
   

    
</div>

  {/* ROW 2 */}
  <div className="dashboard_row">

<div className="dashboard1_card-finance">
  <div className="dashboard_card-header">
    <h3
      className="dashboard_life_title"
      style={{ color: "white", fontSize: "12px" }}
    >
      Sleep & Fitness
    </h3>

    <span style={{ color: "white", fontSize: "12px" }}>
      Today
    </span>
  </div>

  <div className="dashboard_finance-grid">
    <div>
      <p style={{ color: "#fcfafc" }}>Sleep</p>
      <h4>{data.tracker.sleep} hrs</h4>
    </div>

    <div>
      <p style={{ color: "#fcfafc" }}>Steps</p>
      <h4>{data.tracker.steps}</h4>
    </div>

    <div>
      <p style={{ color: "#fcfafc" }}>Calories</p>
      <h4>{data.tracker.calories}</h4>
    </div>
  </div>
</div>
{/* GOALS */}
    <div className="dashboard1_card-goals">
      <h3 className="dashboard_life_title" style={{fontSize:"15px"}}>Goals Progress</h3>

      <div className="dashboard_goal-list">
        {data.goals.map((g, i) => (
          <div key={i} className="dashboard_goal-item">

            <div className="dashboard_ring">
              <svg>
                <circle cx="30" cy="30" r="26"></circle>
                <circle
                  cx="30"
                  cy="30"
                  r="26"
                  style={{
                    strokeDasharray: 163,
                    strokeDashoffset: 163 - (163 * g.value) / 100
                  }}
                ></circle>
              </svg>
              <span style={{color:"white"}}>{g.value}%</span>
            </div>

            <p style={{fontSize:"10px"}}>{g.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Lifedashboard1;