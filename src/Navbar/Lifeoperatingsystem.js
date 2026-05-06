import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import lifedashboard from "../images/lifedashboard/lifedashboard.png";
import lifedashboard1 from "../images/lifedashboard/lifedashboard1.png";
import lifedashboard2 from "../images/lifedashboard/lifedashboard2.png";
import decisionmaking from "../images/lifedashboard/decisionmaking.png";
import decisionmaking1 from "../images/lifedashboard/decisionmaking1.png";
import decisionmaking2 from "../images/lifedashboard/decisionmaking2.png";
import weeklyplanner from "../images/lifedashboard/weeklyplanner.png";
import weeklyplanner1 from "../images/lifedashboard/weeklyplanner1.png";
import weeklyplanner2 from "../images/lifedashboard/weeklyplanner2.png";
import goalssystem from "../images/lifedashboard/goalssystem.png";
import goalssystem2 from "../images/lifedashboard/goalssystem2.png";
import goalssystem1 from "../images/lifedashboard/goalssystem1.png"
import habits from "../images/lifedashboard/habits.png"
import habits1 from "../images/lifedashboard/habits1.png"
import habits2 from "../images/lifedashboard/habits2.png"
import financeoverview from "../images/lifedashboard/financeoverview.png"
import financeoverview1 from "../images/lifedashboard/financeoverview1.png"
import financeoverview2 from "../images/lifedashboard/financeoverview2.png"
import SearchResults from "../Navbar/SearchResults";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import './ResumeTemplates.css'
import "../Home.css";
const templates = [
    {
    id: "lifedashboard",
    name: "Life Dashboard",
    dname: "Life Dashboard",
    category: "Life Dashboard",
    images: [lifedashboard],
  },
  {
    id: "decisionmaking",
    name: "Decision Making",
    dname: "Decision Making",
    category: "Decision Making",
    images: [decisionmaking],
  },
  {
    id: "weeklyplanner",
    name: "Weekly Life Planner",
    dname: "Weekly Life Planner",
    category: "Weekly Life Planner",
    images: [weeklyplanner],
  },
  {
    id: "goalssystem",
    name: "Goals System",
    dname: "Goals System",
    category: "Goals System",
    images: [goalssystem],
  },
  {
    id: "habits_routinetracker",
    name: "Habits & Routine Tracker",
    dname: "Habits & Routine Tracker",
    category: "Habit and Routine Tracker",
    images: [habits],
  },
  {
    id: "financeoverview",
    name: "Finance Overview",
    dname: "Finance Overview",
    category: "Finance Overview",
    images: [financeoverview],
  },
  {
    id: "lifedashboard1",
    name: "Life Dashboard",
    dname: "Life Dashboard",
    category: "Life Dashboard",
    images: [lifedashboard1],
  },
  {
    id: "decisionmaking1",
    name: "Decision Making",
    dname: "Decision Making",
    category: "Decision Making",
    images: [decisionmaking1],
  },
  {
    id: "weeklyplanner1",
    name: "Weekly Life Planner",
    dname: "Weekly Life Planner",
    category: "Weekly Life Planner",
    images: [weeklyplanner1],
  },
  {
    id: "goalssystem1",
    name: "Goals System",
    dname: "Goals System",
    category: "Goals System",
    images: [goalssystem1],
  },
   {
    id: "habits_routinetracker1",
    name: "Habits & Routine Tracker",
    dname: "Habits & Routine Tracker",
    category: "Habit and Routine Tracker",
    images: [habits1],
  },
  {
    id: "financeoverview1",
    name: "Finance Overview",
    dname: "Finance Overview",
    category: "Finance Overview",
    images: [financeoverview1],
  },
   {
    id: "lifedashboard2",
    name: "Wellness + Lifestyle Theme Life Dashboard",
    dname: "Wellness + Lifestyle Theme Life Dashboard",
    category: "Life Dashboard",
    images: [lifedashboard2],
  },
  {
    id: "decisionmaking2",
    name: "Wellness + Lifestyle Theme Decision Making",
    dname: "Wellness + Lifestyle Theme Decision Making",
    category: "Decision Making",
    images: [decisionmaking2],
  },
  {
    id: "weeklyplanner2",
    name: "Wellness + Lifestyle Theme Weekly Life Planner",
    dname: "Wellness + Lifestyle Theme Weekly Life Planner",
    category: "Weekly Life Planner",
    images: [weeklyplanner2],
  },
   {
    id: "goalssystem2",
    name: "Wellness + Lifestyle Theme Goals System",
    dname: "Wellness + Lifestyle Theme Goals System",
    category: "Goals System",
    images: [goalssystem2],
  },
  {
    id: "habits_routinetracker2",
    name: "Wellness + Lifestyle Theme Habits & Routine Tracker",
    dname: "Wellness + Lifestyle Theme Habits & Routine Tracker",
    category: "Habit and Routine Tracker",
    images: [habits2],
  },
   {
    id: "financeoverview2",
    name: "Wellness + Lifestyle Theme Finance Overview",
    dname: "Wellness + Lifestyle Theme Finance Overview",
    category: "Finance Overview",
    images: [financeoverview2],
  },
  
];



const Lifeoperatingsystem = () => {
  const categories = ["All", "Life Dashboard", "Decision Making", "Weekly Life Planner", "Goals System", "Habit and Routine Tracker", "Finance Overview"];
  const [category, setCategory] = useState("All");

  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState({});
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
const filteredTemplates = templates.filter((tpl) => {
  const matchesSearch = tpl.dname.toLowerCase().includes(search.toLowerCase());
  const matchesCategory = category === "All" || tpl.category === category;

  return matchesSearch && matchesCategory;
});
  useEffect(() => {
  const interval = setInterval(() => {
    setImageIndex((prev) => {
      const updated = { ...prev };

      templates.forEach((tpl) => {
        if (tpl.images.length > 1) {
          updated[tpl.id] =
            ((updated[tpl.id] || 0) + 1) % tpl.images.length;
        }
      });

      return updated;
    });
  }, 3000);

  return () => clearInterval(interval);
}, []);

const [hoveredId, setHoveredId] = useState(null);
const [slideIndex, setSlideIndex] = useState(0);


  // auto move every 1.5s
  useEffect(() => {
  const interval = setInterval(() => {
    moveRight();
  }, 1500);

  return () => clearInterval(interval);
}, [slideIndex]);
  const moveRight = () => {
    setSlideIndex((prev) => {
      if (prev + 1 >= templates.length) {
        return 0;
      }
      return prev + 1;
    });
  };

  
  return (
  <div className="page-wrapper">
    <Navbar />
<div className="filters-bar">

  <input
    type="text"
    placeholder="Search Life Operating System Templates..."
    className="template-search"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
  />

  <div className="category-dropdown">
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="category-select"
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  </div>

</div>
      <h1 className="home-title1">Available:{filteredTemplates.length} templates. More will be added soon.
</h1>

      {/* Canva Style Results */}
      {search && (
        <SearchResults results={filteredTemplates}/>
      )}
    <div className="carousel-wrapper">

  

</div>
    <main className="page-content">
  <div className="home-container1">
    <h1 className="home-title4">Choose Your Life Operating System Template</h1>

    <div className="templates-grid4">
  {filteredTemplates.slice(0, visibleCount).map((tpl) => {
  const currentIndex = imageIndex[tpl.id] ?? 0;
  const currentImage = tpl.images[currentIndex];

  return (
    <div key={tpl.id} onClick={() => navigate(`/editor/${tpl.id}`)}>
      <div className="grid-card">

        <div className={`preview-container ${tpl.video ? "has-video" : ""}`}
  onMouseEnter={() => {
    if (tpl.video) setHoveredId(tpl.id);
  }}
  onMouseLeave={() => setHoveredId(null)}
>

  {tpl.video && hoveredId === tpl.id ? (
    <video
      className="preview-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={tpl.video} type="video/mp4" />
    </video>
  ) : (
    <img
      src={currentImage}
      alt={tpl.name}
      className="preview-image"
    />
  )}

</div>

        <p>{tpl.name}</p>

      </div>

      <div
        className="temp"
      >
        Use This Template
      </div>
    </div>
  );
})}
</div>
  </div>
</main>

{visibleCount < templates.length && (
  <div className="load-more-container">
    <button
      className="load-more-btn"
      onClick={() => setVisibleCount((prev) => prev + 12)}
    >
      Load More Templates
    </button>
  </div>
)}
<div style={{ marginTop: "60px" }} />
    <Footer />
  </div>
);
};

export default Lifeoperatingsystem;