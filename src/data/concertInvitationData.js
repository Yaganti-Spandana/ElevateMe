import concert_background from "../images/concert/concert_background.png";
import concert1 from "../images/concert/concert1.png";
import '../invitations/Invitation.css'

const concertInvitationElements = [

  // 🎶 CONCERT IMAGE
  {
    id: 14,
    type: "image",
    src: concert1,
    x: 120,
    y: 30,
    width: 450,
    height: 450,
    shape: "circle"
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: concert_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 🎵 TOP ICONS
  {
    id: 1,
    type: "text",
    text: "🎸",
    x: 150,
    y: 50,
    fontSize: 30,
    fontFamily: "Poppins",
    fill: "#9d5018"
  },
  {
    id: 2,
    type: "text",
    text: "🎸",
    x: 510,
    y: 50,
    fontSize: 30,
    fontFamily: "Poppins",
    fill: "#9d5018"
  },

  // TAGLINE
  {
    id: 3,
    type: "text",
    text: "Music • Energy • Memories",
    x: 80,
    y: 500,
    fontSize: 18,
    fontFamily: "Great Vibes",
    fill: "#9d5018"
  },

  // MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "LIVE MUSIC CONCERT",
    x: 200,
    y: 50,
    fontSize: 30,
    fontFamily: "Playfair Display",
    fill: "#0b0204"
  },

  // DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 90,
    y: 520,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#9d5018"
  },

  // DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Join us for an unforgettable night of live music and entertainment",
    x: 20,
    y: 560,
    fontSize: 10,
    fontFamily: "Poppins",
    fill: "#9d5018"
  },

  // DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 18 December 2026",
    x: 30,
    y: 650,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#9d5018"
  },

  // TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 7:00 PM",
    x: 70,
    y: 680,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#9d5018"
  },

  // VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 330,
    y: 620,
    fontSize: 20,
    fontFamily: "Playfair Display",
    fill: "#9d5018"
  },

  {
    id: 10,
    type: "text",
    text: "Grand Arena",
    x: 340,
    y: 650,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#9d5018"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 340,
    y: 680,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#9d5018"
  },

  // FOOTER
  {
    id: 12,
    type: "text",
    text: "Feel The Beat • Live The Moment",
    x: 20,
    y: 740,
    fontSize: 24,
    fontFamily: "Great Vibes",
    fill: "#9d5018"
  }

];

export default concertInvitationElements;