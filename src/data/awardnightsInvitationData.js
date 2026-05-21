import awardnights_background from "../images/awardnights/awardnights_background.png";
import awardnights1 from "../images/awardnights/awardnights1.png";
import '../invitations/Invitation.css'

const awardnightsInvitationElements = [

  // 🏆 AWARD NIGHT IMAGE
  {
    id: 14,
    type: "image",
    src: awardnights1,
    x: 100,
    y: 200,
    width: 400,
    height: 400,
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: awardnights_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // TAGLINE
  {
    id: 3,
    type: "text",
    text: "Honor • Achievement • Celebration",
    x: 180,
    y: 130,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#1d108f"
  },

  // MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🏆 AWARD NIGHT 2026 ✨",
    x: 150,
    y: 10,
    fontSize: 26,
    fontFamily: "Playfair Display",
    fill: "#1d108f"
  },

  // DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 190,
    y: 150,
    fontSize: 14,
    fontFamily: "Poppins",
    fill: "#1d108f"
  },

  // DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Join us for an unforgettable evening celebrating excellence",
    x: 80,
    y: 190,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#1d108f"
  },

  // DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 18 December 2026",
    x: 80,
    y: 450,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#1d108f"
  },

  // TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 7:00 PM",
    x: 100,
    y: 480,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#1d108f"
  },

  // VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 420,
    y: 420,
    fontSize: 15,
    fontFamily: "Playfair Display",
    fill: "#1d108f"
  },

  {
    id: 10,
    type: "text",
    text: "Grand Ballroom",
    x: 400,
    y: 450,
    fontSize: 14,
    fontFamily: "Poppins",
    fill: "#1d108f"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 415,
    y: 480,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#1d108f"
  },

  // FOOTER
  {
    id: 12,
    type: "text",
    text: "Celebrate Success • Inspire Greatness",
    x: 150,
    y: 650,
    fontSize: 25,
    fontFamily: "Great Vibes",
    fill: "#1d108f"
  }

];

export default awardnightsInvitationElements;