import unicorn_background from "../images/unicorn/unicorn_background.png";
import unicorn_logo1 from "../images/unicorn/unicorn_logo1.png";
import unicorn_logo2 from "../images/unicorn/unicorn_logo2.png";
import unicorn_logo3 from "../images/unicorn/unicorn_logo3.png";
import '../invitations/Invitation.css'

const unicornInvitationElements = [


  

  // 🎉 HEADING TEXT
  {
    id: 4,
    type: "text",
    text: "Hey! You're Invited!",
    x: 150,
    y: 260,
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
    y: 210,
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
    y: 240,
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
    y: 300,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#1f2937"
  },

  {
    id: 8,
    type: "text",
    text: "full of fun, laughter & surprises!",
    x: 10,
    y: 330,
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
    y: 370,
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
    y: 400,
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
    y: 470,
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
    y: 500,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#111827"
  },


  // 📍 VENUE
  {
    id: 14,
    type: "text",
    text: "📍 Venue:",
    x: 10,
    y: 440,
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
    x: 40,
    y: 530,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#374151"
  },
  // 🎊 FOOTER
  {
    id: 17,
    type: "text",
    text: "Come join Mickey & friends for lots of fun! 🎉",
    x: 250,
    y: 650,
    fontSize: 18,
    fontFamily: "Dancing Script",
    fill: "#000000"
  },

  // 🎁 FINAL NOTE
  {
    id: 18,
    type: "text",
    text: "❤️ We can't wait to celebrate with you! ❤️",
    x: 250,
    y: 680,
    fontSize: 18,
    fontFamily: "Dancing Script",
    fill: "#000000"
  },
{
id:19,
type:"image",
src:unicorn_logo1,
x:0,
y:10,
width:600,
height:200
},
{
    id: 1,
    type: "text",
    text: "🎈",
    x: 100,
    y: 180,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#ff4d4d"
  },
  {
    id: 2,
    type: "text",
    text: "🎈",
    x: 450,
    y: 180,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#ff4d4d"
  },
  // ✨ DIVIDER
  {
    id: 13,
    type: "text",
    text: "✨ ------------ ✨",
    x: 180,
    y: 170,
    fontSize: 24,
    fontFamily: "Poppins",
    fill: "#e11d48"
  },
{
id:20,
type:"image",
src:unicorn_logo2,
x:390,
y:300,
width:200,
height:200
},
{
id:21,
type:"image",
src:unicorn_logo3,
x:30,
y:560,
width:200,
height:200
},
  // BACKGROUND
  {
    id: 22,
    type: "background",
    src: unicorn_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  }

];

export default unicornInvitationElements;