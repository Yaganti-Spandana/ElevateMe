import executivegatherings_background from "../images/executivegatherings/executivegatherings_background.png";
import executivegatherings1 from "../images/executivegatherings/executivegatherings1.png";
import '../invitations/Invitation.css'

const executivegatheringsInvitationElements = [

  // 🖼 IMAGE
  {
    id: 14,
    type: "image",
    src: executivegatherings1,
    x: 30,
    y: 250,
    width: 540,
    height: 380
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: executivegatherings_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },
  // 🚀 TAGLINE
  {
    id: 3,
    type: "text",
    text: "Lead • Connect • Inspire",
    x: 220,
    y: 80,
    fontSize: 20,
    fontFamily: "Great Vibes",
    fill: "#163824"
  },

  // 🎯 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "👔 EXECUTIVE GATHERING 👔",
    x: 150,
    y: 50,
    fontSize: 22,
    fontFamily: "Playfair Display",
    fill: "#163824"
  },

  // ✨ DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 210,
    y: 100,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 🧠 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "An exclusive gathering of leaders to share insights and build meaningful connections",
    x: 40,
    y: 130,
    fontSize: 12,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 12 September 2026",
    x: 180,
    y: 180,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 7:00 PM",
    x: 230,
    y: 210,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 📍 VENUE TITLE
  {
    id: 9,
    type: "text",
    text: "📍Venue:",
    x: 200,
    y: 640,
    fontSize: 28,
    fontFamily: "Playfair Display",
    fill: "#163824"
  },

  // 📍 VENUE DETAILS
  {
    id: 10,
    type: "text",
    text: "Grand Executive Lounge",
    x: 190,
    y: 670,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 220,
    y: 690,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 🏁 FOOTER
  {
    id: 12,
    type: "text",
    text: "Where Leaders Build the Future",
    x: 180,
    y: 770,
    fontSize: 24,
    fontFamily: "Great Vibes",
    fill: "#163824"
  }

];

export default executivegatheringsInvitationElements;