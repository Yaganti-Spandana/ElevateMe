import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import invitation1 from "../images/invitation1.png";
import birthday_invitation1 from "../images/birthday_invitation1.png";
import engagement_invitation1 from "../images/engagement_invitation1.png";
import SearchResults from "../Navbar/SearchResults";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

import "../Home.css";
const templates = [
  {
    id: "wedding1",
    name: "Wedding Invitation",
    images: [invitation1], 
  },
  {
    id: "birthday1",
    name: "Birthday Invitation",
    images: [birthday_invitation1], 
  },
  {
    id: "engagement1",
    name: "Engagement Invitation",
    images: [engagement_invitation1], 
  },
  
];



const Invitations = () => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState({});
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
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
  <div className="home-container">
    <h1 className="home-title">Choose Your Template</h1>

    <div className="templates-grid">
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

    <Footer />
  </div>
);
};

export default Invitations;