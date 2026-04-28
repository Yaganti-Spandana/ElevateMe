import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import invitation1 from "../images/wedding/invitation1.png";
import birthday_invitation1 from "../images/birthday/birthday_invitation1.png";
import micky_mouse_birthday from "../images/micky_mouse/micky_mouse_birthday.png";
import collage_invitation from "../images/collage/collage_invitation.png";
import unicorn_invitation from "../images/unicorn/unicorn_invitation.png";
import engagement_invitation1 from "../images/engagement/engagement_invitation1.png";
import kittyparty1 from "../images/kitty_party/kittyparty1.png";
import haldi_invitation1 from "../images/haldi/haldi_invitation1.png";
import namingceremony_invitation1 from "../images/naming_ceremony/namingceremony_invitation1.png";
import gruha_pravesham1 from "../images/gruhapravesham/gruha_pravesham1.png";
import diwali_invitation1 from "../images/diwali/diwali_invitation1.png";
import productlaunch_invitation1 from "../images/product_lauch/productlaunch_invitation1.png";
import musicevent_invitation1 from "../images/music_event/musicevent_invitation1.png";
import wedding_invitation1 from "../images/wedding1/wedding_invitation1.png";
import collegefest1 from "../images/college_fest/collegefest1.png";
import collegefest2 from "../images/college_fest/collegefest2.png";
import collegefest3 from "../images/college_fest/collegefest3.png";
import cricketsports_invitation from "../images/cricket_sports/cricketsports_invitation.png";
import seminar_invitation from "../images/seminar/seminar_invitation.png";
import graduation_invitation from "../images/graduation/graduation_invitation.png";
import jobfair_invitation from "../images/job_fair/jobfair_invitation.png";
import culturalfestival_invitation from "../images/cultural_festival/culturalfestival_invitation.png";
import sankranti1 from "../images/sankranti/sankranti1.png";
import sankranti2 from "../images/sankranti/sankranti2.png";
import cradle_invitation from "../images/cradle_ceremony/cradle_invitation.png";
import babyannouncement_invitation from "../images/baby_announcement/babyannouncement_invitation.png"; 
import farewell_invitation1 from "../images/farewell/farewell_invitation1.png"; 
import farewell_invitation2 from "../images/farewell/farewell_invitation2.png"; 
import techfest_invitation from "../images/techfest/techfest_invitation.png"; 
import officeparty_invitation1 from "../images/officeparty/officeparty_invitation1.png"; 
import officeparty_invitation2 from "../images/officeparty/officeparty_invitation2.png";
import fashionshow_invitation1 from "../images/fashionshow/fashionshow_invitation1.png"; 
import fashionshow_invitation2 from "../images/fashionshow/fashionshow_invitation2.png";
import christmas_invitation from "../images/christmas/christmas_invitation.png";
import ugadi_invitation1 from "../images/ugadi/ugadi_invitation1.png"; 
import ugadi_invitation2 from "../images/ugadi/ugadi_invitation2.png";
import firstbirthday_invitation1 from "../images/firstbirthday/firstbirthday_invitation1.png"; 
import firstbirthday_invitation2 from "../images/firstbirthday/firstbirthday_invitation2.png";
import SearchResults from "../Navbar/SearchResults";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

import "../Home.css";
const templates = [
  {
    id: "techfest",
    name: "Tech Fest Invitation",
    dname: "Tech Fest Invitation",
    images: [techfest_invitation], 
    categories: ["Education & Student Events"]
  },
  {
    id: "culturalfestival",
    name: "Cultural Festival Invitation",
    dname: "Cultural Festival Invitation",
    images: [culturalfestival_invitation], 
    categories: ["Entertainment & Public Events"],
  },
   {
    id: "ugadi",
    name: "Ugadi Invitation",
    dname: "Ugadi Invitation",
    images: [ugadi_invitation1,ugadi_invitation2], 
    categories: ["Festivals & Religious","Trending / Modern"],
  },
  {
    id: "sankranti1",
    name: "Sankranti/Pongal Invitation",
    dname: "Sankranti/Pongal Invitation",
    images: [sankranti1,sankranti2], 
    categories: ["Festivals & Religious","Trending / Modern"],
  },
  {
    id: "collegefest",
    name: "College Fest Invitation",
    dname: "College Fest Invitation",
    images: [collegefest1,collegefest2,collegefest3], 
    categories: ["Education & Student Events","Trending / Modern"]
  },
  {
    id: "fashionshow",
    name: "Fashion Show Invitation",
    dname: "Fashion Show Invitation",
    images: [fashionshow_invitation1,fashionshow_invitation2],
    categories: ["Entertainment & Public Events","Trending / Modern"], 
  },
  {
    id: "cricketsports",
    name: "Cricket Sports Invitation",
    dname: "Cricket Sports Invitation",
    images: [cricketsports_invitation], 
    categories: ["Entertainment & Public Events"],
  },
   {
    id: "seminar",
    name: "Seminar Invitation",
    dname: "Seminar Invitation",
    images: [seminar_invitation], 
    categories: ["Corporate & Professional"],
  },
  {
    id: "graduation",
    name: "Graduation Invitation",
    dname: "Graduation Invitation",
    images: [graduation_invitation], 
    categories: ["Education & Student Events"],
  },
  {
    id: "babyannouncement",
    name: "Baby Announcement Event Invitation",
    dname: "Baby Announcement Event Invitation",
    images: [babyannouncement_invitation], 
    categories: ["Baby & Family"],
  },
   {
    id: "kittyparty1",
    name: "Kitty Party Invitation",
    dname: "Kitty Party Invitation",
    categories: ["Personal Celebrations"],
    images: [kittyparty1],
  },
  {
    id: "cradle",
    name: "Cradle Ceremony Invitation",
    dname: "Cradle Ceremony Invitation",
    images: [cradle_invitation], 
    categories: ["Baby & Family"],
  },
  {
    id: "officeparty",
    name: "Office Party Invitation",
    dname: "Office Party Invitation",
    images: [officeparty_invitation1,officeparty_invitation2], 
    categories: ["Corporate & Professional","Trending / Modern"]
  },
  {
    id: "firstbirthday",
    name: "First Birthday Invitation",
    dname: "First Birthday Invitation",
    images: [firstbirthday_invitation1,firstbirthday_invitation2], 
    categories: ["Baby & Family","Trending / Modern"],
  },
  {
    id: "jobfair",
    name: "Job Fair Invitation",
    dname: "Job Fair Invitation",
    images: [jobfair_invitation], 
    categories: ["Corporate & Professional"],
  },
  {
    id: "christmas",
    name: "Christmas Invitation",
    dname: "Christmas Invitation",
    images: [christmas_invitation], 
    categories: ["Festivals & Religious"],
  },
  {
    id: "wedding1",
    name: "Wedding Invitation",
    dname: "Wedding Invitation",
    categories: ["Wedding & Pre-Wedding"],
    images: [invitation1],
  },
  {
    id: "birthday1",
    name: "Birthday Invitation",
    dname: "Birthday Invitation",
    categories: ["Personal Celebrations"],
    images: [birthday_invitation1],
  },
  {
    id: "engagement1",
    name: "Engagement Invitation",
    dname: "Engagement Invitation",
    categories: ["Wedding & Pre-Wedding"],
    images: [engagement_invitation1],
  },
  {
    id: "gruhapravesham1",
    name: "Gruhapravesham Invitation",
    dname: "Gruhapravesham House Warming Invitation",
    categories: ["Personal Celebrations"],
    images: [gruha_pravesham1],
  },
  {
    id: "haldi1",
    name: "Haldi Invitation",
    dname: "Haldi Invitation",
    categories: ["Wedding & Pre-Wedding"],
    images: [haldi_invitation1],
  },
  {
    id: "productlaunch1",
    name: "Product Launch Invitation",
    dname: "Product Launch Invitation",
    categories: ["Corporate & Professional"],
    images: [productlaunch_invitation1],
  },
  {
    id: "wedding2",
    name: "Wedding Invitation",
    dname: "Venkateswara swamy theme Wedding Invitation",
    categories:["Wedding & Pre-Wedding"],
    images: [wedding_invitation1], 
  },
  {
    id: "mickymousebirthday",
    name: "Birthday Invitation",
    dname: "Micky Mouse Theme Birthday Invitation",
    categories: ["Personal Celebrations"],
    images: [micky_mouse_birthday], 
  },
  {
    id: "collagebirthday",
    name: "Birthday Invitation",
    dname: "Photo Collage Birthday Invitation",
    categories: ["Personal Celebrations"],
    images: [collage_invitation], 
  },
  {
    id: "unicornbirthday",
    name: "Birthday Invitation",
    dname: "Unicorn Theme Birthday Invitation",
    categories: ["Personal Celebrations"],
    images: [unicorn_invitation], 
  },
  {
    id: "musicevent1",
    name: "Music Event Invitation",
    dname: "Music Event Invitation",
    categories: ["Entertainment & Public Events"],
    images: [musicevent_invitation1],
  },
   {
    id: "namingceremony1",
    name: "Naming Ceremony Invitation",
    dname: "Lord Krishna Naming Ceremony Invitation",
    categories: ["Baby & Family"],
    images: [namingceremony_invitation1],
  },
  {
    id: "farewell",
    name: "Farewell Invitation",
    dname: "Farewell Invitation",
    images: [farewell_invitation1,farewell_invitation2],
    categories: ["Education & Student Events","Trending / Modern"]
  },
  {
    id: "diwali1",
    name: "Diwali Invitation",
    dname: "Diwali Invitation",
    categories: ["Festivals & Religious"],
    images: [diwali_invitation1],
  },
];




const Invitations = () => {
  const categories = [
  "All",
  "Personal Celebrations",
  "Wedding & Pre-Wedding",
  "Education & Student Events",
  "Corporate & Professional",
  "Entertainment & Public Events",
  "Festivals & Religious",
  "Baby & Family",
  "Trending / Modern",
];
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState({});
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
const filteredTemplates = templates.filter((tpl) => {
  const matchesSearch = tpl.dname.toLowerCase().includes(search.toLowerCase());
  const matchesCategory =
  category === "All" || tpl.categories?.includes(category);

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
    <div key={tpl.id} onClick={() => navigate(`/editor/${tpl.id}`)}>
      <div className="grid-card" onClick={() => navigate(`/editor/${tpl.id}`)}>

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

export default Invitations;