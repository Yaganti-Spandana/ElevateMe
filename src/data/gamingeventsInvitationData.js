import gamingevents_background from "../images/gamingevents/gamingevents_background.png";
import gamingevents1 from "../images/gamingevents/gamingevents1.png";
import '../invitations/Invitation.css'

const gamingeventsInvitationElements = [

  // 🎮 GAMING IMAGE
  {
    id: 14,
    type: "image",
    src: gamingevents1,
    x: 89,
    y: 416,
    width: 420,
    height: 400,
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: gamingevents_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // TAGLINE
  {
    id: 3,
    type: "text",
    text: "Play • Compete • Conquer",
    x: 235,
    y: 130,
    fontSize: 13,
    fontFamily: "Great Vibes",
    fill: "#54c6b3"
  },

  // MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🎮 GAMING TOURNAMENT 🔥",
    x: 120,
    y: 20,
    fontSize: 26,
    fontFamily: "Playfair Display",
    fill: "#f2a43e"
  },

  // DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 215,
    y: 140,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#54c6b3"
  },

  // DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Join epic battles and gaming challenges",
    x: 185,
    y: 170,
    fontSize: 9,
    fontFamily: "Poppins",
    fill: "#54c6b3"
  },
  {
    id: 26,
    type: "text",
    text: "with friends, teams, and top players",
    x: 200,
    y: 185,
    fontSize: 9,
    fontFamily: "Poppins",
    fill: "#54c6b3"
  },

  // DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 28 December 2026",
    x: 100,
    y: 250,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#54c6b3"
  },

  // TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 6:00 PM",
    x: 140,
    y: 280,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#54c6b3"
  },

  // VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 330,
    y: 220,
    fontSize: 20,
    fontFamily: "Playfair Display",
    fill: "#54c6b3"
  },

  {
    id: 10,
    type: "text",
    text: "Gaming Arena",
    x: 350,
    y: 250,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#54c6b3"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 345,
    y: 280,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#54c6b3"
  },

  // FOOTER
  {
    id: 12,
    type: "text",
    text: "Level Up • Dominate • Win",
    x: 180,
    y: 370,
    fontSize: 22,
    fontFamily: "Great Vibes",
    fill: "#54c6b3"
  }

];

export default gamingeventsInvitationElements;