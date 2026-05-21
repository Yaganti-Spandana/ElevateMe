import carnival_background from "../images/carnival/carnival_background.png";
import carnival1 from "../images/carnival/carnival1.png";
import carnival2 from "../images/carnival/carnival2.png";
import '../invitations/Invitation.css'

const carnivalInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎡 BACKGROUND
    {
      id: 1,
      type: "background",
      src: carnival_background,
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

    // CARNIVAL IMAGE
    {
  id: 20,
  type: "image",
  src: carnival2,
  x: 110,
  y: 110,
  width: 250,
  height: 160,
  shape: "oval",
  stroke: "#d38f18",
  strokeWidth: 4
},
{
  id: 25,
  type: "image",
  src: carnival1,
  x: 440,
  y: 300,
  width: 220,
  height: 160,
  shape: "oval",
  stroke: "#d38f18",
  strokeWidth: 4
},

    // TITLE
    {
      id: 4,
      type: "text",
      text: "Grand Carnival Festival",
      x: 360,
      y: 100,
      fontSize: 24,
      fontFamily: "Playfair Display",
      fill: "#d38f18"
    },

    // SUBTITLE
    {
      id: 5,
      type: "text",
      text: "You're Invited 🎡",
      x: 455,
      y: 140,
      fontSize: 24,
      fontFamily: "Great Vibes",
      fill: "#d38f18"
    },

    // INVITATION TEXT
    {
      id: 6,
      type: "text",
      text: "Join us for a day filled with",
      x: 425,
      y: 180,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#d38f18"
    },

    {
      id: 7,
      type: "text",
      text: "games, music, food, and endless fun",
      x: 400,
      y: 210,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#d38f18"
    },

    // EVENT NAME
    {
      id: 8,
      type: "text",
      text: "Carnival Celebration 2026",
      x: 415,
      y: 245,
      fontSize: 22,
      fontFamily: "Crimson Text",
      fill: "#d38f18"
    },

    // EVENT DETAILS
    {
      id: 9,
      type: "text",
      text: "📅 Sunday, 15 November 2026",
      x: 200,
      y: 300,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#d38f18"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 4:00 PM onwards",
      x: 250,
      y: 330,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#d38f18"
    },

    {
      id: 11,
      type: "text",
      text: "📍 Fun Park Grounds, Vijayawada",
      x: 180,
      y: 360,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#d38f18"
    },

    // TAGLINE
    {
      id: 12,
      type: "text",
      text: "Fun • Laughter • Celebration",
      x: 220,
      y: 390,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "#d38f18"
    },

    // RSVP
    {
      id: 13,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 250,
      y: 450,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#d38f18"
    }

  ]
};

export default carnivalInvitationElements;