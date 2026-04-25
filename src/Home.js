import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import simpleSample1 from "./images/simple_resume_template/simple1.png";
import simpleSample2 from "./images/simple_resume_template/simple2.png";
import simpleportfolio from "./images/simple_resume_template/simple.mp4";
import twosidedsimple_invitation1 from "./images/twosidedsimple_resume_template/twosidedsimple_invitation1.png";
import twosidedsimple_invitation2 from "./images/twosidedsimple_resume_template/twosidedsimple_invitation2.png";
import twosidedsimple_portfolio from "./images/twosidedsimple_resume_template/twosidedsimple_portfolio.mp4";
import border1 from "./images/headinghighlight_resume_template/border1.png";
import border2 from "./images/headinghighlight_resume_template/border2.png";
import borderportfolio from "./images/headinghighlight_resume_template/border_highlight.mp4"
import modernSample from "./images/modern_resume_template/modern.png";
import modernportfolio from "./images/modern_resume_template/modern.mp4"
import fresher1 from "./images/fresher_resume_template/fresher1.png";
import fresher2 from "./images/fresher_resume_template/fresher2.png";
import fresherportfolio from "./images/fresher_resume_template/fresher.mp4";
import experience1 from "./images/experienced_resume_template/experience1.png";
import experience2 from "./images/experienced_resume_template/experience2.png";
import experiencedportfolio from "./images/experienced_resume_template/experienced.mp4"
import creative1 from "./images/creative_resume_template/creative1.png";
import creative2 from "./images/creative_resume_template/creative2.png";
import creativeportfolio from "./images/creative_resume_template/creative.mp4"
import black_gold from "./images/blackandgold_resume_template/black&gold.png";
import blackgoldportfolio from "./images/blackandgold_resume_template/blackgold.mp4"
import green_yellow1 from "./images/green&yellowexperienced_resume_template/green&yellow1.png";
import green_yellow2 from "./images/green&yellowexperienced_resume_template/green&yellow2.png";
import greenyellowportfolio from "./images/green&yellowexperienced_resume_template/greenyellow.mp4"
import invitation1 from "./images/wedding/invitation1.png";
import birthday_invitation1 from "./images/birthday/birthday_invitation1.png";
import micky_mouse_birthday from "./images/micky_mouse/micky_mouse_birthday.png";
import collegefest1 from "./images/college_fest/collegefest1.png";
import collegefest2 from "./images/college_fest/collegefest2.png";
import collegefest3 from "./images/college_fest/collegefest3.png";
import collage_invitation from "./images/collage/collage_invitation.png";
import unicorn_invitation from "./images/unicorn/unicorn_invitation.png";
import engagement_invitation1 from "./images/engagement/engagement_invitation1.png";
import kittyparty1 from "./images/kitty_party/kittyparty1.png";
import haldi_invitation1 from "./images/haldi/haldi_invitation1.png";
import namingceremony_invitation1 from "./images/naming_ceremony/namingceremony_invitation1.png";
import gruha_pravesham1 from "./images/gruhapravesham/gruha_pravesham1.png";
import diwali_invitation1 from "./images/diwali/diwali_invitation1.png";
import productlaunch_invitation1 from "./images/product_lauch/productlaunch_invitation1.png";
import internship1 from "./images/internship_resume_template/internship1.png";
import internship2 from "./images/internship_resume_template/internship2.png";
import internshipportfolio from "./images/internship_resume_template/internship.mp4"
import musicevent_invitation1 from "./images/music_event/musicevent_invitation1.png";
import career1 from "./images/careerchange_resume_template/career1.png";
import career2 from "./images/careerchange_resume_template/career2.png";
import careerportfolio from "./images/careerchange_resume_template/career.mp4";
import wedding_invitation1 from "./images/wedding1/wedding_invitation1.png";
import cricketsports_invitation from "./images/cricket_sports/cricketsports_invitation.png";
import seminar_invitation from "./images/seminar/seminar_invitation.png";
import graduation_invitation from "./images/graduation/graduation_invitation.png";
import jobfair_invitation from "./images/job_fair/jobfair_invitation.png";
import culturalfestival_invitation from "./images/cultural_festival/culturalfestival_invitation.png";
import sankranti1 from "./images/sankranti/sankranti1.png";
import sankranti2 from "./images/sankranti/sankranti2.png";
import cradle_invitation from "./images/cradle_ceremony/cradle_invitation.png";  
import babyannouncement_invitation from "./images/baby_announcement/babyannouncement_invitation.png"; 
import farewell_invitation1 from "./images/farewell/farewell_invitation1.png"; 
import farewell_invitation2 from "./images/farewell/farewell_invitation2.png";
import techfest_invitation from "./images/techfest/techfest_invitation.png"; 
import officeparty_invitation1 from "./images/officeparty/officeparty_invitation1.png"; 
import officeparty_invitation2 from "./images/officeparty/officeparty_invitation2.png";
import fashionshow_invitation1 from "./images/fashionshow/fashionshow_invitation1.png"; 
import fashionshow_invitation2 from "./images/fashionshow/fashionshow_invitation2.png";
import christmas_invitation from "./images/christmas/christmas_invitation.png";
import ugadi_invitation1 from "./images/ugadi/ugadi_invitation1.png"; 
import ugadi_invitation2 from "./images/ugadi/ugadi_invitation2.png";
import firstbirthday_invitation1 from "./images/firstbirthday/firstbirthday_invitation1.png"; 
import firstbirthday_invitation2 from "./images/firstbirthday/firstbirthday_invitation2.png";
import SearchResults from "./Navbar/SearchResults";
import resume_teplate from "./images/resume_templates.mp4";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";

import "./Home.css";
const templates = [
  {
    id: "simple",
    name: "Simple Resume",
    dname: "Simple Resume",
    images: [simpleSample1, simpleSample2], // ⭐ two images here
    video: simpleportfolio
  },
  {
    id: "wedding1",
    name: "Wedding Invitation",
    dname: "Wedding Invitation",
    images: [invitation1], 
  },
  { id: "Black_and_Gold",name: "Black and Gold Modern Resume", dname: "Black and Gold Modern Resume", images: [black_gold],video: blackgoldportfolio },
  
  {
    id: "birthday1",
    name: "Birthday Invitation",
    dname: "Birthday Invitation",
    images: [birthday_invitation1], 
  },
  {
    id: "engagement1",
    name: "Engagement Invitation",
    dname: "Engagement Invitation",
    images: [engagement_invitation1], 
  },
  
  { id: "modern", name: "Modern Resume",dname: "Modern Resume", images: [modernSample],video:modernportfolio },
{
    id: "kittyparty1",
    name: "Kitty Party Invitation",
    dname: "Kitty Party Invitation",
    images: [kittyparty1], 
  },
  { id: "fresher",name: "Fresher Resume", dname: "Fresher Resume", images: [fresher1, fresher2],video: fresherportfolio },
  { id: "experienced", name: "Experienced Resume",dname: "Experienced Resume", images: [experience1, experience2],video: experiencedportfolio },
  {
    id: "gruhapravesham1",
    name: "Gruhapravesham Invitation",
    dname: "Gruhapravesham House Warming Invitation",
    images: [gruha_pravesham1], 
  },

  {
    id: "career",
    name: "Career Change Resume",
    dname: "Career Change Resume",
    images: [career1, career2], // ⭐ two images here
    video: careerportfolio
  },
  {
    id: "ugadi",
    name: "Ugadi Invitation",
    dname: "Ugadi Invitation",
    images: [ugadi_invitation1,ugadi_invitation2], 
  },
  {
    id: "haldi1",
    name: "Haldi Invitation",
    dname: "Haldi Invitation",
    images: [haldi_invitation1], 
  },
  {
    id: "green_and_yellow",
    name: "Green and Yellow Experienced Template",
    dname: "Green and Yellow Experienced Template",
    images: [green_yellow1, green_yellow2], // ⭐ two images here
    video: greenyellowportfolio
  },
  {
    id: "babyannouncement",
    name: "Baby Announcement Event Invitation",
    dname: "Baby Announcement Event Invitation",
    images: [babyannouncement_invitation], 
  },
  {
    id: "border_highlight",
    name: "Border Hightlighted Resume",
    dname: "Border Hightlighted Resume",
    images: [border1, border2], // ⭐ two images here
    video: borderportfolio
  },
  {
    id: "productlaunch1",
    name: "Product Launch Invitation",
    dname: "Product Launch Invitation",
    images: [productlaunch_invitation1], 
  },

  {
    id: "internship",
    name: "Internship Resume",
    dname: "Internship Resume",
    images: [internship1, internship2], // ⭐ two images here
    video: internshipportfolio
  },
{
    id: "culturalfestival",
    name: "Cultural Festival Invitation",
    dname: "Cultural Festival Invitation",
    images: [culturalfestival_invitation], 
  },
  { id: "creative",name: "Creative Resume", dname: "Creative Resume", images: [creative1, creative2],video: creativeportfolio },
  {
    id: "twosidedsimple",
    name: "Maroon Full Stack Web Developer Resume",
    dname: "Maroon Basic Full Stack Web Developer Two sided Simple Resume",
    images: [twosidedsimple_invitation1,twosidedsimple_invitation2], // ⭐ two images here
    video: twosidedsimple_portfolio
  },
  
  {
    id: "wedding2",
    name: "Wedding Invitation",
    dname: "Venkateswara swamy theme Wedding Invitation",
    images: [wedding_invitation1], 
  },
  {
    id: "mickymousebirthday",
    name: "Birthday Invitation",
    dname: "Micky Mouse Theme Birthday Invitation",
    images: [micky_mouse_birthday], 
  },
  {
    id: "collagebirthday",
    name: "Birthday Invitation",
    dname: "Photo Collage Birthday Invitation",
    images: [collage_invitation], 
  },
  {
    id: "unicornbirthday",
    name: "Birthday Invitation",
    dname: "Unicorn Theme Birthday Invitation",
    images: [unicorn_invitation], 
  },
  {
    id: "collegefest",
    name: "College Fest Invitation",
    dname: "College Fest Invitation",
    images: [collegefest1,collegefest2,collegefest3], 
  },
  {
    id: "cricketsports",
    name: "Cricket Sports Invitation",
    dname: "Cricket Sports Invitation",
    images: [cricketsports_invitation], 
  },
  {
    id: "seminar",
    name: "Seminar Invitation",
    dname: "Seminar Invitation",
    images: [seminar_invitation], 
  },
  {
    id: "graduation",
    name: "Graduation Invitation",
    dname: "Graduation Invitation",
    images: [graduation_invitation], 
  },
  {
    id: "jobfair",
    name: "Job Fair Invitation",
    dname: "Job Fair Invitation",
    images: [jobfair_invitation], 
  },
  {
    id: "musicevent1",
    name: "Music Event Invitation",
    dname: "Music Event Invitation",
    images: [musicevent_invitation1], 
  },
  {
    id: "sankranti1",
    name: "Sankranti/Pongal Invitation",
    dname: "Sankranti/Pongal Invitation",
    images: [sankranti1,sankranti2], 
  },
  {
    id: "techfest",
    name: "Tech Fest Invitation",
    dname: "Tech Fest Invitation",
    images: [techfest_invitation], 
  },
  {
    id: "cradle",
    name: "Cradle Ceremony Invitation",
    dname: "Cradle Ceremony Invitation",
    images: [cradle_invitation], 
  },
  {
    id: "namingceremony1",
    name: "Naming Ceremony Invitation",
    dname: "Lord Krishna Naming Ceremony Invitation",
    images: [namingceremony_invitation1], 
  },
  {
    id: "farewell",
    name: "Farewell Invitation",
    dname: "Farewell Invitation",
    images: [farewell_invitation1,farewell_invitation2], 
  },
  {
    id: "officeparty",
    name: "Office Party Invitation",
    dname: "Office Party Invitation",
    images: [officeparty_invitation1,officeparty_invitation2], 
  },
  {
    id: "fashionshow",
    name: "Fashion Show Invitation",
    dname: "Fashion Show Invitation",
    images: [fashionshow_invitation1,fashionshow_invitation2], 
  },
  {
    id: "christmas",
    name: "Christmas Invitation",
    dname: "Christmas Invitation",
    images: [christmas_invitation], 
  },
  {
    id: "diwali1",
    name: "Diwali Invitation",
    dname: "Diwali Invitation",
    images: [diwali_invitation1], 
  },
  {
    id: "firstbirthday",
    name: "First Birthday Invitation",
    dname: "First Birthday Invitation",
    images: [firstbirthday_invitation1,firstbirthday_invitation2], 
  },
];

const getRandomTemplates = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const randomTemplates = getRandomTemplates(templates, 3);

const Home = () => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState({});
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
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
    <section className="hero-section">

  <div className="hero-content">

    {/* LEFT TEXT */}
    <div className="hero-text">
      <h1>Create Stunning Resumes & Invitations</h1>
      <p>
        Design professional templates in minutes with modern,
        customizable layouts.
      </p>

      <button 
        className="hero-btn"
        onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
      >
        Get Started
      </button>
    </div>

    {/* RIGHT VIDEO */}
    <div className="hero-video">
      <video 
        src={resume_teplate}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>

  </div>

</section>
    <main className="page-content">
  <div className="home-container">
    <h1 className="home-title">✨ Choose Your Perfect Template</h1>
<p className="home-subtitle">
  Professionally designed templates ready to customize instantly.
</p>

    <div className="templates-grid">
  {templates.slice(0, visibleCount).map((tpl) => {
  const currentIndex = imageIndex[tpl.id] ?? 0;
  const currentImage = tpl.images[currentIndex];

  return (
    <div key={tpl.id} onClick={() => navigate(`/editor/${tpl.id}`)}>
      <div className="grid-card">

    <div
      className={`preview-container 
        ${tpl.video ? "has-video" : ""} 
        ${tpl.id.includes("invitation") || tpl.id.includes("haldi") || tpl.id.includes("naming") ? "invitation" : ""}
      `}
      onMouseEnter={() => tpl.video && setHoveredId(tpl.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      {tpl.video && hoveredId === tpl.id ? (
        <video className="preview-video" autoPlay muted loop playsInline>
          <source src={tpl.video} type="video/mp4" />
        </video>
      ) : (
        <img src={currentImage} alt={tpl.name} className="preview-image" />
      )}
    </div>

  <div className="card-content">
    <p className="card-title">{tpl.name}</p>
  </div>

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
<section className="why-section">

  <h2 className="why-title">Why Choose @ElevateMe</h2>

  <div className="why-grid">

    <div className="why-card">
      <h3>⚡ Fast & Easy</h3>
      <p>Create resumes and invitations in minutes.</p>
    </div>

    <div className="why-card">
      <h3>🎨 Modern Designs</h3>
      <p>Professionally crafted templates for every need.</p>
    </div>

    <div className="why-card">
      <h3>📱 User Friendly</h3>
      <p>Simple interface with no design skills required.</p>
    </div>

    <div className="why-card">
      <h3>🚀 Instant Download</h3>
      <p>Get your design ready instantly.</p>
    </div>

  </div>

</section>

<section className="demo-section">

  <h1 className="demo-title">See It In Action</h1>

  <div className="demo-video-box">
    <video 
      src={resume_teplate} 
      autoPlay 
      muted 
      loop 
      playsInline 
    />
  </div>

</section>

<section className="popular-section">

  <h1 className="popular-title">🔥 Popular Templates</h1>

  <div className="popular-grid">
  {randomTemplates.map((tpl) => (
    <div 
      key={tpl.id} 
      className="popular-card"
      onClick={() => navigate(`/editor/${tpl.id}`)}
    >
      <img src={tpl.images[0]} alt={tpl.name} />
      <p>{tpl.name}</p>
    </div>
  ))}
</div>

</section>

<section className="cta-section">

  <h1>Start Creating Your Design Today</h1>
  <p>Choose a template and build something amazing.</p>

  <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
    Explore Templates
  </button>

</section>

    <div style={{ marginTop: "60px" }} />
    <Footer />
  </div>
);
};

export default Home;