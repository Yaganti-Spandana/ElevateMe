import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import SearchResults from "../Navbar/SearchResults";

import "./ResumeTemplates.css";
import "../Home.css";
import htmlImg from "../images/learningpaths/html_logo.png";

import htmlVideo from "../videos/html_intro.mp4";

const learningpaths = [
  {
    id: "html",
    name: "HTML",
    dname: "HTML",
    category: "Frontend",
    images: [htmlImg],
    video: htmlVideo,
  },
  
];

const Learningpaths = () => {
  const navigate = useNavigate();

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
  ];

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [hoveredId, setHoveredId] = useState(null);

  const filteredLearningpaths = learningpaths.filter((learningpaths) => {
    const matchesSearch = learningpaths.dname
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || learningpaths.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-wrapper">
      <Navbar />

      {/* Search + Filter */}
      <div className="filters-bar">
        <input
          type="text"
          placeholder="Search Courses..."
          className="template-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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

      <h1 className="home-title1">
        Available: {filteredLearningpaths.length} courses
      </h1>

      {search && (
        <SearchResults results={filteredLearningpaths} />
      )}

      <main className="page-content">
        <div className="home-container1">

          <h1 className="home-title4">
            Choose Your course
          </h1>

          <div className="templates-grid4">
            {filteredLearningpaths
              .slice(0, visibleCount)
              .map((learningpaths) => (
                <div
                  key={learningpaths.id}
                  onClick={() =>
                    navigate(`/learningpaths/${learningpaths.id}`)
                  }
                >
                  <div className="grid-card">

                    <div
                      className={`preview-container ${
                        Learningpaths.video ? "has-video" : ""
                      }`}
                      onMouseEnter={() =>
                        setHoveredId(Learningpaths.id)
                      }
                      onMouseLeave={() =>
                        setHoveredId(null)
                      }
                    >
                      {hoveredId === learningpaths.id ? (
                        <video
                          className="preview-video"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source
                            src={learningpaths.video}
                            type="video/mp4"
                          />
                        </video>
                      ) : (
                        <img
                          src={learningpaths.images[0]}
                          alt={learningpaths.name}
                          className="preview-image"
                        />
                      )}
                    </div>

                    <p>{learningpaths.name}</p>
                  </div>

                  <div className="temp">
                    Start Learning
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>

      {visibleCount < filteredLearningpaths.length && (
        <div className="load-more-container">
          <button
            className="load-more-btn"
            onClick={() =>
              setVisibleCount((prev) => prev + 12)
            }
          >
            Load More learningpathss
          </button>
        </div>
      )}

      <div style={{ marginTop: "60px" }} />

      <Footer />
    </div>
  );
};

export default Learningpaths;