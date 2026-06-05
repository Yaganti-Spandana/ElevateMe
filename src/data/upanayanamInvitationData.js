import upanayanam_background from "../images/upanayanam/upanayanam_background.png";
import upanayanam1 from "../images/upanayanam/upanayanam1.png";
import '../invitations/Invitation.css'

const upanayanamInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: upanayanam_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 🕉️ UPANAYANAM IMAGE
    {
      id: 20,
      type: "image",
      src: upanayanam1,
      x: 80,
      y: 150,
      width: 350,
      height: 250,
      shape: "circle"
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

    // 🕉️ MAIN TITLE
    {
      id: 3,
      type: "text",
      text: "🕉️Upanayanam Ceremony🕉️",
      x: 200,
      y: 80,
      fontSize: 30,
      fontFamily: "Playfair Display",
      fill: "#133b10"
    },

    // ✨ SUBTITLE
    {
      id: 4,
      type: "text",
      text: "With Divine Blessings We Invite You",
      x: 280,
      y: 120,
      fontSize: 22,
      fontFamily: "Great Vibes",
      fill: "#166534"
    },

    // 🙏 INVITE TEXT
    {
      id: 5,
      type: "text",
      text: "Join us for the sacred thread ceremony",
      x: 430,
      y: 160,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#374151"
    },

    {
      id: 6,
      type: "text",
      text: "and bless our beloved child ✨",
      x: 470,
      y: 180,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#374151"
    },

    // 🕉️ EVENT NAME
    {
      id: 7,
      type: "text",
      text: "Sacred Yajnopavita Dharana",
      x: 410,
      y: 220,
      fontSize: 20,
      fontFamily: "Cinzel",
      fill: "#133b10"
    },

    // 📅 DATE
    {
      id: 8,
      type: "text",
      text: "📅 Sunday, 18 July 2026",
      x: 470,
      y: 255,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#133b10"
    },

    // ⏰ TIME
    {
      id: 9,
      type: "text",
      text: "⏰ 8:30 AM onwards",
      x: 485,
      y: 280,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#133b10"
    },

    // 📍 VENUE
    {
      id: 10,
      type: "text",
      text: "📍 Venue: Sri Venkateswara Function Hall",
      x: 400,
      y: 305,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#133b10"
    },

    {
      id: 15,
      type: "text",
      text: "Vijayawada",
      x: 520,
      y: 325,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#133b10"
    },

    // 🎉 ACTIVITIES
    {
      id: 11,
      type: "text",
      text: "🙏 Vedic Rituals • 🍛 Lunch • 🎶 Blessings",
      x: 410,
      y: 360,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#166534"
    },

    {
      id: 12,
      type: "text",
      text: "👨‍👩‍👦 Family Gathering & Spiritual Celebration",
      x: 390,
      y: 385,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#166534"
    },

    // ✨ TAGLINE
    {
      id: 13,
      type: "text",
      text: "Blessings, Traditions & Sacred Memories ✨",
      x: 320,
      y: 410,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "#133b10"
    },

    // 🔗 RSVP
    {
      id: 14,
      type: "text",
      text: "📞Contact: 98765XXXXX",
      x: 350,
      y: 440,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#133b10"
    }

  ]
};

export default upanayanamInvitationElements;