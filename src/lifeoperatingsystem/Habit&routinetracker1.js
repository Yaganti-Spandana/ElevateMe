import React, { useState, useRef } from "react";
import "../lifeoperatingsystemcss/Habits&routinetracker1.css";
import lifeoperaatingsystemData from "../components/LifeoperatingsystemData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const HabitsRoutinetracker1 = () => {

  const [data, setData] = useState(
    lifeoperaatingsystemData.habits_routinetracker1
  );

  // =========================
  // UPDATE FUNCTIONS
  // =========================
  const toggleDay = (habitIndex, dayIndex) => {
    const updated = [...data.habits];
    updated[habitIndex].days[dayIndex] =
      updated[habitIndex].days[dayIndex] ? 0 : 1;

    setData({ ...data, habits: updated });
  };

  const updateHabitName = (index, value) => {
    const updated = [...data.habits];
    updated[index].name = value;
    setData({ ...data, habits: updated });
  };

  const updateTodayTask = (index, value) => {
    const updated = [...data.today];
    updated[index] = value;
    setData({ ...data, today: updated });
  };

  const addItem = (field, value) => {
    setData({
      ...data,
      [field]: [...data[field], value],
    });
  };

  const deleteItem = (field, index) => {
    const updated = data[field].filter((_, i) => i !== index);
    setData({
      ...data,
      [field]: updated,
    });
  };

  // =========================
  // DOWNLOAD
  // =========================
  const habitRef = useRef(null);

  const handlePhotoDownload = async () => {
    const canvas = await html2canvas(habitRef.current, { scale: 3 });
    const link = document.createElement("a");
    link.download = "Habits & Routine.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const handlePdfDownload = async () => {
    const canvas = await html2canvas(habitRef.current, { scale: 3 });
    const pdf = new jsPDF("landscape", "px", [800, 540]);
    pdf.addImage(canvas.toDataURL(), "PNG", 0, 0, 800, 540);
    pdf.save("Habits & Routine.pdf");
  };
const total = data.habits.length * 7;

const completed = data.habits.reduce(
  (sum, h) => sum + h.days.filter(d => d === 1).length,
  0
);

const completionRate = Math.round((completed / total) * 100);
const streakData = [0,1,2,3,4,5,6].map(dayIndex => {
  let count = 0;

  data.habits.forEach(h => {
    if (h.days[dayIndex]) count++;
  });

  return count;
});
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
  // =========================
  // JSX
  // =========================
  return (
    <div className="habits_app-container">
        <div className="habits_editor-container">

          {/* ================= EDITOR ================= */}
          <div className="habits_editor-sidebar">

        <h2>Habits Editor</h2>


        <h3>Select Week</h3>
<input
  type="date"
  value={selectedWeekStart.toISOString().split("T")[0]}
  onChange={(e) =>
    setSelectedWeekStart(getStartOfWeek(new Date(e.target.value)))
  }
/>

        {/* HABITS */}
        <h3>Habits</h3>

        {data.habits.map((h, i) => (
          <div key={i} className="dynamic-field">

            <input
              value={h.name}
              onChange={(e) => updateHabitName(i, e.target.value)}
            />

            <button onClick={() => deleteItem("habits", i)} className="delete-btn">
              Delete
            </button>

          </div>
        ))}

        <button onClick={() =>
          addItem("habits", { name: "New Habit", days: [0,0,0,0,0,0,0] })
        }>
          + Add Habit
        </button>

        {/* TODAY ROUTINE */}
        <h3>Today's Routine</h3>

        {data.today.map((t, i) => (
          <div key={i} className="dynamic-field">

            <input
              value={t}
              onChange={(e) => updateTodayTask(i, e.target.value)}
            />

            <button onClick={() => deleteItem("today", i)} className="delete-btn">
              Delete
            </button>

          </div>
        ))}

        <button onClick={() => addItem("today", "New Task")}>
          + Add Task
        </button>

        {/* STATS */}
        <h3>Stats</h3>


        <input
          type="number"
          value={data.bestStreak}
          onChange={(e) =>
            setData({ ...data, bestStreak: e.target.value })
          }
          placeholder="Best Streak"
        />

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

        <div className="lifehabit1_pdf-page" ref={habitRef}>
          <div className="habits1_resume-content">
            <h3>{}</h3>
            <div className="habit_date-card">
  <strong>
    {weekDays[0].date} - {weekDays[6].date}
  </strong>
</div>

            <table style={{marginTop:"10px",fontSize:"10px",marginLeft:"10px",width:"200px"}} className="habits_table">
              <thead>
                <tr className="habits_border">
                  <th className="habits_border">Habit</th>
                  {["M","T","W","T","F","S","S"].map(d => (
                    <th key={d} className="habits_border">{d}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.habits.map((h, i) => (
                  <tr key={i} className="habits_border">
                    <td style={{fontSize:"10px"}} className="habits_border">{h.name}</td>

                    {h.days.map((d, j) => (
                      <td key={j} className="habits_border">
                        <div
                          className={d ? "dot active" : "dot"}
                          onClick={() => toggleDay(i, j)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="stats">
              <p style={{fontSize:"13px"}}>Completion: {completionRate}%</p>
              <p style={{fontSize:"13px",marginTop:"-15px"}}>Best Streak: {data.bestStreak} days</p>
              <div className="habit1_display"><div className="progress-ring">
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" className="bg"></circle>
    <circle
      cx="50"
      cy="50"
      r="40"
      className="progress"
      style={{
        strokeDasharray: 251,
        strokeDashoffset: 251 - (251 * completionRate) / 100
      }}
    ></circle>
  </svg>

  <span>{completionRate}%</span>
</div>
<div className="chart">
  <svg viewBox="0 0 300 100">

    <polyline
      fill="none"
      stroke="#3b82f6"
      strokeWidth="3"
      points={streakData
        .map((v, i) => `${i * 40},${100 - v * 15}`)
        .join(" ")}
    />

  </svg></div>
</div>
            </div>

            <div className="habit1_today">
              <h4>Today's Routine</h4>
              {data.today.map((t, i) => (
                <label key={i}>
                  <input type="checkbox" /> {t}
                </label>
              ))}
            </div>

            <div className="habit1_notes">
              <h4>Notes</h4>
              <p style={{color:"white"}}>{data.notes}</p>
            </div>

          </div>
        </div>

      </div>
    </div></div>
  );
};

export default HabitsRoutinetracker1;