import strategymeeting_background from "../images/strategymeeting/strategymeeting_background.png";
import strategymeeting1 from "../images/strategymeeting/strategymeeting1.png";
import '../invitations/Invitation.css'

const strategymeetingInvitationElements = [

  // 🖼 RIGHT SIDE IMAGE
  {
    id: 14,
    type: "image",
    src: strategymeeting1,
    x: 250,
    y: 40,
    width: 315,
    height: 760
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: strategymeeting_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 🏢 TOP ICONS
  {
    id: 1,
    type: "text",
    text: "📈",
    x: 39,
    y: 70,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#163824"
  },
  {
    id: 2,
    type: "text",
    text: "🎯",
    x: 320,
    y: 70,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 🚀 TAGLINE
  {
    id: 3,
    type: "text",
    text: "Plan • Execute • Grow",
    x: 85,
    y: 200,
    fontSize: 20,
    fontFamily: "Great Vibes",
    fill: "#163824"
  },

  // 🎯 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "STRATEGY MEETING 2026",
    x: 70,
    y: 70,
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
    text: "Join us to define goals, analyze opportunities, and drive success",
    x: 20,
    y: 260,
    fontSize: 10,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 12 September 2026",
    x: 60,
    y: 330,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 9:30 AM",
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
    text: "Executive Meeting Hall",
    x: 55,
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
    text: "Strategizing Today for Tomorrow",
    x: 35,
    y: 670,
    fontSize: 24,
    fontFamily: "Great Vibes",
    fill: "#163824"
  }

];

export default strategymeetingInvitationElements;