import companyanniversary_background from "../images/companyanniversary/companyanniversary_background.png";
import companyanniversary1 from "../images/companyanniversary/companyanniversary1.png";
import '../invitations/Invitation.css'

const companyanniversaryinvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: companyanniversary_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // COMPANY IMAGE
    {
      id: 20,
      type: "image",
      src: companyanniversary1,
      x: 375,
      y: 40,
      width: 400,
      height: 470,
      radius: 30
    },

    // TITLE
    {
      id: 4,
      type: "text",
      text: "Company Anniversary",
      x: 125,
      y: 70,
      fontSize: 28,
      fontFamily: "Playfair Display",
      fill: "#2e1c59"
    },

    // SUBTITLE
    {
      id: 5,
      type: "text",
      text: "Celebrating Success Together",
      x: 110,
      y: 110,
      fontSize: 24,
      fontFamily: "Great Vibes",
      fill: "#2e1c59"
    },

    // INVITATION TEXT
    {
      id: 6,
      type: "text",
      text: "Join us as we celebrate another year of",
      x: 95,
      y: 170,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    },

    {
      id: 7,
      type: "text",
      text: "growth, innovation, and achievements",
      x: 125,
      y: 200,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    },

    // EVENT NAME
    {
      id: 8,
      type: "text",
      text: "10th Anniversary Celebration",
      x: 95,
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
      x: 130,
      y: 290,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 6:00 PM onwards",
      x: 150,
      y: 320,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    },

    {
      id: 11,
      type: "text",
      text: "📍 Grand Convention Hall",
      x: 135,
      y: 350,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    },

    // TAGLINE
    {
      id: 12,
      type: "text",
      text: "Honoring Our Past • Inspiring Our Future",
      x: 65,
      y: 410,
      fontSize: 18,
      fontFamily: "Dancing Script",
      fill: "#2e1c59"
    },

    // RSVP
    {
      id: 13,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 150,
      y: 460,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#2e1c59"
    }

  ]
};

export default companyanniversaryinvitationElements;