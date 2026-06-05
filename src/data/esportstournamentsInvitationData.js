import esportstournaments_background from "../images/esportstournaments/esportstournaments_background.png";
import esportstournaments1 from "../images/esportstournaments/esportstournaments1.png";
import '../invitations/Invitation.css'

const esportstournamentsInvitationElements = [

  // 🎮 ESPORTS IMAGE
  {
    id: 14,
    type: "image",
    src: esportstournaments1,
    x: 70,
    y: 370,
    width: 380,
    height: 250,
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: esportstournaments_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // TAGLINE
  {
    id: 3,
    type: "text",
    text: "Gaming • Competition • Victory",
    x: 330,
    y: 160,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#dd11cc"
  },

  // MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🎮 ESPORTS TOURNAMENT 🏆",
    x: 110,
    y: 20,
    fontSize: 26,
    fontFamily: "Playfair Display",
    fill: "#dd11cc"
  },

  // DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 330,
    y: 175,
    fontSize: 14,
    fontFamily: "Poppins",
    fill: "#dd11cc"
  },

  // DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Get ready for intense matches and ultimate gaming battles",
    x: 250,
    y: 200,
    fontSize: 9,
    fontFamily: "Poppins",
    fill: "#dd11cc"
  },

  // DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 15 January 2026",
    x: 140,
    y: 270,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#dd11cc"
  },

  // TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 4:00 PM",
    x: 180,
    y: 300,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#dd11cc"
  },

  // VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 370,
    y: 240,
    fontSize: 20,
    fontFamily: "Playfair Display",
    fill: "#dd11cc"
  },

  {
    id: 10,
    type: "text",
    text: "Gaming Arena",
    x: 370,
    y: 270,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#dd11cc"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 365,
    y: 300,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#dd11cc"
  },

  // FOOTER
  {
    id: 12,
    type: "text",
    text: "Play • Compete • Conquer",
    x: 140,
    y: 650,
    fontSize: 22,
    fontFamily: "Great Vibes",
    fill: "#dd11cc"
  }

];

export default esportstournamentsInvitationElements;