import theatredrama_background from "../images/theatredrama/theatredrama_background.png";
import theatredrama1 from "../images/theatredrama/theatredrama1.png";
import '../invitations/Invitation.css'

const theatredramaInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎭 BACKGROUND
    {
      id: 1,
      type: "background",
      src: theatredrama_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // GLASS OVERLAY
    {
      id: 2,
      type: "rect",
      x: 380,
      y: 50,
      width: 300,
      height: 420,
      fill: "rgba(255,255,255,0.82)",
      cornerRadius: 15
    },

    // DRAMA IMAGE
    {
      id: 20,
      type: "image",
      src: theatredrama1,
      x: 85,
      y: 75,
      width: 300,
      height: 300,
      shape: "circle"
    },

    // TITLE
    {
      id: 4,
      type: "text",
      text: "Theatre & Drama Night",
      x: 380,
      y:100,
      fontSize: 26,
      fontFamily: "Playfair Display",
      fill: "#ac1423"
    },

    // SUBTITLE
    {
      id: 5,
      type: "text",
      text: "You're Invited 🎭",
      x: 450,
      y: 140,
      fontSize: 24,
      fontFamily: "Great Vibes",
      fill: "#ac1423"
    },

    // INVITATION TEXT
    {
      id: 6,
      type: "text",
      text: "Experience an evening filled with",
      x: 415,
      y: 180,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#ac1423"
    },

    {
      id: 7,
      type: "text",
      text: "emotion, storytelling, and live performance",
      x: 385,
      y: 210,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#ac1423"
    },

    // EVENT NAME
    {
      id: 8,
      type: "text",
      text: "Grand Stage Performance 2026",
      x: 385,
      y: 240,
      fontSize: 22,
      fontFamily: "Crimson Text",
      fill: "#ac1423"
    },

    // EVENT DETAILS
    {
      id: 9,
      type: "text",
      text: "📅 Saturday, 10 October 2026",
      x: 200,
      y: 360,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#ac1423"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 7:00 PM onwards",
      x: 250,
      y: 385,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#ac1423"
    },

    {
      id: 11,
      type: "text",
      text: "📍 City Auditorium, Vijayawada",
      x: 205,
      y: 410,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#ac1423"
    },

    // TAGLINE
    {
      id: 12,
      type: "text",
      text: "Drama • Emotion • Performance",
      x: 210,
      y: 435,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "#ac1423"
    },

    // RSVP
    {
      id: 13,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 250,
      y: 475,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#ac1423"
    }

  ]
};

export default theatredramaInvitationElements;