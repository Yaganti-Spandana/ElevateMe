import React, { useState, useRef } from "react";
import "../lifeoperatingsystemcss/Decisionmaking2.css";
import lifeoperaatingsystemData from "../components/LifeoperatingsystemData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Decisionmaking2 = () => {
  const [data, setData] = useState(
    lifeoperaatingsystemData.decisionmaking2
  );


  // =========================
  // UPDATE FUNCTIONS
  // =========================
  const updateFactor = (index, value) => {
    const updated = [...data.factors];
    updated[index].score = Number(value);
    setData({ ...data, factors: updated });
  };

  const updateField = (field, value) => {
    setData({
      ...data,
      decision: { ...data.decision, [field]: value },
    });
  };

  const updateList = (field, index, value) => {
    const updated = [...data[field]];
    updated[index] = value;
    setData({ ...data, [field]: updated });
  };

  const addItem = (field, defaultValue) => {
    setData({
      ...data,
      [field]: [...data[field], defaultValue],
    });
  };

  const deleteItem = (field, index) => {
    const updated = data[field].filter((_, i) => i !== index);
    setData({ ...data, [field]: updated });
  };

  // =========================
  // SCORE
  // =========================
  const totalScore = (data.factors || []).reduce(
    (sum, f) => sum + f.score,
    0
  );

  const maxScore = (data.factors || []).length * 10;
  const decisionmakingRef = useRef(null);
  const handlePhotoDownload = async () => {
    const element = decisionmakingRef.current;
  
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
    link.download = "Decision Making.png";
    link.click();
  };
  
  const handlePdfDownload = async () => {
    const element = decisionmakingRef.current;
  
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
  // =========================
  // JSX
  // =========================
  return (
    <div className="decision_app-container">
      <div className="decision_editor-container">

        {/* ================= EDITOR ================= */}
        <div className="decision_editor-sidebar">
          <h2>Wellness Planner</h2>

          <label>Title</label>
          <input
            value={data.title}
            onChange={(e) =>
              setData({ ...data, title: e.target.value })
            }
          />

          {/* DECISION */}
          <h3>Decision</h3>

          <input
            placeholder="From"
            value={data.decision.from}
            onChange={(e) =>
              updateField("from", e.target.value)
            }
          />

          <input
            placeholder="To"
            value={data.decision.to}
            onChange={(e) =>
              updateField("to", e.target.value)
            }
          />

          {/* FACTORS */}
          <h3>Factors</h3>

          {data.factors.map((f, i) => (
            <div key={i} className="dynamic-field">
              <input
                value={f.name}
                onChange={(e) => {
                  const updated = [...data.factors];
                  updated[i].name = e.target.value;
                  setData({ ...data, factors: updated });
                }}
              />

              <input
                type="number"
                value={f.score}
                onChange={(e) =>
                  updateFactor(i, e.target.value)
                }
              />

              <button onClick={() => deleteItem("factors", i)} className="delete-btn">
                Delete
              </button>
            </div>
          ))}

          <button onClick={() => addItem("factors", { name: "New", score: 5 })} className="add">
            + Add Factor
          </button>

          {/* PROS */}
          <h3>Pros</h3>
          {data.pros.map((p, i) => (
            <div key={i} className="dynamic-field">
              <input
                value={p}
                onChange={(e) =>
                  updateList("pros", i, e.target.value)
                }
              />
              <button onClick={() => deleteItem("pros", i)} className="delete-btn">Delete</button>
            </div>
          ))}
          <button onClick={() => addItem("pros", "New Pro")} className="add">
            + Add
          </button>

          {/* CONS */}
          <h3>Cons</h3>
          {data.cons.map((c, i) => (
            <div key={i} className="dynamic-field">
              <input
                value={c}
                onChange={(e) =>
                  updateList("cons", i, e.target.value)
                }
              />
              <button onClick={() => deleteItem("cons", i)} className="delete-btn">Delete</button>
            </div>
          ))}
          <button onClick={() => addItem("cons", "New Con")} className="add">
            + Add
          </button>

          {/* NEXT STEPS */}
          <h3>Next Steps</h3>
          {data.nextSteps.map((s, i) => (
            <div key={i} className="dynamic-field">
              <input
                value={s}
                onChange={(e) =>
                  updateList("nextSteps", i, e.target.value)
                }
              />
              <button onClick={() => deleteItem("nextSteps", i)} className="delete-btn">
                Delete
              </button>
            </div>
          ))}
          <button onClick={() => addItem("nextSteps", "New Step")} className="add">
            + Add Step
          </button>
          <button className="download-btn" onClick={handlePhotoDownload}>
            Download Image
          </button>
          <button className="download-btn" onClick={handlePdfDownload}>
            Download PDF
          </button>
        </div>

        {/* ================= PREVIEW ================= */}
        <div className="lifedecisionmaking_editor-preview-wrapper">
            <div className="lifedecisionmaking2_pdf-page" ref={decisionmakingRef}>
              <div className="decision_resume-content">

                <div className="dashboard">

            

            <div className="decision2-grid">

              {/* 1 */}
              <div className="decision2_card">
                <h4>1. Lifestyle Transformation</h4>
                <p><strong>From:</strong> {data.decision.from}</p>
                <p><strong>To:</strong> {data.decision.to}</p>
              </div>

              {/* 2 */}
              <div className="decision2_factors_card">
                <h4>2. Wellness Score</h4>

                {data.factors.map((f, i) => (
                  <div key={i} className="factor-row">
                    <span style={{color:"white", fontSize:"12px"}}>{f.name}</span>
                    <span style={{color:"white", fontSize:"12px"}}>{f.score}</span>
                  </div>
                ))}

                <div className="total">
                  {totalScore} / {maxScore}
                </div>
              </div>

              {/* 5 */}
              <div className="decision2_decision_card">
                <h4>4. Wellness Readiness</h4>

                <div className="decision2-box">
                  <strong>{totalScore} / {maxScore}</strong>
                  <p>
                    {totalScore > maxScore * 0.6
  ? "You're ready to build a healthier lifestyle."
  : "Start with small wellness habits first."}
                  </p>
                </div>
              </div>
              {/* 3 */}
              
              </div>
              {/* 4 */}
              <div className="decision2-grid">
                {/* 5 */}

              <div className="decision2_pros_card">
                <h4>3. Benefits & Challenges</h4>

                <div className="pros-cons">
                  <div>
                    <strong>Pros</strong>
                    <ul>
                      {data.pros.map((p, i) => <li key={i} style={{fontSize:"12px"}}>{p}</li>)}
                    </ul>
                  </div>

                  <div>
                    <strong>Cons</strong>
                    <ul>
                      {data.cons.map((c, i) => <li key={i} style={{fontSize:"12px"}}>{c}</li>)}
                    </ul>
                  </div></div>
                </div>
                <div className="decision2_nextstep_card wide">
                <h4>Next Steps</h4>
                <ul>
                  {data.nextSteps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          </div>

      </div>
    </div></div></div>
  );
};

export default Decisionmaking2;