import collage_background from "../images/collage_background.png";
import collage_logo from "../images/collage_logo.png";
import '../invitations/Invitation.css'

const collageInvitationElements = {
  size: {
    width: 800,
    height: 540   // Landscape premium card
  },
elements: [
   // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: collage_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 🐭 MICKEY IMAGE
    {
      id: 2,
      type: "image",
      src: collage_logo,
      x: 320,
      y: 20,
      width: 220,
      height: 220
    },
    {
      id: 15,
      type: "image",
      src: collage_logo,
      x: 550,
      y: 20,
      width: 220,
      height: 220
    },
    {
      id: 16,
      type: "image",
      src: collage_logo,
      x: 10,
      y: 270,
      width: 250,
      height: 250
    },
    {
      id: 17,
      type: "image",
      src: collage_logo,
      x: 265,
      y: 270,
      width: 250,
      height: 250
    },
    {
      id: 18,
      type: "image",
      src: collage_logo,
      x: 520,
      y: 270,
      width: 250,
      height: 250
    },

    {
      id: 19,
      type: "text",
      text: "---------------------------------oo--ooo--oo---------------------------------",
      x: 60,
      y: 250,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#ff4d4d"
    },

    // 🎈 TOP DECOR
    {
      id: 3,
      type: "text",
      text: "🎈 🎉 🎈",
      x: 110,
      y: 20,
      fontSize: 20,
      fontFamily: "Poppins",
      fill: "#ff4d4d"
    },

    // 🎉 MAIN TITLE
    {
      id: 4,
      type: "text",
      text: "You're Invited!",
      x: 110,
      y: 45,
      fontSize: 15,
      fontFamily: "Great Vibes",
      fill: "#e11d48"
    },

    // 🎂 EVENT TITLE
    {
      id: 5,
      type: "text",
      text: "Birthday Celebration",
      x: 80,
      y: 60,
      fontSize: 14,
      fontFamily: "Playfair Display",
      fill: "#111827"
    },

    // ✨ SUB TEXT
    {
      id: 6,
      type: "text",
      text: "Join us for a magical day full of fun & laughter",
      x: 30,
      y: 80,
      fontSize: 10,
      fontFamily: "Poppins",
      fill: "#374151"
    },

    // 🎁 CHILD NAME
    {
      id: 7,
      type: "text",
      text: "Celebrating: Aarav",
      x: 80,
      y: 100,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "#e11d48"
    },

    // 🎂 AGE
    {
      id: 8,
      type: "text",
      text: "Turning 5",
      x: 120,
      y: 120,
      fontSize: 10,
      fontFamily: "Poppins",
      fill: "#111827"
    },

    // 📅 DATE
    {
      id: 9,
      type: "text",
      text: "📅 Sunday, 12 Dec 2026",
      x: 10,
      y: 140,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#111827"
    },

    // ⏰ TIME
    {
      id: 10,
      type: "text",
      text: "⏰ 5:00 PM onwards",
      x: 10,
      y: 160,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#111827"
    },

    // 📍 VENUE
    {
      id: 11,
      type: "text",
      text: "📍 Fun Party Hall, Nellore",
      x: 10,
      y: 180,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#111827"
    },

    // 🎊 FUN LINE
    {
      id: 12,
      type: "text",
      text: "Games • Cake • Music • Fun 🎊",
      x: 50,
      y: 200,
      fontSize: 18,
      fontFamily: "Dancing Script",
      fill: "#e11d48"
    },

    // 💌 FOOTER
    {
      id: 13,
      type: "text",
      text: "We can't wait to celebrate with you!",
      x: 50,
      y: 220,
      fontSize: 16,
      fontFamily: "Great Vibes",
      fill: "#6b21a8"
    },

    // 📞 CONTACT
    {
      id: 14,
      type: "text",
      text: "📞 98765XXXXX",
      x: 70,
      y: 240,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#333"
    },

]
};

export default collageInvitationElements;