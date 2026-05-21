import satyanarayanapooja_background from "../images/satyanarayanapooja/satyanarayanapooja_background.png";
import satyanarayanapooja1 from "../images/satyanarayanapooja/satyanarayanapooja1.png";
import '../invitations/Invitation.css'

const satyanarayanapoojaInvitationElements = [

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: satyanarayanapooja_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 🪔 SATYANARAYANA POOJA IMAGE
  {
    id: 14,
    type: "image",
    src: satyanarayanapooja1,
    x: 90,
    y: 300,
    width: 300,
    height: 400,
    shape: "circle"
  },

  // ✨ TAGLINE
  {
    id: 3,
    type: "text",
    text: "Devotion • Blessings • Prosperity",
    x: 200,
    y: 200,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#2153c0"
  },

  // 🪔 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🪔SRI SATYANARAYANA POOJA🪔",
    x: 150,
    y: 170,
    fontSize: 20,
    fontFamily: "Playfair Display",
    fill: "#2153c0"
  },

  // ✨ DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 200,
    y: 220,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#2153c0"
  },

  // 🙏 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "With divine blessings, we warmly invite you and your family",
    x:140,
    y: 280,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#2153c0"
  },

  {
    id: 16,
    type: "text",
    text: "to attend the sacred Sri Satyanarayana Pooja ceremony",
    x: 140,
    y: 300,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#2153c0"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 12 March 2027",
    x: 360,
    y: 400,
    fontSize: 12,
    fontFamily: "Poppins",
    fill: "#2153c0"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 9:00 AM",
    x: 380,
    y: 420,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#2153c0"
  },

  // 📍 VENUE
  {
    id: 9,
    type: "text",
    text: "📍Venue:",
    x: 400,
    y: 500,
    fontSize: 15,
    fontFamily: "Playfair Display",
    fill: "#2153c0"
  },

  {
    id: 10,
    type: "text",
    text: "Sri Lakshmi Function Hall",
    x: 385,
    y: 535,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#2153c0"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 395,
    y: 570,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#2153c0"
  },

  // 🌟 FOOTER
  {
    id: 12,
    type: "text",
    text: "May Lord Satyanarayana Bless Everyone",
    x: 150,
    y: 700,
    fontSize: 21,
    fontFamily: "Great Vibes",
    fill: "#2153c0"
  }

];

export default satyanarayanapoojaInvitationElements;