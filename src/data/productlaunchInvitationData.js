import productlaunch_logo from "../images/product_lauch/productlaunch_logo.png";
import '../invitations/Invitation.css'

const productLaunchInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🌿 BACKGROUND
    {
      id: 1,
      type: "background",
      src: productlaunch_logo,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 🧊 STRONG GLASS OVERLAY (KEY FOR DOMINANCE)
    {
      id: 2,
      type: "rect",
      x: 250,
      y: 50,
      width: 500,
      height: 440,
      fill: "rgba(255,255,255,0.82)", // stronger opacity
      cornerRadius: 18
    },

    // ✨ TOP DESIGN
    {
      id: 3,
      type: "text",
      text: "✦ ✧ ✦ ✧ ✦",
      x: 330,
      y: 20,
      fontSize: 26,
      fontFamily: "Cinzel",
      fill: "#8b5e5e"
    },

    // SUB TITLE
    {
      id: 5,
      type: "text",
      text: "Invitation",
      x: 100,
      y: 300,
      fontSize: 32,
      fontFamily: "Playfair Display",
      fill: "#8b5e5e"
    },

    // 👋 INVITE TEXT
    {
      id: 6,
      type: "text",
      text: "We are delighted to invite you to",
      x: 100,
      y: 340,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#1a1a1a"
    },

    {
      id: 7,
      type: "text",
      text: "the unveiling of our latest innovation",
      x: 100,
      y: 360,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#1a1a1a"
    },

    // 🏢 COMPANY NAME (SECOND DOMINANT)
    {
      id: 8,
      type: "text",
      text: "Your Company Name",
      x: 100,
      y: 400,
      fontSize: 30,
      fontFamily: "Cormorant Garamond",
      fill: "#8b5e5e",
      shadowColor: "#000000",
      shadowBlur: 2
    },

    // 📅 DETAILS
    {
      id: 9,
      type: "text",
      text: "📅 Sunday, 22 March 2026",
      x: 520,
      y: 310,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#2f2f2f"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 5:00 PM onwards",
      x: 520,
      y: 335,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#2f2f2f"
    },

    {
      id: 11,
      type: "text",
      text: "📍 Tech Convention Center, Nellore",
      x: 520,
      y: 360,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#2f2f2f"
    },

    // 🌟 TAGLINE
    {
      id: 12,
      type: "text",
      text: "Experience Innovation Like Never Before",
      x: 470,
      y: 400,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "#0b3d3b"
    },

    // 📞 RSVP
    {
      id: 13,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 540,
      y: 440,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#1a1a1a"
    }

  ]
};

export default productLaunchInvitationElements;