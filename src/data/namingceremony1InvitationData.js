import namingceremony1_background from "../images/naming_ceremony/namingceremony1_background.png";
import namingceremony1 from "../images/naming_ceremony/namingceremony1.png";
import '../invitations/Invitation.css'

const namingceremony1InvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: namingceremony1_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 👶 BABY IMAGE
    {
      id: 20,
      type: "image",
      src: namingceremony1,
      x: 80,
      y: 150,
      width: 350,
      height: 250,
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

    // 👶 MAIN TITLE
    {
      id: 3,
      type: "text",
      text: "👶Naming Ceremony👶",
      x: 240,
      y: 80,
      fontSize: 34,
      fontFamily: "Playfair Display",
      fill: "#b91c1c"
    },

    // ✨ SUBTITLE
    {
      id: 4,
      type: "text",
      text: "With Great Joy We Invite You",
      x: 285,
      y: 120,
      fontSize: 24,
      fontFamily: "Great Vibes",
      fill: "#166534"
    },

    // 💖 INVITE TEXT
    {
      id: 5,
      type: "text",
      text: "Join us as we celebrate the beautiful occasion",
      x: 430,
      y: 150,
      fontSize: 10,
      fontFamily: "Poppins",
      fill: "#374151"
    },

    {
      id: 6,
      type: "text",
      text: "of our baby's Naming Ceremony 💕",
      x: 460,
      y: 170,
      fontSize: 10,
      fontFamily: "Poppins",
      fill: "#374151"
    },

    // 👶 EVENT NAME
    {
      id: 7,
      type: "text",
      text: "Welcome Little Angel ✨",
      x: 440,
      y: 210,
      fontSize: 20,
      fontFamily: "Cinzel",
      fill: "#1c29b9"
    },

    // 📅 DATE
    {
      id: 8,
      type: "text",
      text: "📅 Sunday, 14 June 2026",
      x: 480,
      y: 240,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#1c29b9"
    },

    // ⏰ TIME
    {
      id: 9,
      type: "text",
      text: "⏰ 10:00 AM onwards",
      x: 490,
      y: 260,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#1c29b9"
    },

    // 📍 VENUE
    {
      id: 10,
      type: "text",
      text: "📍 Venue: Sri Convention Hall, Vijayawada",
      x: 430,
      y: 280,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#1c29b9"
    },

    // 🎉 ACTIVITIES
    {
      id: 11,
      type: "text",
      text: "🎶 Blessings • 🍰 Lunch • 🎁 Celebration",
      x: 430,
      y: 320,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#166534"
    },

    {
      id: 12,
      type: "text",
      text: "👨‍👩‍👧 Family Gathering & Happy Moments",
      x: 430,
      y: 350,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#166534"
    },

    // ✨ TAGLINE
    {
      id: 13,
      type: "text",
      text: "A Precious Day Filled With Love & Blessings ✨",
      x: 310,
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
      x: 430,
      y: 440,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#111827"
    }

  ]
};

export default namingceremony1InvitationElements;