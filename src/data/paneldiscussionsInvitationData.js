import paneldiscussions_background from "../images/paneldiscussions/paneldiscussions_background.png";
import paneldiscussions1 from "../images/paneldiscussions/paneldiscussions1.png";
import paneldiscussions2 from "../images/paneldiscussions/paneldiscussions2.png";
import paneldiscussions3 from "../images/paneldiscussions/paneldiscussions3.png";

export const paneldiscussionsslides = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    /* ---------------- 🎙️ SLIDE 1 — PANEL DISCUSSION INTRO ---------------- */
    [
      {
        id: 1,
        type: "background",
        src: paneldiscussions_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // SPEAKERS IMAGE
      {
        id: 2,
        type: "image",
        src: paneldiscussions1,
        x: 420,
        y: 30,
        width: 300,
        height: 300,
        shape: "circle",
      },

      // TITLE
      {
        id: 4,
        type: "text",
        text: "Panel Discussion",
        x: 90,
        y: 60,
        fontSize: 34,
        fontFamily: "Playfair Display",
        fill: "#7690d2"
      },

      // SUBTITLE
      {
        id: 5,
        type: "text",
        text: "Insights • Leadership • Innovation",
        x: 90,
        y: 110,
        fontSize: 20,
        fontFamily: "Great Vibes",
        fill: "#7690d2"
      },

      // INTRO TEXT
      {
        id: 6,
        type: "text",
        text: "Join leading experts for engaging",
        x: 100,
        y: 150,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#7690d2"
      },

      {
        id: 7,
        type: "text",
        text: "conversations on industry trends",
        x: 100,
        y: 180,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#7690d2"
      },

      // EVENT NAME
      {
        id: 8,
        type: "text",
        text: "Leadership Panel 2026",
        x: 100,
        y: 220,
        fontSize: 22,
        fontFamily: "Cinzel",
        fill: "#f8f9f7"
      },

      // HIGHLIGHTS
      {
        id: 9,
        type: "text",
        text: "🎤 Expert Speakers",
        x: 100,
        y: 320,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#7690d2"
      },

      {
        id: 10,
        type: "text",
        text: "💡 Industry Insights",
        x: 100,
        y: 350,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#7690d2"
      },

      {
        id: 11,
        type: "text",
        text: "🤝 Interactive Networking",
        x: 100,
        y: 380,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#7690d2"
      },

      // FOOTER
      {
        id: 12,
        type: "text",
        text: "Where Ideas Meet Experience",
        x: 100,
        y: 420,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#7690d2"
      }
    ],

    /* ---------------- 📅 SLIDE 2 — EVENT DETAILS ---------------- */
    [
      {
        id: 13,
        type: "background",
        src: paneldiscussions_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      {
        id: 25,
        type: "image",
        src: paneldiscussions2,
        x: 30,
        y: 20,
        width: 245,
        height: 245,
      },
      {
        id: 26,
        type: "image",
        src: paneldiscussions3,
        x: 30,
        y: 280,
        width: 245,
        height: 245,
      },

      // INVITATION
      {
        id: 16,
        type: "text",
        text: "You're Invited 🎙️",
        x: 400,
        y: 80,
        fontSize: 32,
        fontFamily: "Playfair Display",
        fill: "#7690d2"
      },

      // DATE
      {
        id: 17,
        type: "text",
        text: "📅 Date: 15 June 2026",
        x: 400,
        y: 140,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#7690d2"
      },

      // TIME
      {
        id: 18,
        type: "text",
        text: "⏰ Time: 5:00 PM",
        x: 400,
        y: 180,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#7690d2"
      },

      // VENUE
      {
        id: 19,
        type: "text",
        text: "📍 Venue: Convention Center, Vijayawada",
        x: 350,
        y: 220,
        fontSize: 15,
        fontFamily: "Poppins",
        fill: "#7690d2"
      },

      // MESSAGE
      {
        id: 20,
        type: "text",
        text: "Explore perspectives, ask questions,",
        x: 370,
        y: 270,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#7690d2"
      },

      {
        id: 30,
        type: "text",
        text: "and connect with industry leaders",
        x: 380,
        y: 300,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#7690d2"
      },

      // HOST
      {
        id: 21,
        type: "text",
        text: "Hosted by",
        x: 350,
        y: 380,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#7690d2"
      },

      {
        id: 22,
        type: "text",
        text: "Executive Leadership Team",
        x: 320,
        y: 400,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#7690d2"
      },

      // RSVP
      {
        id: 23,
        type: "text",
        text: "📞 RSVP: 98765XXXXX",
        x: 310,
        y: 440,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#7690d2"
      }
    ]

  ]
};