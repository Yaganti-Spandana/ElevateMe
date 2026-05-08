import wedding2_background from "../images/wedding2/wedding2_background.png";
import wedding2_logo from "../images/wedding2/wedding2_logo.png";
import wedding2_border1 from "../images/wedding2/wedding2_border1.png";
import wedding2_border2 from "../images/wedding2/wedding2_border2.png";
import wedding2_border3 from "../images/wedding2/wedding2_border3.png";
import wedding2_border4 from "../images/wedding2/wedding2_border4.png";

import '../invitations/Invitation.css'

const wedding1InvitationElements = [
 // 🖼 RIGHT SIDE IMAGE 1
{
    id: 15,
    type: "image",
    src: wedding2_border1,
    x: 0,
    y: 0,
    width: 190,
    height: 200
  },
  {
    id: 16,
    type: "image",
    src: wedding2_border2,
    x: 380,
    y: 0,
    width: 210,
    height: 200
  },
  {
    id: 17,
    type: "image",
    src: wedding2_border3,
    x: 0,
    y: 640,
    width: 200,
    height: 200
  },
  {
    id: 18,
    type: "image",
    src: wedding2_border4,
    x: 380,
    y: 640,
    width: 210,
    height: 200
  },
{
    id: 14,
    type: "image",
    src: wedding2_logo,
    x: 90,
    y: 110,
    width: 370,
    height: 600,
  },
  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: wedding2_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },
  // 💍 TOP ICONS
{
  id: 1,
  type: "text",
  text: "✨",
  x: 150,
  y: 100,
  fontSize: 20,
  fontFamily: "Poppins",
  fill: "#ff0066"
},
{
  id: 2,
  type: "text",
  text: "✨",
  x: 390,
  y: 100,
  fontSize: 20,
  fontFamily: "Poppins",
  fill: "#ff0066"
},

// ❤️ TAGLINE
{
  id: 3,
  type: "text",
  text: "Together with Love",
  x: 400,
  y: 260,
  fontSize: 20,
  fontFamily: "Great Vibes",
  fill: "#ff0066"
},

// 👰🤵 MAIN TITLE
{
  id: 4,
  type: "text",
  text: "Wedding Invitation",
  x: 180,
  y: 95,
  fontSize: 24,
  fontFamily: "Playfair Display",
  fill: "#ff0066"
},

// ✨ DIVIDER
{
  id: 5,
  type: "text",
  text: "──────── ✦ ────────",
  x: 390,
  y: 280,
  fontSize: 12,
  fontFamily: "Poppins",
  fill: "#ff0066"
},

// COUPLE NAMES
{
  id: 6,
  type: "text",
  text: "Rahul  ❤️  Priya",
  x: 370,
  y: 300,
  fontSize: 30,
  fontFamily: "Dancing Script",
  fill: "#ff0066"
},

// DATE
{
  id: 7,
  type: "text",
  text: "📅 18 July 2026",
  x: 400,
  y: 380,
  fontSize: 16,
  fontFamily: "Poppins",
  fill: "#ff0066"
},

// TIME
{
  id: 8,
  type: "text",
  text: "⏰ 10:30 AM",
  x: 410,
  y: 410,
  fontSize: 16,
  fontFamily: "Poppins",
  fill: "#ff0066"
},

// VENUE
{
  id: 9,
  type: "text",
  text: "📍 The Grand Palace",
  x: 410,
  y: 500,
  fontSize: 17,
  fontFamily: "Playfair Display",
  fill: "#ff0066"
},

{
  id: 10,
  type: "text",
  text: "Vijayawada",
  x: 430,
  y: 540,
  fontSize: 16,
  fontFamily: "Poppins",
  fill: "#ff0066"
},

// FOOTER
{
  id: 12,
  type: "text",
  text: "Join Our Celebration 💕",
  x: 410,
  y: 610,
  fontSize: 22,
  fontFamily: "Great Vibes",
  fill: "#ff0066"
},

];

export default wedding1InvitationElements;