import React, { useState,useRef } from "react";
import "../lifeoperatingsystemcss/Goalssystem.css";
import lifeoperaatingsystemData from "../components/LifeoperatingsystemData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Goalssystem = () => {

  const currentYear = new Date().getFullYear();

const [data, setData] = useState({
  ...lifeoperaatingsystemData.goalssystem,
  year: lifeoperaatingsystemData.goalssystem.year || currentYear
});

  // =========================
  // UPDATE FUNCTIONS
  // =========================
  const updateGoal = (i, field, value) => {
    const updated = [...data.goals];
    updated[i][field] = value;
    setData({ ...data, goals: updated });
  };

  const updateTask = (gIndex, tIndex, field, value) => {
    const updated = [...data.goals];
    updated[gIndex].tasks[tIndex][field] = value;
    setData({ ...data, goals: updated });
  };

  const addGoal = () => {
    setData({
      ...data,
      goals: [
        ...data.goals,
        {
          category: "New",
          title: "New Goal",
          progress: 50,
          target: "Dec 31, 2025",
          tasks: []
        }
      ]
    });
  };

  const deleteGoal = (index) => {
    setData({
      ...data,
      goals: data.goals.filter((_, i) => i !== index)
    });
  };

  const addTask = (index) => {
    const updated = [...data.goals];
    updated[index].tasks.push({ text: "New Task", done: false });
    setData({ ...data, goals: updated });
  };

  const deleteTask = (gIndex, tIndex) => {
    const updated = [...data.goals];
    updated[gIndex].tasks = updated[gIndex].tasks.filter((_, i) => i !== tIndex);
    setData({ ...data, goals: updated });
  };
  const goalsystemRef = useRef(null);
const handlePhotoDownload = async () => {
  const element = goalsystemRef.current;

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
  link.download = "Goal system.png";
  link.click();
};

const handlePdfDownload = async () => {
  const element = goalsystemRef.current;

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
  pdf.save("Goal System.pdf");
};

const yearOptions = Array.from({ length: 10 }, (_, i) => currentYear - 2 + i);
// example: 2023 → 2032
  return (
    <div className="goalsystem_app-container">
        <div className="goalsystem_editor-container">

      {/* ================= EDITOR ================= */}
      <div className="goalsystem_editor-sidebar">
        <h2>Goals Editor</h2>
        <h3>Year</h3>

<select
  value={data.year}
  onChange={(e) =>
    setData({ ...data, year: Number(e.target.value) })
  }
>
  {yearOptions.map((y) => (
    <option key={y} value={y}>
      {y}
    </option>
  ))}
</select>
        {data.goals.map((g, i) => (
          <div key={i} className="editor-block">
            <input
              value={g.category}
              onChange={(e) => updateGoal(i, "category", e.target.value)}
              placeholder="Category"
            />

            <input
              value={g.title}
              onChange={(e) => updateGoal(i, "title", e.target.value)}
              placeholder="Goal Title"
            />

            <input
              type="number"
              value={g.progress}
              onChange={(e) => updateGoal(i, "progress", e.target.value)}
              placeholder="Progress"
            />

            <input
              value={g.target}
              onChange={(e) => updateGoal(i, "target", e.target.value)}
              placeholder="Target Date"
            />

            <h4>Tasks</h4>

            {g.tasks.map((t, ti) => (
              <div key={ti} className="goalsystem_dynamic-field">

                <input style={{margin:"0px",width:"180px"}}
                  value={t.text}
                  onChange={(e) =>
                    updateTask(i, ti, "text", e.target.value)
                  }
                />

                <input style={{margin:"15px 0px 0px 0px",height:"20px"}}
                  type="checkbox"
                  checked={t.done}
                  onChange={(e) =>
                    updateTask(i, ti, "done", e.target.checked)
                  }
                />

                <button onClick={() => deleteTask(i, ti)} className="delete-btn">X</button>
              </div>
            ))}

            <button onClick={() => addTask(i)} className="add">+ Add Task</button>

            <button
              className="delete-btn"
              onClick={() => deleteGoal(i)}
            >
              Delete Goal
            </button>

          </div>
        ))}

        <button className="add" onClick={addGoal}>
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
      <div className="goalsystem_editor-preview-wrapper">
            <div className="goalsystem_pdf-page" ref={goalsystemRef}>
              <div className="goals_resume-content">
          <div className="goals-header">
            <span style={{color:"#445999",fontSize:"20px",marginLeft:"600px"}}>{data.year}</span>
          </div><br></br>

          <div className="goals_goals-grid">
            {data.goals.map((g, i) => (
              <div key={i} className="goals_goal-card">

                <h4>{g.category}</h4>
                <p>{g.title}</p>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${g.progress}%` }}
                  />
                </div>

                <div className="progress-text">
                  {g.progress}%
                </div>

                <p className="target" style={{color:"black"}}>Target: {g.target}</p>

                {g.tasks.map((t, ti) => (
                  <label key={ti} className="task">
                    <input type="checkbox" checked={t.done} readOnly />
                    {t.text}
                  </label>
                ))}

              </div>
            ))}
          </div>

        </div>

      </div>
    </div></div></div>
  );
};

export default Goalssystem;