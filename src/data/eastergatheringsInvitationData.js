import eastergatherings_background from "../images/eastergatherings/eastergatherings_background.png";
import eastergatherings1 from "../images/eastergatherings/eastergatherings1.png";
import '../invitations/Invitation.css'

const eastergatheringsInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: eastergatherings_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 🐣 EASTER IMAGE
    {
      id: 20,
      type: "image",
      src: eastergatherings1,
      x: 50,
      y: 120,
      width: 320,
      height: 320,
      shape: "circle"
    },

    // ✨ GLASS OVERLAY
    {
      id: 2,
      type: "rect",
      x: 250,
      y: 50,
      width: 500,
      height: 440,
      fill: "rgba(255,255,255,0.85)",
      cornerRadius: 18
    },

    // 🐣 MAIN TITLE
    {
      id: 3,
      type: "text",
      text: "🐣 Easter Celebration Gathering ✨",
      x: 285,
      y: 80,
      fontSize: 28,
      fontFamily: "Playfair Display",
      fill: "#13714b"
    },

    // ✨ SUBTITLE
    {
      id: 4,
      type: "text",
      text: "Celebrate the Joy of Resurrection",
      x: 365,
      y: 120,
      fontSize: 20,
      fontFamily: "Great Vibes",
      fill: "#13714b"
    },

    // 🙏 INVITE TEXT
    {
      id: 5,
      type: "text",
      text: "With hearts full of joy and gratitude,",
      x: 420,
      y: 165,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#13714b"
    },

    {
      id: 6,
      type: "text",
      text: "we warmly invite you to our special Easter gathering ✨",
      x: 345,
      y: 185,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#13714b"
    },

    // ✝️ EVENT NAME
    {
      id: 7,
      type: "text",
      text: "A Day of Hope, Faith & Celebration",
      x: 370,
      y: 225,
      fontSize: 22,
      fontFamily: "Cinzel",
      fill: "#13714b"
    },

    // 📅 DATE
    {
      id: 8,
      type: "text",
      text: "📅 Sunday, 4 April 2027",
      x: 420,
      y: 265,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#13714b"
    },

    // ⏰ TIME
    {
      id: 9,
      type: "text",
      text: "⏰ Celebration Time: 10:00 AM",
      x: 395,
      y: 290,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#13714b"
    },

    // 📍 VENUE
    {
      id: 10,
      type: "text",
      text: "📍 Venue: Resurrection Prayer Hall",
      x: 400,
      y: 320,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#13714b"
    },

    {
      id: 15,
      type: "text",
      text: "Vijayawada",
      x: 470,
      y: 340,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#13714b"
    },

    // 🌟 ACTIVITIES
    {
      id: 11,
      type: "text",
      text: "🙏 Prayer • 🎶 Worship Songs • 🍽️ Easter Lunch",
      x: 355,
      y: 375,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#13714b"
    },

    {
      id: 12,
      type: "text",
      text: "👨‍👩‍👧‍👦 Fellowship, Celebration & Easter Blessings",
      x: 360,
      y: 400,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#13714b"
    },

    // ✨ TAGLINE
    {
      id: 13,
      type: "text",
      text: "He Is Risen • Rejoice In His Love & Grace ✨",
      x: 335,
      y: 420,
      fontSize: 18,
      fontFamily: "Dancing Script",
      fill: "#13714b"
    },

    // 📞 CONTACT
    {
      id: 14,
      type: "text",
      text: "📞 Contact: 98765XXXXX",
      x: 450,
      y: 445,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#13714b"
    }

  ]
};

export default eastergatheringsInvitationElements;