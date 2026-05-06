import React, { useState, useRef } from "react";
import "../lifeoperatingsystemcss/Decisionmaking1.css";
import lifeoperaatingsystemData from "../components/LifeoperatingsystemData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Decisionmaking1 = () => {
  const [data, setData] = useState(
    lifeoperaatingsystemData.decisionmaking1
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
          <h2>Decision Editor</h2>

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
          <input
  type="date"
  value={data.decision.deadline || ""}
  onChange={(e) =>
    updateField("deadline", e.target.value)
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
        <div className="lifedecisionmaking_editor-preview-wrapper">
            <div className="lifedecisionmaking1_pdf-page" ref={decisionmakingRef}>
              <div className="decision_resume-content">

                <div className="dashboard">

            

            <div className="decision1_grid">

              {/* 1 */}
              <div className="decision1_card">
                <h4>1. Clarify the Decision</h4>
                <p><strong>From:</strong> {data.decision.from}</p>
                <p><strong>To:</strong> {data.decision.to}</p>
              </div>


              {/* 5 */}
              <div className="decision1_decision_card">
                <h4  style={{marginTop:"0px",marginBottom:"0px"}}>4. Decision</h4>

                <div className="decision-box" style={{fontSize:"13px",padding:"0px"}}>
                  <strong>{totalScore} / {maxScore}</strong>
                  <p>
                    {totalScore > maxScore * 0.6
                      ? "This looks like a strong decision."
                      : "You may want to rethink this."}
                  </p>
                </div>
              </div></div>
              {/* 3 */}
               {/* 2 */}
               <div className="decision1_grid">
              <div className="decision1_factors_card">
                <h4>2. Evaluate Key Factors</h4>

                {data.factors.map((f, i) => (
                  <div key={i} className="factor-row">
                    <span style={{color:"white",fontSize:"13px"}}>{f.name}</span>
                    <span style={{color:"white",marginLeft:"80px",fontSize:"13px"}}>{f.score}</span>
                  </div>
                ))}

                <div className="total">
                  {totalScore} / {maxScore}
                </div>
              </div>
              {/* 5 */}

              <div className="decision1_pros_card">
                <h4>3. Pros & Cons</h4>

                <div className="decision1_pros-cons">
                  <div>
                    <strong>Pros</strong>
                    <ul>
                      {data.pros.map((p, i) => <li key={i} style={{fontSize:"10px"}}>{p}</li>)}
                    </ul>
                  </div>

                  <div>
                    <strong>Cons</strong>
                    <ul>
                      {data.cons.map((c, i) => <li key={i} style={{fontSize:"10px"}}>{c}</li>)}
                    </ul>
                  </div></div></div>
                </div>
                <div className="decision-grid">
                <div className="decision_nextstep_card wide">
                <h4>Next Steps</h4>
                <ul style={{fontSize:"12px",paddingLeft:"35px"}}>
                  {data.nextSteps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              {/* 4 */}
                
              <div className="decision1_deadline_card">
  <h4>Deadline</h4>

  <div className="decision1-box">
    <strong>
      {data.decision.deadline || "Not Set"}
    </strong>

    <p style={{fontSize:"12px"}}>
      Complete your decision before this date.
    </p>
  </div>
</div>
              </div>
            </div>
          </div>

      </div>
    </div></div></div>
  );
};

export default Decisionmaking1;