import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import simpleSample1 from "./assets/simple1.png";
import simpleSample2 from "./assets/simple2.png";
import simpleportfolio from "./videos/simple.mp4";
import border1 from "./assets/border1.png";
import border2 from "./assets/border2.png";
import borderportfolio from "./videos/border_highlight.mp4"
import modernSample from "./assets/modern.png";
import modernportfolio from "./videos/modern.mp4"
import fresher1 from "./assets/fresher1.png";
import fresher2 from "./assets/fresher2.png";
import fresherportfolio from "./videos/fresher.mp4";
import experience1 from "./assets/experience1.png";
import experience2 from "./assets/experience2.png";
import experiencedportfolio from "./videos/experienced.mp4"
import creative1 from "./assets/creative1.png";
import creative2 from "./assets/creative2.png";
import creativeportfolio from "./videos/creative.mp4"
import black_gold from "./assets/black&gold.png";
import blackgoldportfolio from "./videos/blackgold.mp4"
import green_yellow1 from "./assets/green&yellow1.png";
import green_yellow2 from "./assets/green&yellow2.png";
import greenyellowportfolio from "./videos/greenyellow.mp4"
import SearchResults from "./Navbar/SearchResults";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";

import "./Home.css";
const templates = [
  {
    id: "simple",
    name: "Simple Resume",
    images: [simpleSample1, simpleSample2], // ⭐ two images here
    video: simpleportfolio
  },
  {
    id: "border_highlight",
    name: "Border Hightlighted Resume",
    images: [border1, border2], // ⭐ two images here
    video: borderportfolio
  },
  
  { id: "modern", name: "Modern Resume", images: [modernSample],video:modernportfolio },
  { id: "fresher", name: "Fresher Resume", images: [fresher1, fresher2],video: fresherportfolio },
  { id: "experienced", name: "Experienced Resume", images: [experience1, experience2],video: experiencedportfolio },
  { id: "creative", name: "Creative Resume", images: [creative1, creative2],video: creativeportfolio },
  { id: "Black_and_Gold", name: "Black and Gold Modern Resume", images: [black_gold],video: blackgoldportfolio },
  {
    id: "green_and_yellow",
    name: "Green and Yellow Experienced Template",
    images: [green_yellow1, green_yellow2], // ⭐ two images here
    video: greenyellowportfolio
  },
];



const Home = () => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState({});
  const [search, setSearch] = useState("");

const filteredTemplates = templates.filter((tpl)=>
    tpl.name.toLowerCase().includes(search.toLowerCase())
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
const [slideIndex, setSlideIndex] = useState(0);

  const cardWidth = 200;

  // duplicate templates for infinite scroll
  const loopTemplates = [...templates, ...templates];

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

  const moveLeft = () => {
    setSlideIndex((prev) => {
      if (prev === 0) {
        return templates.length - 1;
      }
      return prev - 1;
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

  <button className="arrow left" onClick={moveLeft}>
    ❮
  </button>

  <div className="carousel-window">
    <div
      className="templates-row"
      style={{
        transform: `translateX(-${slideIndex * cardWidth}px)`
      }}
    >
      {loopTemplates.map((tpl, index) => (
        <div key={index} className="carousel-card">
          <div className="template-image">
            <img src={tpl.images[0]} alt={tpl.name} />
            <div
              className="temp1"
              onClick={() => navigate(`/editor/${tpl.id}`)}
            >
              Use Template
            </div>
          </div>
        </div>
        
      ))}
    </div>
  </div>

  <button className="arrow right" onClick={moveRight}>
    ❯
  </button>

</div>
    <main className="page-content">
  <div className="home-container">
    <h1 className="home-title">Choose Your Resume Template</h1>

    <div className="templates-grid">
  {templates.map((tpl) => {
  const currentIndex = imageIndex[tpl.id] ?? 0;
  const currentImage = tpl.images[currentIndex];

  return (
    <div key={tpl.id}>
      <div className="grid-card">

        <div className="preview-container">

          {/* Image */}
          <img
            src={currentImage}
            alt={tpl.name}
            className="preview-image"
          />

          {/* Video */}
          {tpl.video && (
  <video
    className="preview-video"
    muted
    loop
    playsInline
    onMouseEnter={(e) => e.target.play()}
    onMouseLeave={(e) => e.target.pause()}
  >
    <source src={tpl.video} type="video/mp4" />
  </video>
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

    <Footer />
  </div>
);
};

export default Home;