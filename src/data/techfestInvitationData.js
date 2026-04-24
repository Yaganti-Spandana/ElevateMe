import techfest_background from "../images/techfest/techfest_background.png";
import techfest1 from "../images/techfest/techfest1.png";
import techfest2 from "../images/techfest/techfest2.png";
import '../invitations/Invitation.css'

const techfestInvitationElements = [

  // 💻 TOP ICONS
  {
    id: 1,
    type: "text",
    text: "💻",
    x: 39,
    y: 100,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#00e5ff"
  },
  {
    id: 2,
    type: "text",
    text: "⚡",
    x: 260,
    y: 100,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#00e5ff"
  },

  // 🚀 TAGLINE
  {
    id: 3,
    type: "text",
    text: "Innovate • Build • Compete",
    x: 60,
    y: 160,
    fontSize: 20,
    fontFamily: "Great Vibes",
    fill: "#cbd5f5"
  },

  // 🎯 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "TECH FEST 2026",
    x: 70,
    y: 95,
    fontSize: 25,
    fontFamily: "Playfair Display",
    fill: "#2936ae"
  },

  // ✨ DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 65,
    y: 180,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#2936ae"
  },

  // 🧠 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Join us for coding, robotics & innovation challenges",
    x: 35,
    y: 220,
    fontSize: 10,
    fontFamily: "Poppins",
    fill: "#d1d5db"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 18 July 2026",
    x: 75,
    y: 330,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#ffffff"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 9:00 AM onwards",
    x: 50,
    y: 360,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#ffffff"
  },

  // 📍 VENUE TITLE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 80,
    y: 500,
    fontSize: 28,
    fontFamily: "Playfair Display",
    fill: "#2936ae"
  },

  // 📍 VENUE DETAILS
  {
    id: 10,
    type: "text",
    text: "Engineering College",
    x: 80,
    y: 550,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#e5e7eb"
  },
  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 110,
    y: 590,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#e5e7eb"
  },

  // 🏁 FOOTER
  {
    id: 12,
    type: "text",
    text: "Code the Future 🚀",
    x: 50,
    y: 720,
    fontSize: 36,
    fontFamily: "Great Vibes",
    fill: "#2936ae"
  },

  // 🖼 RIGHT SIDE IMAGE 1
  {
    id: 14,
    type: "image",
    src: techfest1,
    x: 370,
    y: 70,
    width: 170,
    height: 400
  },

  // 🖼 RIGHT SIDE IMAGE 2
  {
    id: 15,
    type: "image",
    src: techfest2,
    x: 370,
    y: 570,
    width: 170,
    height: 226
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: techfest_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  }

];

export default techfestInvitationElements;