import boardmeeting_background from "../images/boardmeeting/boardmeeting_background.png";
import boardmeeting1 from "../images/boardmeeting/boardmeeting1.png";
import '../invitations/Invitation.css'

const boardmeetingInvitationElements = [

  // 🖼 RIGHT SIDE IMAGE
  {
    id: 14,
    type: "image",
    src: boardmeeting1,
    x: 250,
    y: 90,
    width: 315,
    height: 645
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: boardmeeting_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 🏢 TOP ICONS
  {
    id: 1,
    type: "text",
    text: "📊",
    x: 39,
    y: 140,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#163824"
  },
  {
    id: 2,
    type: "text",
    text: "🤝",
    x: 280,
    y: 140,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 🚀 TAGLINE
  {
    id: 3,
    type: "text",
    text: "Lead • Discuss • Decide",
    x: 75,
    y: 200,
    fontSize: 20,
    fontFamily: "Great Vibes",
    fill: "#163824"
  },

  // 🎯 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "BOARD MEETING 2026",
    x: 70,
    y: 140,
    fontSize: 20,
    fontFamily: "Playfair Display",
    fill: "#163824"
  },

  // ✨ DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 65,
    y: 220,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 🧠 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Join us for strategic planning and key business discussions",
    x: 75,
    y: 260,
    fontSize: 10,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 25 August 2026",
    x: 75,
    y: 330,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 10:00 AM",
    x: 75,
    y: 360,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 📍 VENUE TITLE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 75,
    y: 450,
    fontSize: 28,
    fontFamily: "Playfair Display",
    fill: "#163824"
  },

  // 📍 VENUE DETAILS
  {
    id: 10,
    type: "text",
    text: "Corporate Board Room",
    x: 75,
    y: 510,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#163824"
  },
  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 75,
    y: 550,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 🏁 FOOTER
  {
    id: 12,
    type: "text",
    text: "Shaping Tomorrow's Vision",
    x: 75,
    y: 670,
    fontSize: 28,
    fontFamily: "Great Vibes",
    fill: "#163824"
  }

];

export default boardmeetingInvitationElements;