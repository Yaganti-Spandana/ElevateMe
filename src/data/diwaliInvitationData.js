import diwali_logo from "../images/diwali/diwali_logo.png";
import '../invitations/Invitation.css'

const diwaliInvitationElements = [

  // 🪔 DIYAS TOP CORNERS
  {
    id: 1,
    type: "text",
    text: "🪔",
    x: 130,
    y: 90,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#ffb300"
  },
  {
    id: 2,
    type: "text",
    text: "🪔",
    x: 450,
    y: 90,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#ffb300"
  },

  // ✨ SPARKLE DIVIDER
  {
    id: 3,
    type: "text",
    text: "✨ ✦ ✨",
    x: 250,
    y: 50,
    fontSize: 22,
    fontFamily: "Poppins",
    fill: "#ffd700"
  },

  // 🎆 HEADING TEXT
  {
    id: 4,
    type: "text",
    text: "Celebrate the Festival of Lights",
    x: 165,
    y: 90,
    fontSize: 28,
    fontFamily: "Great Vibes",
    fill: "#b45309"
  },

  // 🪔 MAIN TITLE
  {
    id: 5,
    type: "text",
    text: "Happy Diwali",
    x: 170,
    y: 140,
    fontSize: 40,
    fontFamily: "Playfair Display",
    fill: "#650f0f"
  },

  // ✨ GOLD DIVIDER
  {
    id: 6,
    type: "text",
    text: "──────── ✦ ────────",
    x: 165,
    y: 185,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#1e1583"
  },

  // 🎇 HOST LINE
  {
    id: 7,
    type: "text",
    text: "We warmly invite you & your family",
    x: 170,
    y: 210,
    fontSize: 14,
    fontFamily: "Poppins",
    fill: "#1f2937"
  },

  {
    id: 8,
    type: "text",
    text: "to join us for a joyous Diwali celebration",
    x: 150,
    y: 225,
    fontSize: 14,
    fontFamily: "Poppins",
    fill: "#1f2937"
  },

  // 🎆 CELEBRATION LINE
  {
    id: 9,
    type: "text",
    text: "Filled with lights, sweets & happiness🎆",
    x: 130,
    y: 260,
    fontSize: 24,
    fontFamily: "Dancing Script",
    fill: "#b45309"
  },

  // 📅 DATE
  {
    id: 10,
    type: "text",
    text: "🗓 Date: Sunday, 12 Nov 2026",
    x: 170,
    y: 310,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#111827"
  },

  // ⏱ TIME
  {
    id: 11,
    type: "text",
    text: "⏱ Time: 6:00 PM onwards",
    x: 190,
    y: 330,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#111827"
  },

  // ✨ DIVIDER
  {
    id: 12,
    type: "text",
    text: "✨ ✦ ✨",
    x: 260,
    y: 360,
    fontSize: 28,
    fontFamily: "Poppins",
    fill: "#ffd700"
  },

  // 📍 VENUE
  {
    id: 13,
    type: "text",
    text: "📍 Venue:",
    x: 250,
    y: 410,
    fontSize: 16,
    fontFamily: "Playfair Display",
    fill: "#b45309"
  },

  {
    id: 14,
    type: "text",
    text: "Grand Celebration Hall",
    x: 220,
    y: 440,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#1f2937"
  },

  {
    id: 15,
    type: "text",
    text: "Nellore",
    x: 250,
    y: 460,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#374151"
  },

  // 🎁 FOOTER MESSAGE
  {
    id: 16,
    type: "text",
    text: "Let’s light up the night together 🪔",
    x: 140,
    y: 520,
    fontSize: 30,
    fontFamily: "Great Vibes",
    fill: "#b45309"
  },

  // 💛 FINAL BLESSING
  {
    id: 17,
    type: "text",
    text: "Wishing you prosperity & happiness💛",
    x: 125,
    y: 560,
    fontSize: 25,
    fontFamily: "Dancing Script",
    fill: "#51470f"
  },

  // BACKGROUND
  {
    id: 18,
    type: "background",
    src: diwali_logo,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  }

];

export default diwaliInvitationElements;