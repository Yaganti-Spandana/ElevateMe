import ramadaniftar_background from "../images/ramadaniftar/ramadaniftar_background.png";
import ramadaniftar1 from "../images/ramadaniftar/ramadaniftar1.png";
import '../invitations/Invitation.css'

const ramadaniftarInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: ramadaniftar_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 🌙 RAMADAN IFTAR IMAGE
    {
      id: 20,
      type: "image",
      src: ramadaniftar1,
      x: 70,
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

    // 🌙 MAIN TITLE
    {
      id: 3,
      type: "text",
      text: "🌙 Ramadan Iftar Gathering ✨",
      x: 270,
      y: 80,
      fontSize: 26,
      fontFamily: "Playfair Display",
      fill: "#0d0918"
    },

    // ✨ SUBTITLE
    {
      id: 4,
      type: "text",
      text: "An Evening of Prayer, Peace & Togetherness",
      x: 320,
      y: 120,
      fontSize: 18,
      fontFamily: "Great Vibes",
      fill: "#0d0918"
    },

    // 🙏 INVITE TEXT
    {
      id: 5,
      type: "text",
      text: "With blessings and gratitude during this holy month,",
      x: 380,
      y: 165,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#0d0918"
    },

    {
      id: 6,
      type: "text",
      text: "we warmly invite you & your family to our Iftar gathering 🌙",
      x: 370,
      y: 185,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#0d0918"
    },

    // 🍽️ EVENT NAME
    {
      id: 7,
      type: "text",
      text: "Ramadan Kareem 2027",
      x: 390,
      y: 225,
      fontSize: 22,
      fontFamily: "Cinzel",
      fill: "#0d0918"
    },

    // 📅 DATE
    {
      id: 8,
      type: "text",
      text: "📅 Friday, 12 March 2027",
      x: 410,
      y: 265,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#0d0918"
    },

    // ⏰ TIME
    {
      id: 9,
      type: "text",
      text: "⏰ Iftar Time: 6:30 PM",
      x: 430,
      y: 290,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#0d0918"
    },

    // 📍 VENUE
    {
      id: 10,
      type: "text",
      text: "📍 Venue: Royal Banquet Hall",
      x: 390,
      y: 320,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#0d0918"
    },

    {
      id: 15,
      type: "text",
      text: "Hyderabad",
      x: 450,
      y: 340,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#0d0918"
    },

    // 🌟 ACTIVITIES
    {
      id: 11,
      type: "text",
      text: "🌙 Dua • 🍽️ Iftar Feast • 🤝 Togetherness",
      x: 360,
      y: 375,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#0d0918"
    },

    {
      id: 12,
      type: "text",
      text: "🕌 Family Gathering & Spiritual Celebration",
      x: 355,
      y: 400,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#0d0918"
    },

    // ✨ TAGLINE
    {
      id: 13,
      type: "text",
      text: "Ramadan Mubarak • May Peace & Blessings Be With You ✨",
      x: 260,
      y: 420,
      fontSize: 18,
      fontFamily: "Dancing Script",
      fill: "#0d0918"
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
      fill: "#0d0918"
    }

  ]
};

export default ramadaniftarInvitationElements;