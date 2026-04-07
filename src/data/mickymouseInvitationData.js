import micky_mouse_background from "../images/micky_mouse_background.png";
import micky_mouse_logo from "../images/micky_mouse_logo.png";
import '../invitations/Invitation.css'

const mickymouseInvitationElements = [

  // 🎈 BALLOONS TOP CORNERS
  {
    id: 1,
    type: "text",
    text: "🎈",
    x: 120,
    y: 65,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#ff4d4d"
  },
  {
    id: 2,
    type: "text",
    text: "🎈",
    x: 450,
    y: 65,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#ff4d4d"
  },

  // ✨ SPARKLE DIVIDER
  {
    id: 3,
    type: "text",
    text: "✨ 🐭 ✨",
    x: 220,
    y: 10,
    fontSize: 30,
    fontFamily: "Poppins",
    fill: "#ffd700"
  },

  // 🎉 HEADING TEXT
  {
    id: 4,
    type: "text",
    text: "Oh Boy! You're Invited!",
    x: 150,
    y: 60,
    fontSize: 28,
    fontFamily: "Comic Sans MS",
    fill: "#000000"
  },

  // 🎂 MAIN TITLE
  {
    id: 5,
    type: "text",
    text: "Birthday Party",
    x: 170,
    y: 110,
    fontSize: 34,
    fontFamily: "Playfair Display",
    fill: "#e11d48"
  },

  // 🎀 DIVIDER
  {
    id: 6,
    type: "text",
    text: "──────── 🎀 ────────",
    x: 150,
    y: 150,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#e11d48"
  },

  // 🐭 INVITE LINE
  {
    id: 7,
    type: "text",
    text: "Join us for a magical celebration",
    x: 10,
    y: 230,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#1f2937"
  },

  {
    id: 8,
    type: "text",
    text: "full of fun, laughter & surprises!",
    x: 10,
    y: 250,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#1f2937"
  },

  // 🎁 CHILD NAME
  {
    id: 9,
    type: "text",
    text: "Celebrating: [Child Name]",
    x: 10,
    y: 310,
    fontSize: 22,
    fontFamily: "Dancing Script",
    fill: "#e11d48"
  },

  // 🎂 AGE
  {
    id: 10,
    type: "text",
    text: "Turning [Age]",
    x: 10,
    y: 340,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#111827"
  },

  // 📅 DATE
  {
    id: 11,
    type: "text",
    text: "🗓 Date: Sunday, 12 Dec 2026",
    x: 10,
    y: 430,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#111827"
  },

  // ⏰ TIME
  {
    id: 12,
    type: "text",
    text: "⏰ Time: 5:00 PM onwards",
    x: 10,
    y: 450,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#111827"
  },

  // ✨ DIVIDER
  {
    id: 13,
    type: "text",
    text: "✨ ------------ ✨",
    x: 30,
    y: 480,
    fontSize: 24,
    fontFamily: "Poppins",
    fill: "#e11d48"
  },

  // 📍 VENUE
  {
    id: 14,
    type: "text",
    text: "📍 Venue:",
    x: 100,
    y: 540,
    fontSize: 16,
    fontFamily: "Playfair Display",
    fill: "#e11d48"
  },

  {
    id: 15,
    type: "text",
    text: "Fun Party Hall",
    x: 90,
    y: 570,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#1f2937"
  },

  {
    id: 16,
    type: "text",
    text: "Nellore",
    x: 120,
    y: 600,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#374151"
  },
  // 🎊 FOOTER
  {
    id: 17,
    type: "text",
    text: "Come join Mickey & friends for lots of fun! 🎉",
    x: 110,
    y: 720,
    fontSize: 24,
    fontFamily: "Dancing Script",
    fill: "#000000"
  },

  // 🎁 FINAL NOTE
  {
    id: 18,
    type: "text",
    text: "❤️ We can't wait to celebrate with you! ❤️",
    x: 130,
    y: 750,
    fontSize: 22,
    fontFamily: "Dancing Script",
    fill: "#000000"
  },
{
id:19,
type:"image",
src:micky_mouse_logo,
x:300,
y:220,
width:280,
height:450
},
  // BACKGROUND
  {
    id: 20,
    type: "background",
    src: micky_mouse_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  }

];

export default mickymouseInvitationElements;