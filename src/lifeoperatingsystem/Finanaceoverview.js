import React, { useState, useRef } from "react";
import "../lifeoperatingsystemcss/Financeoverview.css";
import lifeoperaatingsystemData from "../components/LifeoperatingsystemData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Financeoverview = () => {

  const [data, setData] = useState(
    lifeoperaatingsystemData.financeoverview
  );

  const financeRef = useRef(null);

  const percent = Math.round((data.saved / data.savingsGoal) * 100);
  // =========================
  // UPDATE FUNCTIONS
  // =========================
  const updateField = (field, value) => {
    setData({ ...data, [field]: Number(value) || value });
  };

  const updateGoal = (index, field, value) => {
    const updated = [...data.goals];
    updated[index][field] = field === "progress" ? Number(value) : value;
    setData({ ...data, goals: updated });
  };

  const addGoal = () => {
    setData({
      ...data,
      goals: [...data.goals, { name: "New Goal", progress: 50 }]
    });
  };

  const deleteGoal = (index) => {
    const updated = data.goals.filter((_, i) => i !== index);
    setData({ ...data, goals: updated });
  };

  // =========================
  // DOWNLOAD
  // =========================
  const handlePhotoDownload = async () => {
    const canvas = await html2canvas(financeRef.current, { scale: 3 });
    const link = document.createElement("a");
    link.download = "Finance.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const handlePdfDownload = async () => {
    const canvas = await html2canvas(financeRef.current, { scale: 3 });
    const pdf = new jsPDF("landscape", "px", [800, 540]);
    pdf.addImage(canvas.toDataURL(), "PNG", 0, 0, 800, 540);
    pdf.save("Finance.pdf");
  };
  const [selectedDate] = useState(new Date());
  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  

  const total = data.expenseBreakdown.reduce((sum, i) => sum + i.percent, 0);

let cumulative = 0;

const radius = 50;
const circumference = 2 * Math.PI * radius;

  // =========================
  // JSX
  // =========================
  return (
    <div className="finance_app-container">
        <div className="finance_editor-container">

      {/* ================= EDITOR ================= */}
      <div className="finance_editor-sidebar">

        <h2>Finance Editor</h2>

        <label>Month</label>
        <input
          value={data.month}
          onChange={(e) => updateField("month", e.target.value)}
        />

        <label>Income</label>
        <input
          type="number"
          value={data.income}
          onChange={(e) => updateField("income", e.target.value)}
        />

        <label>Expenses</label>
        <input
          type="number"
          value={data.expenses}
          onChange={(e) => updateField("expenses", e.target.value)}
        />

        <label>Savings</label>
        <input
          type="number"
          value={data.savings}
          onChange={(e) => updateField("savings", e.target.value)}
        />

        <label>Investments</label>
        <input
          type="number"
          value={data.investments}
          onChange={(e) => updateField("investments", e.target.value)}
        />
<h3>Expense Breakdown</h3>

{data.expenseBreakdown.map((item, i) => (
  <div key={i} className="dynamic-field">

    <input
      value={item.name}
      onChange={(e) => {
        const updated = [...data.expenseBreakdown];
        updated[i].name = e.target.value;
        setData({ ...data, expenseBreakdown: updated });
      }}
    />

    <input
      type="number"
      value={item.percent}
      onChange={(e) => {
        const updated = [...data.expenseBreakdown];
        updated[i].percent = Number(e.target.value);
        setData({ ...data, expenseBreakdown: updated });
      }}
    />

    <input
      type="number"
      value={item.amount}
      onChange={(e) => {
        const updated = [...data.expenseBreakdown];
        updated[i].amount = Number(e.target.value);
        setData({ ...data, expenseBreakdown: updated });
      }}
    />

    <button onClick={() => {
      const updated = data.expenseBreakdown.filter((_, idx) => idx !== i);
      setData({ ...data, expenseBreakdown: updated });
    }} className="delete-btn">
      Delete
    </button>

  </div>
))}

<button onClick={() => {
  setData({
    ...data,
    expenseBreakdown: [
      ...data.expenseBreakdown,
      { name: "New", percent: 10, amount: 100, color: "#999" }
    ]
  });
}} className="add">
  + Add Expense
</button>
        <h3>Goal Tracker</h3>

        <label>Savings Goal</label>
        <input
          type="number"
          value={data.savingsGoal}
          onChange={(e) => updateField("savingsGoal", e.target.value)}
        />

        <label>Saved Amount</label>
        <input
          type="number"
          value={data.saved}
          onChange={(e) => updateField("saved", e.target.value)}
        />

        {/* GOALS */}
        <h3>Goals</h3>

        {data.goals.map((g, i) => (
          <div key={i} className="dynamic-field">

            <input
              value={g.name}
              onChange={(e) =>
                updateGoal(i, "name", e.target.value)
              }
            />

            <input
              type="number"
              value={g.progress}
              onChange={(e) =>
                updateGoal(i, "progress", e.target.value)
              }
            />

            <button onClick={() => deleteGoal(i)} className="delete-btn">
              Delete
            </button>

          </div>
        ))}

        <button onClick={addGoal} className="add">+ Add Goal</button><br></br>

        <button className="download-btn" onClick={handlePhotoDownload}>
            Download Image
          </button>
          <button className="download-btn" onClick={handlePdfDownload}>
            Download PDF
          </button>

      </div>

      {/* ================= PREVIEW ================= */}
      <div className="finance_editor-preview-wrapper">

        <div className="finance_pdf-page" ref={financeRef}>
          <div className="finance_resume-content">

          <h3>{}</h3>
  <p style={{color:"#dfb552",fontSize:"15px",marginLeft:"500px"}}>{formattedDate}</p>

          <div className="finance_finance-grid">
            <div className="finance_l1">Income <h4>${data.income}</h4></div>
            <div className="finance_l2">Expenses <h4 className="red">${data.expenses}</h4></div>
            <div className="finance_l3">Savings <h4 className="green">${data.savings}</h4></div>
            <div className="finance_l4">Investments <h4>${data.investments}</h4></div>
          </div>
          </div><div className="finance-grid1">
          <div className="middle-section">

  {/* EXPENSE BREAKDOWN */}
  <div className="expense-box">
    <div>
    <h6>Expense Breakdown</h6>
   <svg width="110" height="110" viewBox="0 0 120 120">
  <g transform="rotate(-90 60 60)">
    {data.expenseBreakdown.map((item, i) => {
      const dash = (item.percent / total) * circumference;
      const gap = circumference - dash;

      const circle = (
        <circle
          key={i}
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke={item.color}
          strokeWidth="20"
          strokeDasharray={`${dash} ${gap}`}
          strokeDashoffset={-cumulative}
        />
      );

      cumulative += dash;
      return circle;
    })}
  </g>
</svg></div>
<div className="legend">
  {data.expenseBreakdown.map((item, i) => (
    <div key={i} className="legend-row">

      <span
        className="dot-color"
        style={{ background: item.color }}
      ></span>

      <span style={{ width:"50%" }}>{item.name}</span>

      <span  style={{ width:"30%" }}>{item.percent}%</span>

      <span  style={{ width:"20%" }}>${item.amount}</span>

    </div>
  ))}
</div>
  </div>

</div>
          {/* PROGRESS */}
          <div className="progress">
            <p>Goal: ${data.savingsGoal}</p>

            <div className="bar">
              <div style={{ width: `${percent}%` }}></div>
            </div>

            <p>Saved: ${data.saved} ({percent}%)</p>
          </div></div>

          {/* GOALS */}
          <div className="finance_goals">
            {data.goals.map((g, i) => (
              <div key={i}>
                <p style={{fontSize:"10px"}}>{g.name}</p>
                <div className="bar small">
                  <div style={{ width: `${g.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Financeoverview;