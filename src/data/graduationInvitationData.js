import graduation1 from "../images/graduation/graduation1.png";
import '../invitations/Invitation.css'

const graduationInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎓 BACKGROUND
    {
      id: 1,
      type: "background",
      src: graduation1,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 🧊 GLASS OVERLAY
    {
      id: 2,
      type: "rect",
      x: 250,
      y: 50,
      width: 500,
      height: 440,
      fill: "rgba(255,255,255,0.82)",
      cornerRadius: 18
    },

    // ✨ TOP DESIGN
    {
      id: 3,
      type: "text",
      text: "✦ ✧ ✦ ✧ ✦",
      x: 190,
      y: 20,
      fontSize: 26,
      fontFamily: "Cinzel",
      fill: "#f3ede9"
    },

    // 🎓 TITLE
    {
      id: 4,
      type: "text",
      text: "Graduation Ceremony",
      x: 150,
      y: 50,
      fontSize: 21,
      fontFamily: "Playfair Display",
      fill: "#f3ede9"
    },

    // SUBTITLE
    {
      id: 5,
      type: "text",
      text: "You're Invited",
      x: 190,
      y: 90,
      fontSize: 26,
      fontFamily: "Great Vibes",
      fill: "#f3ede9"
    },

    // 👋 INVITE TEXT
    {
      id: 6,
      type: "text",
      text: "We are proud to invite you to celebrate",
      x: 110,
      y: 150,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    {
      id: 7,
      type: "text",
      text: "the academic achievements of our graduates",
      x: 75,
      y: 185,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    // 🎓 STUDENT / BATCH NAME
    {
      id: 8,
      type: "text",
      text: "Class of 2026",
      x: 170,
      y: 220,
      fontSize: 32,
      fontFamily: "Crimson Text",
      fill: "rgb(217, 192, 192)",
      shadowColor: "#d78c5b",
      shadowBlur: 2
    },

    // 📅 DETAILS
    {
      id: 9,
      type: "text",
      text: "📅 Sunday, 22 March 2026",
      x: 150,
      y: 290,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 10:00 AM onwards",
      x: 165,
      y: 320,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    {
      id: 11,
      type: "text",
      text: "📍 Grand Convention Hall, Vijayawada",
      x: 100,
      y: 350,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    // 🌟 TAGLINE
    {
      id: 12,
      type: "text",
      text: "Celebrating Success, Hard Work & Bright Futures",
      x: 75,
      y: 400,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "rgb(217, 192, 192)"
    },

    // 📞 RSVP
    {
      id: 13,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 170,
      y: 460,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    }

  ]
};

export default graduationInvitationElements;