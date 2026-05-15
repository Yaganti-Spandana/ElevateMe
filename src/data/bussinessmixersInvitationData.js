import bussinessmixers_background from "../images/bussinessmixers/bussinessmixers_background.png";
import bussinessmixers1 from "../images/bussinessmixers/bussinessmixers1.png";
import bussinessmixers2 from "../images/bussinessmixers/bussinessmixers2.png";
import '../invitations/Invitation.css'

const bussinessmixersInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: bussinessmixers_background,
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

    // BUSINESS IMAGES
    {
      id: 20,
      type: "image",
      src: bussinessmixers1,
      x: 50,
      y: 60,
      width: 300,
      height: 300,
      shape: "circle"
    },
    {
      id: 25,
      type: "image",
      src: bussinessmixers2,
      x: 460,
      y: 190,
      width: 300,
      height: 300,
      shape: "circle"
    },

    // TITLE
    {
      id: 4,
      type: "text",
      text: "Business Mixers",
      x: 315,
      y: 50,
      fontSize: 30,
      fontFamily: "Playfair Display",
      fill: "#eca247"
    },

    // SUBTITLE
    {
      id: 5,
      type: "text",
      text: "You're Invited",
      x: 485,
      y: 90,
      fontSize: 24,
      fontFamily: "Great Vibes",
      fill: "#eca247"
    },

    // INVITATION TEXT
    {
      id: 6,
      type: "text",
      text: "Join us for an inspiring evening of",
      x: 430,
      y: 120,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#eca247"
    },

    {
      id: 7,
      type: "text",
      text: "networking, collaboration, and opportunities",
      x: 400,
      y: 140,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#eca247"
    },

    // EVENT NAME
    {
      id: 8,
      type: "text",
      text: "Business Networking Mixer 2026",
      x: 400,
      y: 160,
      fontSize: 24,
      fontFamily: "Crimson Text",
      fill: "#eca247"
    },

    // EVENT DETAILS
    {
      id: 9,
      type: "text",
      text: "📅 Friday, 20 March 2026",
      x: 140,
      y: 360,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#eca247"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 6:30 PM onwards",
      x: 160,
      y: 385,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#eca247"
    },

    {
      id: 11,
      type: "text",
      text: "📍 Grand Convention Hall, Vijayawada",
      x: 105,
      y: 410,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#eca247"
    },

    // TAGLINE
    {
      id: 12,
      type: "text",
      text: "Connect • Collaborate • Grow",
      x: 160,
      y: 435,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "#eca247"
    },

    // RSVP
    {
      id: 13,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 170,
      y: 475,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#eca247"
    }

  ]
};

export default bussinessmixersInvitationElements;