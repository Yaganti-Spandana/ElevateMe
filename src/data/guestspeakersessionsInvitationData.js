import guestspeakersessions_background from "../images/guestspeakersessions/guestspeakersessions_background.png";
import guestspeakersessions1 from "../images/guestspeakersessions/guestspeakersessions1.png";
import '../invitations/Invitation.css'

const guestspeakersessionsInvitationElements = [

  // 🖼 IMAGE
  {
    id: 14,
    type: "image",
    src: guestspeakersessions1,
    x: 40,
    y: 370,
    width: 450,
    height: 450,
    shape: "diamond"
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: guestspeakersessions_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 🎊 TOP ICONS
  {
    id: 1,
    type: "text",
    text: "🎤",
    x: 120,
    y: 50,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#c28220"
  },
  {
    id: 2,
    type: "text",
    text: "✨",
    x: 430,
    y: 50,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#c28220"
  },

  // ✨ TAGLINE
  {
    id: 3,
    type: "text",
    text: "Learn • Inspire • Lead",
    x: 120,
    y: 100,
    fontSize: 18,
    fontFamily: "Great Vibes",
    fill: "#c28220"
  },

  // 🎯 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "GUEST SPEAKER SESSION",
    x: 170,
    y: 50,
    fontSize: 20,
    fontFamily: "Playfair Display",
    fill: "#c28220"
  },

  // ✨ DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 110,
    y: 120,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#c28220"
  },

  // 📝 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Join us for an inspiring session with an industry expert",
    x: 60,
    y: 170,
    fontSize: 10,
    fontFamily: "Poppins",
    fill: "#c28220"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 12 September 2026",
    x: 60,
    y: 250,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#c28220"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 11:00 AM",
    x: 75,
    y: 280,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#c28220"
  },

  // 📍 VENUE TITLE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 400,
    y: 170,
    fontSize: 20,
    fontFamily: "Playfair Display",
    fill: "#c28220"
  },

  // 📍 VENUE DETAILS
  {
    id: 10,
    type: "text",
    text: "Convention Hall",
    x: 390,
    y: 190,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#c28220"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 410,
    y: 210,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#c28220"
  },

  // 🏁 FOOTER
  {
    id: 12,
    type: "text",
    text: "Ideas That Inspire Change",
    x: 160,
    y: 340,
    fontSize: 28,
    fontFamily: "Great Vibes",
    fill: "#c28220"
  }

];

export default guestspeakersessionsInvitationElements;