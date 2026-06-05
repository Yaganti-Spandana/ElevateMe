import nikah_background from "../images/nikah/nikah_background.png";
import nikah1 from "../images/nikah/nikah1.png";
import '../invitations/Invitation.css'

const nikahInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: nikah_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 💍 NIKAH IMAGE
    {
      id: 20,
      type: "image",
      src: nikah1,
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

    // 💍 MAIN TITLE
    {
      id: 3,
      type: "text",
      text: "💍Nikah Ceremony✨",
      x: 340,
      y: 80,
      fontSize: 28,
      fontFamily: "Playfair Display",
      fill: "#139bc0"
    },

    // ✨ SUBTITLE
    {
      id: 4,
      type: "text",
      text: "Together With Their Families",
      x: 380,
      y: 120,
      fontSize: 20,
      fontFamily: "Great Vibes",
      fill: "#139bc0"
    },

    // 💖 INVITE TEXT
    {
      id: 5,
      type: "text",
      text: "With the blessings of Allah,",
      x: 440,
      y: 165,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#139bc0"
    },

    {
      id: 6,
      type: "text",
      text: "we invite you to celebrate the Nikah ceremony 💖",
      x: 360,
      y: 185,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#139bc0"
    },

    // 🤍 EVENT NAME
    {
      id: 7,
      type: "text",
      text: "A Beautiful Beginning Together",
      x: 360,
      y: 225,
      fontSize: 22,
      fontFamily: "Cinzel",
      fill: "#139bc0"
    },

    // 📅 DATE
    {
      id: 8,
      type: "text",
      text: "📅 Sunday, 18 April 2027",
      x: 410,
      y: 265,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#139bc0"
    },

    // ⏰ TIME
    {
      id: 9,
      type: "text",
      text: "⏰ Nikah Time: 11:00 AM",
      x: 420,
      y: 290,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#139bc0"
    },

    // 📍 VENUE
    {
      id: 10,
      type: "text",
      text: "📍 Venue: Noor Mahal Function Hall",
      x: 360,
      y: 320,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#139bc0"
    },

    {
      id: 15,
      type: "text",
      text: "Hyderabad",
      x: 470,
      y: 340,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#139bc0"
    },

    // 🌟 ACTIVITIES
    {
      id: 11,
      type: "text",
      text: "🤲 Blessings • 💍 Nikah • 🍽️ Dinner",
      x: 380,
      y: 375,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#139bc0"
    },

    {
      id: 12,
      type: "text",
      text: "👨‍👩‍👧‍👦 Family Gathering & Celebration",
      x: 365,
      y: 400,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#139bc0"
    },

    // ✨ TAGLINE
    {
      id: 13,
      type: "text",
      text: "May Allah Bless This Beautiful Union ✨",
      x: 320,
      y: 420,
      fontSize: 18,
      fontFamily: "Dancing Script",
      fill: "#139bc0"
    },

    // 📞 CONTACT
    {
      id: 14,
      type: "text",
      text: "📞 Contact: 98765XXXXX",
      x: 420,
      y: 445,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#139bc0"
    }

  ]
};

export default nikahInvitationElements;