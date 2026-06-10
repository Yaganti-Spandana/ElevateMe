import { useParams } from "react-router-dom";

import htmlbasics from "../notes/htmlbasics.pdf";
import basictags_pdf from "../notes/basictags.pdf";
import elementsattributes_pdf from "../notes/elements&attributes.pdf";
import htmlIntro from "../videos/html_intro.mp4";
import html_basic_tags from "../videos/basic_tags.mp4";
import elementsattributes_video from "../videos/elements&attributes.mp4";

import Footer from "../Navbar/Footer";
import Navbar from "../Navbar/Navbar";

const learningpaths = {
  html: [
    {
      title: "Html Introduction",
      notes: htmlbasics,
      videos: [htmlIntro],
    },
    {
      title: "Html Basic Tags",
      notes: basictags_pdf,
      videos: [html_basic_tags],
    },
    {
      title: "Html Elements & Attributes",
      notes: elementsattributes_pdf,
      videos: [elementsattributes_video],
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

                {lesson.videos.map((video, videoIndex) => (
                  <video
                    controls
                    key={videoIndex}
                    width="100%"
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