import React, { useState ,useRef} from "react";
import "../lifeoperatingsystemcss/Lifedashboard.css"; // reuse your CSS file
import Navbar from "../Navbar/Navbar";
import lifeoperaatingsystemData from "../components/LifeoperatingsystemData";
import Footer from "../Navbar/Footer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Lifedashboard = () => {

  const [data, setData] = useState(
  lifeoperaatingsystemData.lifedashboard.common
);



  // =========================
  // UPDATE HELPERS
  // =========================
  const updateGoal = (index, value) => {
    const updated = [...data.goals];
    updated[index].value = value;
    setData({ ...data, goals: updated });
  };

  const updateFinance = (field, value) => {
    setData({
      ...data,
      finance: { ...data.finance, [field]: value },
    });
  };

  const updatePlan = (index, value) => {
    const updated = [...data.plan];
    updated[index] = value;
    setData({ ...data, plan: updated });
  };
const updateHabit = (index, value) => {
  const updated = [...data.habits];
  updated[index].value = Number(value);
  setData({ ...data, habits: updated });
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
const completedDays = data.habits.filter(h => h.value >= 5).length;
const totalDays = data.habits.length;
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
<h3>Habits</h3>

{data.habits.map((h, i) => (
  <div key={i} className="dynamic-field">

    <input
      value={h.day}
      onChange={(e) => {
        const updated = [...data.habits];
        updated[i].day = e.target.value;
        setData({ ...data, habits: updated });
      }}
    />

    <input
      type="number"
      value={h.value}
      onChange={(e) => updateHabit(i, e.target.value)}
    />

    <button
      className="delete-btn"
      onClick={() => deleteItem("habits", i)}
    >
      Delete
    </button>

  </div>
))}

<button
  className="add"
  onClick={() =>
    addItem("habits", { day: "New", value: 0 })
  }
>
  + Add Habit
</button>
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

            {/* FINANCE */}
            <h3>Finance</h3>
            <input
              placeholder="Income"
              value={data.finance.income}
              onChange={(e) =>
                updateFinance("income", e.target.value)
              }
            />
            <input
              placeholder="Expenses"
              value={data.finance.expenses}
              onChange={(e) =>
                updateFinance("expenses", e.target.value)
              }
            />
            <input
              placeholder="Savings"
              value={data.finance.savings}
              onChange={(e) =>
                updateFinance("savings", e.target.value)
              }
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
            <button className="download-btn" onClick={handlePhotoDownload}>
            Download Image
          </button>
          <button className="download-btn" onClick={handlePdfDownload}>
            Download PDF
          </button>
          </div>

          {/* ================= PREVIEW ================= */}
          <div className="lifedashboard_editor-preview-wrapper">
            <div className="lifedashboard_pdf-page" ref={dashboardRef}>
              <div className="dashboard_resume-content">

                <div className="dashboard">

  {/* HEADER */}
  <div className="dashboard_header">
    <div>
      <p style={{color:"#111315",marginTop:"80px",marginLeft:"50px"}}>☀️ Good morning, {data.name}!</p>
      <p style={{color:"#111315",marginLeft:"50px"}}>Here’s your overview for today.</p>
    </div>

    <div className="dashboard_date-card">
  <strong>{formattedDate}</strong>
  <p style={{color:"#fcfafc"}}>{dayName}</p>
</div>
  </div>

  {/* ROW 1 */}
  <div className="dashboard_row">

    {/* GOALS */}
    <div className="dashboard_card-goals">
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
    {/* PLAN */}
    <div className="dashboard_card-plans">
      <h3 className="dashboard_life_title" style={{fontSize:"15px"}}>Today's Plan</h3>

      {data.plan.map((p, i) => (<>
        <label key={i} style={{fontSize:"12px"}}>
          <input type="checkbox" style={{height:"12px",width:"12px"}} /> {p}
        </label><br></br></>
      ))}
    </div>

    {/* FINANCE */}
    <div className="dashboard_card-finance">
      <div className="dashboard_card-header">
        <h3 className="dashboard_life_title" style={{color:"white",fontSize:'12px'}}>Finances Overview</h3>
        <span  style={{color:"white",fontSize:'12px'}}>This Month</span>
      </div>

      <div className="dashboard_finance-grid">
        <div>
          <p style={{color:"#fcfafc"}}>Income</p>
          <h4 className="blue">$4,200</h4>
        </div>
        <div>
          <p style={{color:"#fcfafc"}}>Expenses</p>
          <h4 className="red">$2,315</h4>
        </div>
        <div>
          <p style={{color:"#fcfafc"}}>Savings</p>
          <h4 className="green">$1,885</h4>
        </div>
      </div>
    </div>
</div>

  {/* ROW 2 */}
  <div className="dashboard_row">


{/* HABITS */}
    <div className="dashboard_card-habits">
      <h3 className="dashboard_life_title" style={{fontSize:"15px"}}>
  Habits This Week
  <span className="tooltip" style={{color:"#fcfafc"}}>ⓘ
    <span className="tooltip-text">
      Completed means daily value ≥ 5
    </span>
  </span>
</h3>
      
      <p className="dashboard_completed">
  {completedDays} / {totalDays} Completed
</p>

      <div className="dashboard_bars">
        {data.habits.map((h, i) => (
  <div key={i} className="dashboard_bar-wrap">
    <div className="habits_bar" style={{ height: `${h.value * 18}px` }}></div>
    <span style={{color:"white"}}>{h.day}</span>
  </div>
))}
      </div>
    </div>


    {/* NOTES */}
    <div className="dashboard_card-notes">
      <h3 className="dashboard_life_title" style={{fontSize:"15px"}}>Notes</h3>
      <p>{data.notes}</p>
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

export default Lifedashboard;