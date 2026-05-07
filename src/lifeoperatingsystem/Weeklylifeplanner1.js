import React, { useState,useRef } from "react";
import lifeoperaatingsystemData from "../components/LifeoperatingsystemData";
import "../lifeoperatingsystemcss/Weeklyplanner1.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const Weeklyplanner1 = () => {
  const [data, setData] = useState(lifeoperaatingsystemData.weeklyplanner1);

  // ===== UPDATE =====
  const updatePriority = (index, value) => {
  const updated = [...data.priorities];
  updated[index] = value;
  setData({ ...data, priorities: updated });
};
  const updateScheduleCell = (rowIndex, dayIndex, value) => {
  const updated = [...data.schedule];
  updated[rowIndex].days[dayIndex] = value;
  setData({ ...data, schedule: updated });
};

const updateScheduleLabel = (rowIndex, value) => {
  const updated = [...data.schedule];
  updated[rowIndex].label = value;
  setData({ ...data, schedule: updated });
};

// toggle dot
const toggleHabitValue = (habitIndex, dayIndex) => {
  const updated = [...data.habitTracker];

  updated[habitIndex].values[dayIndex] =
    updated[habitIndex].values[dayIndex] === 1 ? 0 : 1;

  setData({ ...data, habitTracker: updated });
};

// update habit name
const updateHabitName = (index, value) => {
  const updated = [...data.habitTracker];
  updated[index].name = value;
  setData({ ...data, habitTracker: updated });
};

// add habit
const addHabit = () => {
  setData({
    ...data,
    habitTracker: [
      ...data.habitTracker,
      {
        name: "New Habit",
        values: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });
};

// delete habit
const deleteHabit = (index) => {
  const updated = data.habitTracker.filter((_, i) => i !== index);
  setData({ ...data, habitTracker: updated });
};
  const updateWeeklyGoals = (field, val) => {
  setData({
    ...data,
    weeklyGoals: {
      ...data.weeklyGoals,
      [field]: val,
    },
  });
};

 

const deleteItem = (field, index) => {
  const updated = data[field].filter((_, i) => i !== index);
  setData({ ...data, [field]: updated });
};

const addItem = (field, value) => {
  setData({
    ...data,
    [field]: [...data[field], value],
  });
};

  const weeklyplannerRef = useRef(null);
  const handlePhotoDownload = async () => {
    const element = weeklyplannerRef.current;
  
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
    link.download = "Weekly Planning.png";
    link.click();
  };
  
  const handlePdfDownload = async () => {
    const element = weeklyplannerRef.current;
  
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
    pdf.save("Decision Making.pdf");
  };
  const getStartOfWeek = (date) => {
  const d = new Date(date);
  const day = d.getDay(); // 0 = Sunday
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust to Monday
  return new Date(d.setDate(diff));
};
const getWeekDays = (startDate) => {
  const days = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);

    days.push({
      label: d.toLocaleDateString("en-US", { weekday: "short" }),
      date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    });
  }

  return days;
};
const [selectedWeekStart, setSelectedWeekStart] = useState(getStartOfWeek(new Date()));

const weekDays = getWeekDays(selectedWeekStart);

  

  return (
    <div className="weekly_app-container">
      <div className="weekly_editor-container">

        {/* ================= EDITOR ================= */}
        <div className="weekly_editor-sidebar">
        <h2>Weekly Planner Editor</h2>

        <label>Title</label>
        <input
          value={data.title}
          onChange={(e) =>
            setData({ ...data, title: e.target.value })
          }
        />

        <label>Focus Theme</label>
        <input
          value={data.focus}
          onChange={(e) =>
            setData({ ...data, focus: e.target.value })
          }
        />
        <h3>Select Week</h3>
<input
  type="date"
  value={selectedWeekStart.toISOString().split("T")[0]}
  onChange={(e) =>
    setSelectedWeekStart(getStartOfWeek(new Date(e.target.value)))
  }
/>

        <h3>Top Priorities</h3>

{data.priorities.map((p, i) => (
  <div key={i} className="dynamic-row">

    <input
      value={p}
      onChange={(e) => updatePriority(i, e.target.value)}
    />

    <button
      className="delete-btn"
      onClick={() => deleteItem("priorities", i)}
    >
      Delete
    </button>

  </div>
))}

<button
  className="add"
  onClick={() => addItem("priorities", "New Priority")}
>
  + Add Priority
</button>
        <h3>Weekly Schedule</h3>

{data.schedule.map((row, i) => (
  <div key={i} className="schedule-editor-row">

    {/* ROW NAME */}
    <input
      value={row.label}
      onChange={(e) =>
        updateScheduleLabel(i, e.target.value)
      }
      placeholder="Row Name (Morning, Work...)"
    />

    {/* DAYS */}
    <div className="schedule-days">
      {row.days.map((d, j) => (<>
        <input
          key={j}
          value={d}
          placeholder={data.days[j]}
          onChange={(e) =>
            updateScheduleCell(i, j, e.target.value)
          }
        /><br></br></>
      ))}
    </div>

    {/* DELETE ROW */}
    <button
      className="delete-btn"
      onClick={() => deleteItem("schedule", i)}
    >
      Delete Row
    </button>

  </div>
))}

<button
  className="add"
  onClick={() =>
    addItem("schedule", {
      label: "New Row",
      days: ["", "", "", "", "", "", ""],
    })
  }
>
  + Add Row
</button>

<h3>Habit Tracker</h3>

{data.habitTracker.map((habit, i) => (
  <div key={i} className="habit-editor">

    {/* Habit Name */}
    <input
      value={habit.name}
      onChange={(e) => updateHabitName(i, e.target.value)}
    />

    {/* Day Toggles */}
    <div className="habit-days-editor">
      {habit.values.map((v, j) => (<div className="habit_div">
        <button
          key={j}
          className={v ? "dot active" : "dot"}
          onClick={() => toggleHabitValue(i, j)}
        >
          
          <p style={{marginLeft:"-10px"}}>{data.days[j]}</p>
        </button></div>
      ))}
    </div>

    <button
      className="delete-btn"
      onClick={() => deleteHabit(i)}
    >
      Delete
    </button>

  </div>
))}

<button className="add" onClick={addHabit}>
  + Add Habit
</button>

        <h3>Weekly Goals</h3>

<textarea
  placeholder="Goal 1"
  value={data.weeklyGoals.goal1}
  onChange={(e) =>
    updateWeeklyGoals("goal1", e.target.value)
  }
/>

<textarea
  placeholder="Goal 2"
  value={data.weeklyGoals.goal2}
  onChange={(e) =>
    updateWeeklyGoals("goal2", e.target.value)
  }
/>
        <button className="download-btn" onClick={handlePhotoDownload}>
            Download Image
          </button>
          <button className="download-btn" onClick={handlePdfDownload}>
            Download PDF
          </button>
      </div>

      {/* ========= PREVIEW ========= */}
      <div className="lifedecisionmaking_editor-preview-wrapper">
            <div className="lifeweeklyplanner1_pdf-page" ref={weeklyplannerRef}>
              <div className="weekly_resume-content">

                <div className="dashboard">

          {/* HEADER */}
          <div className="weekly1_header">
              <div className="weeklyplannerdate-card">
  <strong>
    {weekDays[0].date} - {weekDays[6].date}
  </strong>
            </div>
            <div style={{color:"rgb(83, 15, 102)",display:"flex",marginLeft:"500px",fontSize:"13px",marginTop:"-20px"}}>
              <span style={{color:"rgb(83, 15, 102)"}}>Focus Theme:</span>
              <b >{data.focus}</b>
            </div>
          </div>

          {/* GRID */}
          <div className="weeklyplanner_grid">

            {/* PRIORITIES */}
            <div className="weeklyplanner1_priorities_card">
              <h4>Top 3 Priorities</h4>
              {data.priorities.map((p, i) => (
                <p key={i} style={{fontSize:"12px"}}>{i+1}. {p}</p>
              ))}
            </div>
            
            <div className="weeklyplanner1_schedule_card">
              <h4 style={{fontSize:"12px"}}>Weekly Schedule</h4>
            <table  style={{backgroundColor:"rgb(83, 15, 102)",fontSize:"10px"}}>
            {data.schedule_days.map((day, i) => (
      <th key={i} style={{color:"white",fontSize:"8px"}} >{day}</th>
    ))}
            <tbody>
  {data.schedule.map((row, i) => (
    <tr key={i}>
      <td style={{fontSize:"8px"}}>{row.label}</td>

      {row.days.map((cell, j) => (
        <td key={j} style={{fontSize:"8px"}}>{cell}</td>
      ))}
    </tr>
  ))}
</tbody></table></div></div>
<div className="weeklyplanner_grid">
            {/* HABITS */}
            <div className="weeklyplanner1_habit_card">
                <p>Habit Tracker</p>
  {/* DAY LABELS */}
  <div className="weekly1_habit-days">
    {data.days.map((day, i) => (
      <span key={i} style={{color:"white"}}>{day}</span>
    ))}
  </div>

  {/* HABITS */}
  {data.habitTracker.map((habit, i) => (
    <div key={i} className="habit-row">

      <p>{habit.name}</p>

      <div className="dots" style={{marginLeft:"-15px"}}>
        {habit.values.map((v, j) => (
          <span
            key={j}
            className={`dot ${v ? "active" : ""}`}
          ></span>
        ))}
      </div>

    </div>
  ))}
</div>

            <div className="weeklyplanner1_reflection_card">
  <h4>Weekly Goals</h4>

  <p style={{fontSize:"12px"}} >
    <b style={{fontSize:"12px"}}>Goal 1:</b> {data.weeklyGoals.goal1}
  </p>

  <p style={{fontSize:"12px"}}>
    <b style={{fontSize:"12px"}}>Goal 2:</b> {data.weeklyGoals.goal2}
  </p>
</div>

          </div>
        </div>
        </div></div>
      </div>
    </div></div>
  );
};

export default Weeklyplanner1;