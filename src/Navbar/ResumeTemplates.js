import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import simpleSample1 from "../images/simple1.png";
import simpleSample2 from "../images/simple2.png";
import simpleportfolio from "../videos/simple.mp4";
import border1 from "../images/border1.png";
import border2 from "../images/border2.png";
import borderportfolio from "../videos/border_highlight.mp4"
import modernSample from "../images/modern.png";
import modernportfolio from "../videos/modern.mp4"
import fresher1 from "../images/fresher1.png";
import fresher2 from "../images/fresher2.png";
import fresherportfolio from "../videos/fresher.mp4";
import experience1 from "../images/experience1.png";
import experience2 from "../images/experience2.png";
import experiencedportfolio from "../videos/experienced.mp4"
import creative1 from "../images/creative1.png";
import creative2 from "../images/creative2.png";
import creativeportfolio from "../videos/creative.mp4"
import black_gold from "../images/black&gold.png";
import blackgoldportfolio from "../videos/blackgold.mp4"
import green_yellow1 from "../images/green&yellow1.png";
import green_yellow2 from "../images/green&yellow2.png";
import greenyellowportfolio from "../videos/greenyellow.mp4"
import internship1 from "../images/internship1.png";
import internship2 from "../images/internship2.png";
import internshipportfolio from "../videos/internship.mp4";
import career1 from "../images/career1.png";
import career2 from "../images/career2.png";
import careerportfolio from "../videos/career.mp4"
import SearchResults from "../Navbar/SearchResults";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

import "../Home.css";
const templates = [
  {
    id: "simple",
    name: "Simple Resume",
    dname: "Simple Resume",
    images: [simpleSample1, simpleSample2], // ⭐ two images here
    video: simpleportfolio
  },
  {
    id: "border_highlight",
    name: "Border Hightlighted Resume",
    dname: "Border Hightlighted Resume",
    images: [border1, border2], // ⭐ two images here
    video: borderportfolio
  },
  
  { id: "modern", name: "Modern Resume",dname: "Modern Resume", images: [modernSample],video:modernportfolio },
  { id: "fresher",name: "Fresher Resume", dname: "Fresher Resume", images: [fresher1, fresher2],video: fresherportfolio },
  { id: "experienced", name: "Experienced Resume",dname: "Experienced Resume", images: [experience1, experience2],video: experiencedportfolio },
  {
    id: "career",
    name: "Career Change Resume",
    dname: "Career Change Resume",
    images: [career1, career2], // ⭐ two images here
    video: careerportfolio
  },
  { id: "creative",name: "Creative Resume", dname: "Creative Resume", images: [creative1, creative2],video: creativeportfolio },
  { id: "Black_and_Gold",name: "Black and Gold Modern Resume", dname: "Black and Gold Modern Resume", images: [black_gold],video: blackgoldportfolio },
  {
    id: "green_and_yellow",
    name: "Green and Yellow Experienced Template",
    dname: "Green and Yellow Experienced Template",
    images: [green_yellow1, green_yellow2], // ⭐ two images here
    video: greenyellowportfolio
  },
  {
    id: "internship",
    name: "Internship Resume",
    dname: "Internship Resume",
    images: [internship1, internship2], // ⭐ two images here
    video: internshipportfolio
  },
  
];



const ResumeTemplates = () => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState({});
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
const filteredTemplates = templates.filter((tpl)=>
    tpl.dname.toLowerCase().includes(search.toLowerCase())
  );
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
    <div className="search-bar-container">
</div>
{/* SEARCH BAR */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search resume templates..."
          className="template-search"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
      <h1 className="home-title1">Available:{search ? filteredTemplates.length : templates.length} templates. More will be added soon.
</h1>

      {/* Canva Style Results */}
      {search && (
        <SearchResults results={filteredTemplates}/>
      )}
    <div className="carousel-wrapper">

  

</div>
    <main className="page-content">
  <div className="home-container1">
    <h1 className="home-title4">Choose Your Template</h1>

    <div className="templates-grid4">
  {templates.slice(0, visibleCount).map((tpl) => {
  const currentIndex = imageIndex[tpl.id] ?? 0;
  const currentImage = tpl.images[currentIndex];

  return (
    <div key={tpl.id}>
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
        onClick={() => navigate(`/editor/${tpl.id}`)}
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
      onClick={() => setVisibleCount((prev) => prev + 10)}
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

export default ResumeTemplates;