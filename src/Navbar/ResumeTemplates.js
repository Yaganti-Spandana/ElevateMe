import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import simpleSample1 from "../images/simple_resume_template/simple1.png";
import simpleSample2 from "../images/simple_resume_template/simple2.png";
import simpleportfolio from "../images/simple_resume_template/simple.mp4";
import twosidedsimple_invitation1 from "../images/twosidedsimple_resume_template/twosidedsimple_invitation1.png";
import twosidedsimple_invitation2 from "../images/twosidedsimple_resume_template/twosidedsimple_invitation2.png";
import twosidedsimple_portfolio from "../images/twosidedsimple_resume_template/twosidedsimple_portfolio.mp4";
import yellowbasic1 from "../images/yellowbasic_resume_template/yellowbasic1.png";
import yellowbasic2 from "../images/yellowbasic_resume_template/yellowbasic2.png";
import yellowbasic_portfolio from "../images/yellowbasic_resume_template/yellowbasic_portfolio.mp4";
import border1 from "../images/headinghighlight_resume_template/border1.png";
import border2 from "../images/headinghighlight_resume_template/border2.png";
import borderportfolio from "../images/headinghighlight_resume_template/border_highlight.mp4"
import modernSample from "../images/modern_resume_template/modern.png";
import modernportfolio from "../images/modern_resume_template/modern.mp4"
import fresher1 from "../images/fresher_resume_template/fresher1.png";
import fresher2 from "../images/fresher_resume_template/fresher2.png";
import fresherportfolio from "../images/fresher_resume_template/fresher.mp4";
import experience1 from "../images/experienced_resume_template/experience1.png";
import experience2 from "../images/experienced_resume_template/experience2.png";
import experiencedportfolio from "../images/experienced_resume_template/experienced.mp4"
import creative1 from "../images/creative_resume_template/creative1.png";
import creative2 from "../images/creative_resume_template/creative2.png";
import creativeportfolio from "../images/creative_resume_template/creative.mp4"
import black_gold from "../images/blackandgold_resume_template/black&gold.png";
import blackgoldportfolio from "../images/blackandgold_resume_template/blackgold.mp4"
import green_yellow1 from "../images/green&yellowexperienced_resume_template/green&yellow1.png";
import green_yellow2 from "../images/green&yellowexperienced_resume_template/green&yellow2.png";
import greenyellowportfolio from "../images/green&yellowexperienced_resume_template/greenyellow.mp4"
import internship1 from "../images/internship_resume_template/internship1.png";
import internship2 from "../images/internship_resume_template/internship2.png";
import internshipportfolio from "../images/internship_resume_template/internship.mp4";
import career1 from "../images/careerchange_resume_template/career1.png";
import career2 from "../images/careerchange_resume_template/career2.png";
import careerportfolio from "../images/careerchange_resume_template/career.mp4"
import SearchResults from "../Navbar/SearchResults";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import './ResumeTemplates.css'
import "../Home.css";
const templates = [
  {
    id: "simple",
    name: "Simple Resume",
    dname: "Simple Resume",
    category: "Basic",
    images: [simpleSample1, simpleSample2],
    video: simpleportfolio
  },
  {
    id: "border_highlight",
    name: "Border Highlighted Resume",
    dname: "Border Highlighted Resume",
    category: "Basic",
    images: [border1, border2],
    video: borderportfolio
  },
  {
    id: "modern",
    name: "Modern Resume",
    dname: "Modern Resume",
    category: "Professional",
    images: [modernSample],
    video: modernportfolio
  },
  {
    id: "fresher",
    name: "Fresher Resume",
    dname: "Fresher Resume",
    category: "Fresher",
    images: [fresher1, fresher2],
    video: fresherportfolio
  },
  {
    id: "experienced",
    name: "Experienced Resume",
    dname: "Experienced Resume",
    category: "Experienced",
    images: [experience1, experience2],
    video: experiencedportfolio
  },
  {
    id: "career",
    name: "Career Change Resume",
    dname: "Career Change Resume",
    category: "Professional",
    images: [career1, career2],
    video: careerportfolio
  },
  {
    id: "creative",
    name: "Creative Resume",
    dname: "Creative Resume",
    category: "Creative",
    images: [creative1, creative2],
    video: creativeportfolio
  },
  {
    id: "Black_and_Gold",
    name: "Black and Gold Modern Resume",
    dname: "Black and Gold Modern Resume",
    category: "Premium",
    images: [black_gold],
    video: blackgoldportfolio
  },
  {
    id: "green_and_yellow",
    name: "Green and Yellow Experienced Template",
    dname: "Green and Yellow Experienced Template",
    category: "Experienced",
    images: [green_yellow1, green_yellow2],
    video: greenyellowportfolio
  },
  {
    id: "internship",
    name: "Internship Resume",
    dname: "Internship Resume",
    category: "Fresher",
    images: [internship1, internship2],
    video: internshipportfolio
  },
  {
    id: "twosidedsimple",
    name: "Maroon Full Stack Web Developer Resume",
    dname: "Maroon Basic Full Stack Web Developer Two sided Simple Resume",
    images: [twosidedsimple_invitation1,twosidedsimple_invitation2], // ⭐ two images here
    video: twosidedsimple_portfolio,
    category: "Basic",
  },
  {
    id: "yellowbasic",
    name: "Yellow Basic Resume",
    dname: "Yellow and Blue Basic Resume",
    images: [yellowbasic1, yellowbasic2], // ⭐ two images here
    video: yellowbasic_portfolio,
    category: "Basic",
  },
];



const ResumeTemplates = () => {
  const categories = ["All", "Basic", "Professional", "Fresher", "Experienced", "Creative", "Premium"];
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
    placeholder="Search resume templates..."
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
    <h1 className="home-title4">Choose Your Template</h1>

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

export default ResumeTemplates;