import shakeholdersmeeting_background from "../images/shakeholdersmeeting/shakeholdersmeeting_background.png";
import shakeholdersmeeting1 from "../images/shakeholdersmeeting/shakeholdersmeeting1.png";

export const shareholdersmeetingslides = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    /* ---------------- 📊 SLIDE 1 — SHAREHOLDERS MEETING INTRO ---------------- */
    [
      {
        id: 1,
        type: "background",
        src: shakeholdersmeeting_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // COMPANY IMAGE / LOGO
      {
        id: 2,
        type: "image",
        src: shakeholdersmeeting1,
        x: 35,
        y: 150,
        width: 245,
        height: 245,
        shape: "circle",
      },

      // TITLE
      {
        id: 4,
        type: "text",
        text: "Shareholders Meeting",
        x: 270,
        y: 60,
        fontSize: 34,
        fontFamily: "Playfair Display",
        fill: "#4b0f45"
      },

      // SUBTITLE
      {
        id: 5,
        type: "text",
        text: "Growth • Strategy • Success",
        x: 350,
        y: 110,
        fontSize: 20,
        fontFamily: "Great Vibes",
        fill: "#4b0f45"
      },

      // INTRO TEXT
      {
        id: 6,
        type: "text",
        text: "Join us for an important gathering of",
        x: 340,
        y: 150,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#4b0f45"
      },

      {
        id: 7,
        type: "text",
        text: "investors, executives & stakeholders",
        x: 340,
        y: 180,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#4b0f45"
      },

      // EVENT NAME
      {
        id: 8,
        type: "text",
        text: "Annual Shareholders Meeting 2026",
        x: 300,
        y: 220,
        fontSize: 22,
        fontFamily: "Cinzel",
        fill: "#78350f"
      },

      // HIGHLIGHTS
      {
        id: 9,
        type: "text",
        text: "📈 Financial Performance",
        x: 350,
        y: 320,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#4b0f45"
      },

      {
        id: 10,
        type: "text",
        text: "📊 Annual Reports",
        x: 350,
        y: 350,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#4b0f45"
      },

      {
        id: 11,
        type: "text",
        text: "🎯 Future Business Plans",
        x: 350,
        y: 380,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#4b0f45"
      },

      // FOOTER
      {
        id: 12,
        type: "text",
        text: "Building Value Together",
        x: 360,
        y: 420,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#4b0f45"
      }
    ],

    /* ---------------- 📅 SLIDE 2 — MEETING DETAILS ---------------- */
    [
      {
        id: 13,
        type: "background",
        src: shakeholdersmeeting_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // INVITATION
      {
        id: 16,
        type: "text",
        text: "You're Invited 🤝",
        x: 290,
        y: 80,
        fontSize: 32,
        fontFamily: "Playfair Display",
        fill: "#4b0f45"
      },

      // DATE
      {
        id: 17,
        type: "text",
        text: "📅 Date: 15 June 2026",
        x: 290,
        y: 140,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#4b0f45"
      },

      // TIME
      {
        id: 18,
        type: "text",
        text: "⏰ Time: 11:00 AM",
        x: 290,
        y: 180,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#4b0f45"
      },

      // VENUE
      {
        id: 19,
        type: "text",
        text: "📍 Venue: Conference Hall, Vijayawada",
        x: 250,
        y: 220,
        fontSize: 15,
        fontFamily: "Poppins",
        fill: "#4b0f45"
      },

      // MESSAGE
      {
        id: 20,
        type: "text",
        text: "Together we review achievements",
        x: 250,
        y: 270,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#4b0f45"
      },

      {
        id: 30,
        type: "text",
        text: "and shape future opportunities",
        x: 250,
        y: 300,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#4b0f45"
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
        fill: "#4b0f45"
      },

      {
        id: 22,
        type: "text",
        text: "Board of Directors",
        x: 330,
        y: 400,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#4b0f45"
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
        fill: "#4b0f45"
      }
    ]

  ]
};