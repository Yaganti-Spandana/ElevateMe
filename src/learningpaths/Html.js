import { useParams } from "react-router-dom";

import htmlbasics from "../notes/htmlbasics.pdf";
import basictags_pdf from "../notes/basictags.pdf";
import elementsattributes_pdf from "../notes/elements&attributes.pdf";
import headingsparagraph_pdf from "../notes/headingsparagraph.pdf";
import multimedia_pdf from "../notes/multimedia.pdf";



import htmlIntro from "../videos/html_intro.mp4";
import introduction_poster from "../videos/intoduction_poster.png";
import html_basic_tags from "../videos/basic_tags.mp4";
import basictags_poster from "../videos/basictags_poster.png";
import elementsattributes_video from "../videos/elements&attributes.mp4";
import elementsattributes_poster from "../videos/elementsattributes_poster.png";
import headingsparagraph_video from "../videos/headingsparagraph.mp4";
import headingsparagraph_poster from "../videos/headingsparagraph_poster.png";
import multimedia_video from "../videos/multimedia.mp4";
import multimedia_poster from "../videos/multimedia_poster.jpeg";

import Footer from "../Navbar/Footer";
import Navbar from "../Navbar/Navbar";

const learningpaths = {
  html: [
    {
      title: "Introduction",
      notes: htmlbasics,
      videos: [htmlIntro],
      poster: introduction_poster
    },
    {
      title: "Basic Tags",
      notes: basictags_pdf,
      videos: [html_basic_tags],
      poster: basictags_poster
    },
    {
      title: "Elements & Attributes",
      notes: elementsattributes_pdf,
      videos: [elementsattributes_video],
      poster: elementsattributes_poster
    },
    {
      title: "Headings & Paragraph Elements",
      notes: headingsparagraph_pdf,
      videos: [headingsparagraph_video],
      poster: headingsparagraph_poster
    },
    {
      title: "Multimedia Elements",
      notes: multimedia_pdf,
      videos: [multimedia_video],
      poster: multimedia_poster
    },
  ],
};

export default function Html() {
  const { id } = useParams();

  const course = learningpaths[id];

  if (!course) {
    return <h1>Course Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <div className="course-container">
        <h1>HYPERTEXT MARKUP LANGUAGE</h1>

        <div className="video-section">
          <div className="video-grid">
            {course.map((lesson, lessonIndex) => (
              <div
                className="video-card"
                key={lessonIndex}
              >
                <h4>{lesson.title}</h4>

                {lesson.videos.map((video,poster, videoIndex) => (
                  <video
                    controls
                    key={videoIndex}
                    width="100%"
                    height="200px"
                    poster={lesson.poster}
                  >
                    <source
                      src={video}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ))}

                <a
                  href={lesson.notes}
                  download
                  className="download-btn"
                  style={{fontSize:"12px"}}
                >
                  Download {lesson.title} PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}