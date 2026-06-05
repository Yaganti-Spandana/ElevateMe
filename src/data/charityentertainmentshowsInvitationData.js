import charityentertainmentshows_background from "../images/charityentertainmentshows/charityentertainmentshows_background.png";
import charityentertainmentshows1 from "../images/charityentertainmentshows/charityentertainmentshows1.png";
import '../invitations/Invitation.css'

const charityentertainmentshowsInvitationElements = [

  // ❤️ CHARITY EVENT IMAGE
  {
    id: 14,
    type: "image",
    src: charityentertainmentshows1,
    x: 100,
    y: 250,
    width: 400,
    height: 230,
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: charityentertainmentshows_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // TAGLINE
  {
    id: 3,
    type: "text",
    text: "Giving • Hope • Celebration",
    x: 220,
    y: 60,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#761414"
  },

  // MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "❤️ CHARITY ENTERTAINMENT NIGHT ✨",
    x: 80,
    y: 10,
    fontSize: 24,
    fontFamily: "Playfair Display",
    fill: "#761414"
  },

  // DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 220,
    y: 75,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#761414"
  },

  // DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Join us for an inspiring evening of music, fun, and fundraising",
    x: 100,
    y: 220,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#761414"
  },

  // DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 20 December 2026",
    x: 140,
    y: 540,
    fontSize: 12,
    fontFamily: "Poppins",
    fill: "#761414"
  },

  // TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 6:30 PM",
    x: 165,
    y: 570,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#761414"
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
    fill: "#761414"
  },

  {
    id: 10,
    type: "text",
    text: "Community Event Hall",
    x: 285,
    y: 550,
    fontSize: 14,
    fontFamily: "Poppins",
    fill: "#761414"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 325,
    y: 580,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#761414"
  },

  // FOOTER
  {
    id: 12,
    type: "text",
    text: "Together We Can Make a Difference",
    x: 140,
    y: 800,
    fontSize: 23,
    fontFamily: "Great Vibes",
    fill: "#761414"
  }

];

export default charityentertainmentshowsInvitationElements;