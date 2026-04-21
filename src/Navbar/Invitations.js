import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import invitation1 from "../images/invitation1.png";
import birthday_invitation1 from "../images/birthday_invitation1.png";
import micky_mouse_birthday from "../images/micky_mouse_birthday.png";
import collage_invitation from "../images/collage_invitation.png";
import unicorn_invitation from "../images/unicorn_invitation.png";
import engagement_invitation1 from "../images/engagement_invitation1.png";
import kittyparty1 from "../images/kittyparty1.png";
import haldi_invitation1 from "../images/haldi_invitation1.png";
import namingceremony_invitation1 from "../images/namingceremony_invitation1.png";
import gruha_pravesham1 from "../images/gruha_pravesham1.png";
import diwali_invitation1 from "../images/diwali_invitation1.png";
import productlaunch_invitation1 from "../images/productlaunch_invitation1.png";
import musicevent_invitation1 from "../images/musicevent_invitation1.png";
import wedding_invitation1 from "../images/wedding_invitation1.png";
import collegefest1 from "../images/collegefest1.png";
import collegefest2 from "../images/collegefest2.png";
import collegefest3 from "../images/collegefest3.png";
import cricketsports_invitation from "../images/cricketsports_invitation.png";
import seminar_invitation from "../images/seminar_invitation.png";
import graduation_invitation from "../images/graduation_invitation.png";
import jobfair_invitation from "../images/jobfair_invitation.png";
import SearchResults from "../Navbar/SearchResults";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

import "../Home.css";
const templates = [
  {
    id: "wedding1",
    name: "Wedding Invitation",
    dname: "Wedding Invitation",
    category: "Wedding",
    images: [invitation1],
  },
  {
    id: "birthday1",
    name: "Birthday Invitation",
    dname: "Birthday Invitation",
    category: "Birthday",
    images: [birthday_invitation1],
  },
  {
    id: "engagement1",
    name: "Engagement Invitation",
    dname: "Engagement Invitation",
    category: "Wedding",
    images: [engagement_invitation1],
  },
  {
    id: "kittyparty1",
    name: "Kitty Party Invitation",
    dname: "Kitty Party Invitation",
    category: "Party",
    images: [kittyparty1],
  },
  {
    id: "gruhapravesham1",
    name: "Gruhapravesham Invitation",
    dname: "Gruhapravesham House Warming Invitation",
    category: "House",
    images: [gruha_pravesham1],
  },
  {
    id: "haldi1",
    name: "Haldi Invitation",
    dname: "Haldi Invitation",
    category: "Wedding",
    images: [haldi_invitation1],
  },
  {
    id: "namingceremony1",
    name: "Naming Ceremony Invitation",
    dname: "Lord Krishna Naming Ceremony Invitation",
    category: "Family",
    images: [namingceremony_invitation1],
  },
  {
    id: "diwali1",
    name: "Diwali Invitation",
    dname: "Diwali Invitation",
    category: "Festival",
    images: [diwali_invitation1],
  },
  {
    id: "productlaunch1",
    name: "Product Launch Invitation",
    dname: "Product Launch Invitation",
    category: "Corporate",
    images: [productlaunch_invitation1],
  },
  {
    id: "musicevent1",
    name: "Music Event Invitation",
    dname: "Music Event Invitation",
    category: "Event",
    images: [musicevent_invitation1],
  },
  {
    id: "wedding2",
    name: "Wedding Invitation",
    dname: "Venkateswara swamy theme Wedding Invitation",
    category:"Wedding",
    images: [wedding_invitation1], 
  },
  {
    id: "mickymousebirthday",
    name: "Birthday Invitation",
    dname: "Micky Mouse Theme Birthday Invitation",
    category: "Birthday",
    images: [micky_mouse_birthday], 
  },
  {
    id: "collagebirthday",
    name: "Birthday Invitation",
    dname: "Photo Collage Birthday Invitation",
    category: "Birthday",
    images: [collage_invitation], 
  },
  {
    id: "unicornbirthday",
    name: "Birthday Invitation",
    dname: "Unicorn Theme Birthday Invitation",
    category: "Birthday",
    images: [unicorn_invitation], 
  },
  {
    id: "collegefest",
    name: "College Fest Invitation",
    dname: "College Fest Invitation",
    images: [collegefest1,collegefest2,collegefest3], 
    category: "Event",
  },
  {
    id: "cricketsports",
    name: "Cricket Sports Invitation",
    dname: "Cricket Sports Invitation",
    images: [cricketsports_invitation], 
    category: "Sports",
  },
  {
    id: "seminar",
    name: "Seminar Invitation",
    dname: "Seminar Invitation",
    images: [seminar_invitation], 
    category: "Corporate",
  },
  {
    id: "graduation",
    name: "Graduation Invitation",
    dname: "Graduation Invitation",
    images: [graduation_invitation], 
    category: "Event",
  },
  {
    id: "jobfair",
    name: "Job Fair Invitation",
    dname: "Job Fair Invitation",
    images: [jobfair_invitation], 
    category: "Corporate",
  },
];




const Invitations = () => {
  const categories = [
  "All",
  "Wedding",
  "Birthday",
  "Party",
  "House",
  "Family",
  "Festival",
  "Corporate",
  "Event",
  "Sports"
];
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
    placeholder="Search invitation templates..."
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
      <h1 className="home-title1">Available: {filteredTemplates.length} templates. More will be added soon.
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

export default Invitations;