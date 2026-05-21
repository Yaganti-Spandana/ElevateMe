import publiclaunchevents_background from "../images/publiclaunchevents/publiclaunchevents_background.png";
import publiclaunchevents1 from "../images/publiclaunchevents/publiclaunchevents1.png";
import '../invitations/Invitation.css'

const publiclauncheventsInvitationElements = [

  // 🚀 PUBLIC LAUNCH EVENT IMAGE
  {
    id: 14,
    type: "image",
    src: publiclaunchevents1,
    x: 148,
    y: 100,
    width: 300,
    height: 400,
    shape: "diamond"
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: publiclaunchevents_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // TAGLINE
  {
    id: 3,
    type: "text",
    text: "Innovation • Vision • Celebration",
    x: 200,
    y: 50,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#0c200f"
  },

  // MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🚀 PUBLIC LAUNCH EVENT 2026 ✨",
    x: 90,
    y: 10,
    fontSize: 24,
    fontFamily: "Playfair Display",
    fill: "#0c200f"
  },

  // DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 220,
    y: 65,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#0c200f"
  },

  // DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Be part of the grand unveiling of our newest innovation and vision",
    x: 120,
    y: 480,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#0c200f"
  },

  // DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 15 January 2027",
    x: 140,
    y: 540,
    fontSize: 12,
    fontFamily: "Poppins",
    fill: "#0c200f"
  },

  // TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 5:00 PM",
    x: 165,
    y: 570,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#0c200f"
  },

  // VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 330,
    y: 520,
    fontSize: 15,
    fontFamily: "Playfair Display",
    fill: "#0c200f"
  },

  {
    id: 10,
    type: "text",
    text: "Grand Expo Center",
    x: 300,
    y: 550,
    fontSize: 14,
    fontFamily: "Poppins",
    fill: "#0c200f"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 325,
    y: 580,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#0c200f"
  },

  // FOOTER
  {
    id: 12,
    type: "text",
    text: "Launching Ideas • Creating Futures",
    x: 150,
    y: 810,
    fontSize: 23,
    fontFamily: "Great Vibes",
    fill: "#0c200f"
  }

];

export default publiclauncheventsInvitationElements;