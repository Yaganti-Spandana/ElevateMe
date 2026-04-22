import culturalfestival1 from "../images/culturalfestival1.png";
import '../invitations/Invitation.css'

const culturalfestivalInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: culturalfestival1,
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


    // 🎉 TITLE
    {
      id: 4,
      type: "text",
      text: "Cultural Fest 2026",
      x: 450,
      y: 30,
      fontSize: 34,
      fontFamily: "Playfair Display",
      fill: "#f3ede9"
    },

    // SUBTITLE
    {
      id: 5,
      type: "text",
      text: "You're Invited",
      x: 500,
      y: 80,
      fontSize: 26,
      fontFamily: "Great Vibes",
      fill: "#f3ede9"
    },

    // 🎊 INVITE TEXT
    {
      id: 6,
      type: "text",
      text: "Join us for a vibrant celebration of",
      x: 420,
      y: 120,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    {
      id: 7,
      type: "text",
      text: "music, dance, art & traditions",
      x: 450,
      y: 140,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    // 🌟 EVENT NAME / THEME
    {
      id: 8,
      type: "text",
      text: "Utsav 2026",
      x: 500,
      y: 160,
      fontSize: 34,
      fontFamily: "Crimson Text",
      fill: "rgb(217, 192, 192)",
      shadowColor: "#d78c5b",
      shadowBlur: 2
    },

    // 📅 DETAILS
    {
      id: 9,
      type: "text",
      text: "📅 Saturday, 18 April 2026",
      x: 50,
      y: 200,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 5:00 PM onwards",
      x: 70,
      y: 240,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    {
      id: 11,
      type: "text",
      text: "📍 Open Grounds, Vijayawada",
      x: 40,
      y: 280,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#f3ede9"
    },

    // 🎶 TAGLINE
    {
      id: 12,
      type: "text",
      text: "Celebrate Culture, Creativity & Togetherness",
      x:380,
      y: 400,
      fontSize: 25,
      fontFamily: "Dancing Script",
      fill: "rgb(249, 244, 244)"
    },

    // 📞 RSVP
    {
      id: 13,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 480,
      y: 460,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#fdfcfa"
    }

  ]
};

export default culturalfestivalInvitationElements;