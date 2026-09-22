import { useParams, Navigate } from "react-router-dom";

// PDF Notes
import htmlbasics from "../notes/htmlbasics.pdf";
import basictags_pdf from "../notes/basictags.pdf";
import elementsattributes_pdf from "../notes/elements&attributes.pdf";
import headingsparagraph_pdf from "../notes/headingsparagraph.pdf";
import multimedia_pdf from "../notes/multimedia.pdf";
import lists_pdf from "../notes/lists.pdf";
import table_pdf from "../notes/table.pdf";
import form_pdf from "../notes/form.pdf";

// Videos
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

import lists_video from "../videos/lists.mp4";
import lists_poster from "../videos/lists_poster.png";

import table_video from "../videos/table.mp4";
import table_poster from "../videos/table_poster.png";

import form1_video from "../videos/form1.mp4";
import form2_video from "../videos/form2.mp4";
import form1_poster from "../videos/form1_poster.png";

// Components
import Footer from "../Navbar/Footer";
import Navbar from "../Navbar/Navbar";

// Learning Path Data
const learningpaths = {
  html: [
    {
      id: "html-introduction",
      title: "Introduction",
      notes: htmlbasics,
      videos: [htmlIntro],
      poster: introduction_poster,
    },

    {
      id: "html-basic-tags",
      title: "Basic Tags",
      notes: basictags_pdf,
      videos: [html_basic_tags],
      poster: basictags_poster,
    },

    {
      id: "html-elements-attributes",
      title: "Elements & Attributes",
      notes: elementsattributes_pdf,
      videos: [elementsattributes_video],
      poster: elementsattributes_poster,
    },

    {
      id: "html-headings-paragraphs",
      title: "Headings & Paragraph Elements",
      notes: headingsparagraph_pdf,
      videos: [headingsparagraph_video],
      poster: headingsparagraph_poster,
    },

    {
      id: "html-multimedia",
      title: "Multimedia Elements",
      notes: multimedia_pdf,
      videos: [multimedia_video],
      poster: multimedia_poster,
    },

    {
      id: "html-lists",
      title: "List Elements",
      notes: lists_pdf,
      videos: [lists_video],
      poster: lists_poster,
    },

    {
      id: "html-tables",
      title: "Table Elements",
      notes: table_pdf,
      videos: [table_video],
      poster: table_poster,
    },

    {
      id: "html-form-inputs",
      title: "Form Elements - Part 1",
      notes: form_pdf,
      videos: [form1_video],
      poster: form1_poster,
    },

    {
      id: "html-form-controls",
      title: "Form Elements - Part 2",
      notes: form_pdf,
      videos: [form2_video],
      poster: form1_poster,
    },
  ],
};

export default function Html() {
  const { id } = useParams();

  const course = learningpaths[id];

  // Redirect to the home page if the course does not exist
  if (!course) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />

      <main className="course-container">
        <h1>HYPERTEXT MARKUP LANGUAGE</h1>

        <section className="video-section">
          <div className="video-grid">
            {course.map((lesson) => (
              <article
                className="video-card"
                key={lesson.id}
              >
                <h4>{lesson.title}</h4>

                {lesson.videos.map((video, videoIndex) => (
                  <video
                    controls
                    key={`${lesson.id}-video-${videoIndex}`}
                    width="100%"
                    height="200"
                    poster={lesson.poster}
                    preload="metadata"
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
                  style={{ fontSize: "12px" }}
                >
                  Download {lesson.title} PDF
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}