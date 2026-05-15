import officeopeningceremony_background from "../images/officeopeningceremony/officeopeningceremony_background.png";
import officeopeningceremony1 from "../images/officeopeningceremony/officeopeningceremony1.png";
import '../invitations/Invitation.css'

const officeopeningceremonyInvitationElements = [

  // 🖼 IMAGE
  {
    id: 14,
    type: "image",
    src: officeopeningceremony1,
    x: 30,
    y: 400,
    width: 540,
    height: 400
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: officeopeningceremony_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 🎊 TOP ICONS
  {
    id: 1,
    type: "text",
    text: "🏢",
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
    text: "A New Beginning • A New Journey",
    x: 55,
    y: 100,
    fontSize: 18,
    fontFamily: "Great Vibes",
    fill: "#c28220"
  },

  // 🎯 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "OFFICE OPENING CEREMONY",
    x: 150,
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
    x: 75,
    y: 120,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#c28220"
  },

  // 📝 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "We warmly invite you to celebrate the grand opening of our new office",
    x: 25,
    y: 170,
    fontSize: 8,
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
    text: "⏰ Time: 10:00 AM",
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
    text: "ABC Corporate Office",
    x: 380,
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
    text: "Together Towards Success",
    x: 180,
    y: 370,
    fontSize: 30,
    fontFamily: "Great Vibes",
    fill: "#c28220"
  }

];

export default officeopeningceremonyInvitationElements;