import christmas_background from "../images/christmas/christmas_background.png";
import christmas1 from "../images/christmas/christmas1.png";
import '../invitations/Invitation.css'

const christmasInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: christmas_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },
    {
      id: 20,
      type: "image",
      src: christmas1,
      x: 18,
      y: 117,
      width: 250,
      height: 250
    },

    // ❄️ GLASS OVERLAY
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

    // 🎄 MAIN TITLE
    {
      id: 3,
      type: "text",
      text: "🎄 Christmas Celebration 🎄",
      x: 180,
      y: 40,
      fontSize: 34,
      fontFamily: "Playfair Display",
      fill: "#b91c1c"
    },

    // ✨ SUBTITLE
    {
      id: 4,
      type: "text",
      text: "You're Invited",
      x: 430,
      y: 90,
      fontSize: 26,
      fontFamily: "Great Vibes",
      fill: "#166534"
    },

    // 🎁 INVITE TEXT
    {
      id: 5,
      type: "text",
      text: "Join us for a magical evening filled with",
      x: 360,
      y: 140,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#374151"
    },

    {
      id: 6,
      type: "text",
      text: "joy, laughter & festive cheer 🎅",
      x: 420,
      y: 170,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#374151"
    },

    // 🎅 EVENT NAME
    {
      id: 7,
      type: "text",
      text: "Winter Wonderland 2026 ❄️",
      x: 380,
      y: 210,
      fontSize: 23,
      fontFamily: "Cinzel",
      fill: "#b91c1c"
    },

    // 📅 DATE
    {
      id: 8,
      type: "text",
      text: "📅 Friday, 25 December 2026",
      x: 410,
      y: 240,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#ffffff"
    },

    // ⏰ TIME
    {
      id: 9,
      type: "text",
      text: "⏰ 6:00 PM onwards",
      x: 440,
      y: 260,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#ffffff"
    },

    // 📍 VENUE
    {
      id: 10,
      type: "text",
      text: "📍 Venue: Grand Hall, Vijayawada",
      x: 400,
      y: 280,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#ffffff"
    },

    // 🎶 ACTIVITIES
    {
      id: 11,
      type: "text",
      text: "🎶 Carols • 🎁 Gifts • 🍰 Treats",
      x: 390,
      y: 320,
      fontSize: 18,
      fontFamily: "Poppins",
      fill: "#166534"
    },

    {
      id: 12,
      type: "text",
      text: "🎅 Santa Visit & Fun Games",
      x: 400,
      y: 350,
      fontSize: 18,
      fontFamily: "Poppins",
      fill: "#166534"
    },

    // ✨ TAGLINE
    {
      id: 13,
      type: "text",
      text: "Celebrate the Joy of Giving & Togetherness ✨",
      x: 370,
      y: 400,
      fontSize: 22,
      fontFamily: "Dancing Script",
      fill: "#b91c1c"
    },

    // 🔗 RSVP
    {
      id: 14,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 480,
      y: 460,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#111827"
    }

  ]
};

export default christmasInvitationElements;