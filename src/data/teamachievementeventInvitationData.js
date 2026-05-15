import teamachievementevent_background from "../images/teamachievementevent/teamachievementevent_background.png";
import teamachievementevent1 from "../images/teamachievementevent/teamachievementevent1.png";
import '../invitations/Invitation.css'

const teamachievementeventInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: teamachievementevent_background,
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

    // TEAM IMAGE
    {
      id: 20,
      type: "image",
      src: teamachievementevent1,
      x: 20,
      y: 60,
      width: 350,
      height: 430,
      shape: "circle"
    },

    // ✨ TOP DESIGN
    {
      id: 3,
      type: "text",
      text: "🏆 ✦ 🎉 ✦ 🏆",
      x: 450,
      y: 70,
      fontSize: 26,
      fontFamily: "Cinzel",
      fill: "#680f12"
    },

    // TITLE
    {
      id: 4,
      type: "text",
      text: "Team Achievement Event",
      x: 400,
      y: 100,
      fontSize: 24,
      fontFamily: "Playfair Display",
      fill: "#680f12"
    },

    // SUBTITLE
    {
      id: 5,
      type: "text",
      text: "Celebrating Success Together",
      x: 425,
      y: 130,
      fontSize: 24,
      fontFamily: "Great Vibes",
      fill: "#680f12"
    },

    // INVITE TEXT
    {
      id: 6,
      type: "text",
      text: "Join us as we honor dedication,",
      x: 410,
      y: 170,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#680f12"
    },

    {
      id: 7,
      type: "text",
      text: "teamwork, and outstanding achievements",
      x: 400,
      y: 205,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#680f12"
    },

    // EVENT NAME
    {
      id: 8,
      type: "text",
      text: "Annual Team Excellence Awards 2026",
      x: 380,
      y: 240,
      fontSize: 22,
      fontFamily: "Crimson Text",
      fill: "#680f12"
    },

    // EVENT DETAILS
    {
      id: 9,
      type: "text",
      text: "📅 Friday, 20 March 2026",
      x: 440,
      y: 290,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#680f12"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 6:00 PM onwards",
      x: 460,
      y: 320,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#680f12"
    },

    {
      id: 11,
      type: "text",
      text: "📍 Celebration Hall, Vijayawada",
      x: 420,
      y: 350,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#680f12"
    },

    // TAGLINE
    {
      id: 12,
      type: "text",
      text: "Together We Achieve More",
      x: 450,
      y: 400,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "#680f12"
    },

    // RSVP
    {
      id: 13,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 470,
      y: 460,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#680f12"
    }

  ]
};

export default teamachievementeventInvitationElements;