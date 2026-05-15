import bussinessmeeting_background from "../images/bussinessmeeting/bussinessmeeting_background.png";
import bussinessmeeting1 from "../images/bussinessmeeting/bussinessmeeting1.png";
import '../invitations/Invitation.css'

const bussinessmeetinginvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: bussinessmeeting_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 🧊 GLASS OVERLAY
    {
      id: 2,
      type: "rect",
      x: 380,
      y: 50,
      width: 300,
      height: 420,
      fill: "rgba(255,255,255,0.82)",
      cornerRadius: 15
    },

    // BUSINESS IMAGE
    {
      id: 20,
      type: "image",
      src: bussinessmeeting1,
      x: 410,
      y: 70,
      width: 350,
      height: 400
    },

    // ✨ TOP DESIGN
    {
      id: 3,
      type: "text",
      text: "✦ ✧ ✦ ✧ ✦",
      x: 190,
      y: 45,
      fontSize: 26,
      fontFamily: "Cinzel",
      fill: "#2e1c59"
    },

    // TITLE
    {
      id: 4,
      type: "text",
      text: "Business Meeting",
      x: 155,
      y: 70,
      fontSize: 24,
      fontFamily: "Playfair Display",
      fill: "#2e1c59"
    },

    // SUBTITLE
    {
      id: 5,
      type: "text",
      text: "You're Invited",
      x: 190,
      y: 110,
      fontSize: 26,
      fontFamily: "Great Vibes",
      fill: "#2e1c59"
    },

    // INVITE TEXT
    {
      id: 6,
      type: "text",
      text: "Join us for an exclusive gathering of",
      x: 115,
      y: 170,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    },

    {
      id: 7,
      type: "text",
      text: "leaders, innovators, and business professionals",
      x: 70,
      y: 205,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    },

    // EVENT NAME
    {
      id: 8,
      type: "text",
      text: "Annual Corporate Summit 2026",
      x: 75,
      y: 240,
      fontSize: 28,
      fontFamily: "Crimson Text",
      fill: "#2e1c59"
    },

    // EVENT DETAILS
    {
      id: 9,
      type: "text",
      text: "📅 Friday, 20 March 2026",
      x: 140,
      y: 290,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 11:00 AM onwards",
      x: 160,
      y: 320,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    },

    {
      id: 11,
      type: "text",
      text: "📍 Convention Hall, Vijayawada",
      x: 120,
      y: 350,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    },

    // TAGLINE
    {
      id: 12,
      type: "text",
      text: "Connecting Ideas, Creating Opportunities",
      x: 75,
      y: 400,
      fontSize: 18,
      fontFamily: "Dancing Script",
      fill: "#2e1c59"
    },

    // RSVP
    {
      id: 13,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 170,
      y: 460,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    }

  ]
};

export default bussinessmeetinginvitationElements;