import networkingevent_background from "../images/networkingevent/networkingevent_background.png";
import networkingevent_logo from "../images/networkingevent/networkingevent_logo.png";

import '../invitations/Invitation.css'

const networkingeventInvitationElements = [
  {
    id: 14,
    type: "image",
    src: networkingevent_logo,
    x: 30,
    y: 50,
    width: 370,
    height: 740,
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: networkingevent_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // TAGLINE
  {
    id: 3,
    type: "text",
    text: "Connect • Collaborate • Grow",
    x: 300,
    y: 260,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#4d3b18"
  },

  // MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🤝 Networking Event 🤝",
    x: 130,
    y: 60,
    fontSize: 30,
    fontFamily: "Playfair Display",
    fill: "#4d3b18"
  },

  // DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 320,
    y: 280,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#4d3b18"
  },

  // HOST / EVENT NAME
  {
    id: 6,
    type: "text",
    text: "Business Leaders Meet",
    x: 280,
    y: 310,
    fontSize: 32,
    fontFamily: "Dancing Script",
    fill: "#4d3b18"
  },

  // DATE
  {
    id: 7,
    type: "text",
    text: "📅 16 July 2026",
    x: 350,
    y: 390,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#4d3b18"
  },

  // TIME
  {
    id: 8,
    type: "text",
    text: "⏰ 5:00 PM",
    x: 360,
    y: 420,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#4d3b18"
  },

  // VENUE
  {
    id: 9,
    type: "text",
    text: "📍 The Grand Palace",
    x: 320,
    y: 500,
    fontSize: 17,
    fontFamily: "Playfair Display",
    fill: "#4d3b18"
  },

  {
    id: 10,
    type: "text",
    text: "Vijayawada",
    x: 350,
    y: 535,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#4d3b18"
  },

  // FOOTER
  {
    id: 12,
    type: "text",
    text: "Join Us & Expand Your Network ✨",
    x: 260,
    y: 610,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#4d3b18"
  },
];

export default networkingeventInvitationElements;