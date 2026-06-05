import { useParams } from "react-router-dom";

import htmlbasics from "../notes/htmlbasics.pdf";
import htmlIntro from "../videos/html_intro.mp4";
import Footer from "../Navbar/Footer";
import Navbar from "../Navbar/Navbar";

const learningpaths = {
  html: {
    title: "Html Basics",
    notes: htmlbasics,
    videos: [htmlIntro]
  }
};

export default function Html() {
  const { id } = useParams();

  const course = learningpaths[id];

  if (!course) {
    return <h1>Course Not Found</h1>;
  }

  return (
    <><Navbar/>
  <div className="course-container">
    <h1>HYPERTEXT MARKUP LANGUAGE</h1>
    <div className="video-section">

      <div className="video-grid">
        {course.videos.map((video, index) => (
          <div
            className="video-card"
            key={index}
          >
            <h4>{course.title}</h4>

            <video controls>
              <source
                src={video}
                type="video/mp4"
              />
            </video>
            <a
        href={course.notes}
        download
        className="download-btn"
      >
        Download {course.title} PDF
      </a>
          </div>
        ))}
      </div>
    </div>
  </div>
  <Footer/>
  </>
);
}