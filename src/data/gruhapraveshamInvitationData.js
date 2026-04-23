import gruhapravesham_logo from "../images/gruhapravesham/gruhapravesham_logo.png";
import '../invitations/Invitation.css'

const gruhapraveshamInvitationElements = {
  size: {
    width: 800,
    height: 540   // Landscape premium card
  },

  elements: [

    // 🌸 BACKGROUND
    {
      id: 1,
      type: "background",
      src: gruhapravesham_logo,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 🏵️ MANDALA TOP (use any mandala png if available)
    {
      id: 4,
      type: "text",
      text: "✿ ✿ ✿ ✿ ✿ ✿ ✿",
      x: 280,
      y: 30,
      fontSize: 28,
      fontFamily: "Cinzel",
      fill: "#d4af37"
    },

    // ✨ MAIN TITLE (GOLD GRADIENT EFFECT)
    {
      id: 5,
      type: "text",
      text: "Gruhapravesham Invitation",
      x: 370,
      y: 80,
      fontSize: 20,
      fontFamily: "Cinzel",
      fill: "#a01010"
    },
    {
      id: 6,
      type: "text",
      text: "Gruhapravesham Invitation",
      x: 368,
      y: 82,
      fontSize: 20,
      fontFamily: "Cinzel",
      fill: "#ffb0b0",
      opacity: 0.4
    },

    // 🪶 SUB TEXT
    {
      id: 7,
      type: "text",
      text: "With divine blessings, we invite you & your family",
      x: 360,
      y: 120,
      fontSize: 15,
      fontFamily: "Playfair Display",
      fill: "#6b3e26"
    },

    // 🏠 HOUSE EVENT
    {
      id: 8,
      type: "text",
      text: "to our Gruhapravesham Ceremony",
      x: 400,
      y: 150,
      fontSize: 15,
      fontFamily: "Playfair Display",
      fill: "#6b3e26"
    },

    // 👨‍👩‍👧 FAMILY NAME
    {
      id: 9,
      type: "text",
      text: "Mr. & Mrs. Family Name",
      x: 390,
      y: 190,
      fontSize: 26,
      fontFamily: "Cormorant Garamond",
      fill: "#8b0000"
    },

    // 📅 DATE
    {
      id: 10,
      type: "text",
      text: "📅 Sunday, 22 March 2026",
      x: 360,
      y: 260,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#333"
    },

    // ⏰ TIME
    {
      id: 11,
      type: "text",
      text: "⏰ 10:00 AM onwards",
      x: 360,
      y: 280,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#333"
    },

    // 📍 VENUE
    {
      id: 12,
      type: "text",
      text: "📍 Green Garden Function Hall, Guntur",
      x: 360,
      y: 300,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#333"
    },

    // 🌸 BLESSING LINE
    {
      id: 13,
      type: "text",
      text: "Your presence will make this occasion more special",
      x: 350,
      y: 350,
      fontSize: 17,
      fontFamily: "Dancing Script",
      fill: "#8b4513"
    },

    // ================= TELUGU VERSION =================

    {
      id: 14,
      type: "text",
      text: "శ్రీ గృహప్రవేశ ఆహ్వానం",
      x: 430,
      y: 400,
      fontSize: 17,
      fontFamily: "Noto Sans Telugu",
      fill: "#b8860b"
    },

    {
      id: 15,
      type: "text",
      text: "మా ఇంటి గృహప్రవేశ కార్యక్రమానికి",
      x: 390,
      y: 430,
      fontSize: 17,
      fontFamily: "Noto Sans Telugu",
      fill: "#444"
    },

    {
      id: 16,
      type: "text",
      text: "మీ కుటుంబ సమేతంగా విచ్చేసి ఆశీర్వదించగలరు",
      x: 390,
      y: 455,
      fontSize: 17,
      fontFamily: "Noto Sans Telugu",
      fill: "#444"
    },

    // 📞 CONTACT
    {
      id: 17,
      type: "text",
      text: "📞 98765XXXXX",
      x: 500,
      y: 480,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#333"
    }

  ]
};

export default gruhapraveshamInvitationElements;