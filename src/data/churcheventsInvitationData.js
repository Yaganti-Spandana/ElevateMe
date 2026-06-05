import churchevents_background from "../images/churchevents/churchevents_background.png";
import churchevents1 from "../images/churchevents/churchevents1.png";
import '../invitations/Invitation.css'

const churcheventsInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: churchevents_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // ⛪ CHURCH EVENT IMAGE
    {
      id: 20,
      type: "image",
      src: churchevents1,
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

    // ⛪ MAIN TITLE
    {
      id: 3,
      type: "text",
      text: "⛪ Church Prayer Gathering ✨",
      x: 300,
      y: 80,
      fontSize: 28,
      fontFamily: "Playfair Display",
      fill: "#7e13c0"
    },

    // ✨ SUBTITLE
    {
      id: 4,
      type: "text",
      text: "Join Us in Faith & Fellowship",
      x: 380,
      y: 120,
      fontSize: 20,
      fontFamily: "Great Vibes",
      fill: "#7e13c0"
    },

    // 🙏 INVITE TEXT
    {
      id: 5,
      type: "text",
      text: "With joyful hearts and God’s blessings,",
      x: 420,
      y: 165,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#7e13c0"
    },

    {
      id: 6,
      type: "text",
      text: "we warmly invite you to our special church gathering ✨",
      x: 350,
      y: 185,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#7e13c0"
    },

    // ✝️ EVENT NAME
    {
      id: 7,
      type: "text",
      text: "An Evening of Worship & Praise",
      x: 350,
      y: 225,
      fontSize: 22,
      fontFamily: "Cinzel",
      fill: "#7e13c0"
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
      fill: "#7e13c0"
    },

    // ⏰ TIME
    {
      id: 9,
      type: "text",
      text: "⏰ Prayer Time: 6:00 PM",
      x: 420,
      y: 290,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#7e13c0"
    },

    // 📍 VENUE
    {
      id: 10,
      type: "text",
      text: "📍 Venue: Grace Community Church",
      x: 360,
      y: 320,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#7e13c0"
    },

    {
      id: 15,
      type: "text",
      text: "Vijayawada",
      x: 470,
      y: 340,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#7e13c0"
    },

    // 🌟 ACTIVITIES
    {
      id: 11,
      type: "text",
      text: "🙏 Worship • 🎶 Gospel Songs • 🍽️ Fellowship Dinner",
      x: 310,
      y: 375,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#7e13c0"
    },

    {
      id: 12,
      type: "text",
      text: "👨‍👩‍👧‍👦 Prayer, Fellowship & Spiritual Celebration",
      x: 340,
      y: 400,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#7e13c0"
    },

    // ✨ TAGLINE
    {
      id: 13,
      type: "text",
      text: "May God’s Grace & Peace Be With Everyone ✨",
      x: 300,
      y: 420,
      fontSize: 18,
      fontFamily: "Dancing Script",
      fill: "#7e13c0"
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
      fill: "#7e13c0"
    }

  ]
};

export default churcheventsInvitationElements;