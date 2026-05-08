import mehandi_background from "../images/mehandi/mehandi_background.png";
import mehandi_logo from "../images/mehandi/mehandi_logo.png";

import '../invitations/Invitation.css'

const mehandiInvitationElements = [
{
    id: 14,
    type: "image",
    src: mehandi_logo,
    x: 30,
    y: 50,
    width: 370,
    height: 740,
  },
  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: mehandi_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

// TAGLINE
{
  id: 3,
  type: "text",
  text: "A Celebration of Love & Colors",
  x: 360,
  y: 260,
  fontSize: 16,
  fontFamily: "Great Vibes",
  fill: "#1d4d1d"
},

// MAIN TITLE
{
  id: 4,
  type: "text",
  text: "🌿 Mehendi Ceremony 🌿",
  x: 340,
  y: 160,
  fontSize: 20,
  fontFamily: "Playfair Display",
  fill: "#1d4d1d"
},

// DIVIDER
{
  id: 5,
  type: "text",
  text: "──────── ✦ ────────",
  x: 370,
  y: 280,
  fontSize: 12,
  fontFamily: "Poppins",
  fill: "#1d4d1d"
},

// COUPLE NAMES
{
  id: 6,
  type: "text",
  text: "Rahul💚Priya",
  x: 300,
  y: 310,
  fontSize: 48,
  fontFamily: "Dancing Script",
  fill: "#1d4d1d"
},

// DATE
{
  id: 7,
  type: "text",
  text: "📅 16 July 2026",
  x: 400,
  y: 390,
  fontSize: 16,
  fontFamily: "Poppins",
  fill: "#1d4d1d"
},

// TIME
{
  id: 8,
  type: "text",
  text: "⏰ 5:00 PM",
  x: 415,
  y: 420,
  fontSize: 16,
  fontFamily: "Poppins",
  fill: "#1d4d1d"
},

// VENUE
{
  id: 9,
  type: "text",
  text: "📍 The Grand Palace",
  x: 395,
  y: 500,
  fontSize: 17,
  fontFamily: "Playfair Display",
  fill: "#1d4d1d"
},

{
  id: 10,
  type: "text",
  text: "Vijayawada",
  x: 430,
  y: 535,
  fontSize: 16,
  fontFamily: "Poppins",
  fill: "#1d4d1d"
},

// FOOTER
{
  id: 12,
  type: "text",
  text: "Let’s Celebrate Together 💚",
  x: 385,
  y: 610,
  fontSize: 20,
  fontFamily: "Great Vibes",
  fill: "#1d4d1d"
},

];

export default mehandiInvitationElements;