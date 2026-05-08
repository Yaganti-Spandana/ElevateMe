import artexhibition_background from "../images/artexhibition/artexhibition_background.png";
import artexhibition_logo from "../images/artexhibition/artexhibition_logo.png";
import '../invitations/Invitation.css'

const artexhibitionInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: artexhibition_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 🧊 GLASS OVERLAY
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

    // LOGO / ART IMAGE
    {
      id: 20,
      type: "image",
      src: artexhibition_logo,
      x: 410,
      y: 80,
      width: 270,
      height: 360
    },

    // ✨ TOP DESIGN
    {
      id: 3,
      type: "text",
      text: "✦ ✧ ✦ ✧ ✦",
      x: 190,
      y: 45,
      fontSize: 26,
      fontFamily: "Cinzel",
      fill: "#f3ede9"
    },

    // 🎨 TITLE
    {
      id: 4,
      type: "text",
      text: "Art Exhibition",
      x: 180,
      y: 70,
      fontSize: 24,
      fontFamily: "Playfair Display",
      fill: "#f3ede9"
    },

    // SUBTITLE
    {
      id: 5,
      type: "text",
      text: "You're Invited",
      x: 190,
      y: 110,
      fontSize: 26,
      fontFamily: "Great Vibes",
      fill: "#f3ede9"
    },

    // INVITE TEXT
    {
      id: 6,
      type: "text",
      text: "Join us for an inspiring journey through",
      x: 110,
      y: 170,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    {
      id: 7,
      type: "text",
      text: "creativity, imagination, and artistic expression",
      x: 65,
      y: 205,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    // EVENT NAME
    {
      id: 8,
      type: "text",
      text: "Colors of Creativity 2026",
      x: 100,
      y: 240,
      fontSize: 30,
      fontFamily: "Crimson Text",
      fill: "rgb(217, 192, 192)"
    },

    // EVENT DETAILS
    {
      id: 9,
      type: "text",
      text: "📅 Sunday, 22 March 2026",
      x: 140,
      y: 290,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 10:00 AM onwards",
      x: 160,
      y: 320,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    {
      id: 11,
      type: "text",
      text: "📍 Art Gallery, Vijayawada",
      x: 135,
      y: 350,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    // TAGLINE
    {
      id: 12,
      type: "text",
      text: "Where Every Canvas Tells a Story",
      x: 105,
      y: 400,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "rgb(217, 192, 192)"
    },

    // RSVP
    {
      id: 13,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 170,
      y: 460,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    }

  ]
};

export default artexhibitionInvitationElements;