import aksharabhyasam_background from "../images/aksharabhyasam/aksharabhyasam_background.png";
import aksharabhyasam1 from "../images/aksharabhyasam/aksharabhyasam1.png";
import aksharabhyasam2 from "../images/aksharabhyasam/aksharabhyasam2.png";
import '../invitations/Invitation.css'

const aksharabhyasamInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: aksharabhyasam_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 📚 AKSHARABHYASAM IMAGES
    {
      id: 20,
      type: "image",
      src: aksharabhyasam1,
      x: 80,
      y: 50,
      width: 200,
      height: 150,
    },

    {
      id: 25,
      type: "image",
      src: aksharabhyasam2,
      x: 120,
      y: 240,
      width: 260,
      height: 170,
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

    // 📚 MAIN TITLE
    {
      id: 3,
      type: "text",
      text: "📚Aksharabhyasam Ceremony📚",
      x: 280,
      y: 80,
      fontSize: 28,
      fontFamily: "Playfair Display",
      fill: "#5a0e6b"
    },

    // ✨ SUBTITLE
    {
      id: 4,
      type: "text",
      text: "A Sacred Beginning of Learning",
      x: 330,
      y: 120,
      fontSize: 22,
      fontFamily: "Great Vibes",
      fill: "#5a0e6b"
    },

    // 🙏 INVITE TEXT
    {
      id: 5,
      type: "text",
      text: "With blessings of elders and God,",
      x: 430,
      y: 160,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#5a0e6b"
    },

    {
      id: 6,
      type: "text",
      text: "we invite you to our child’s Aksharabhyasam ✨",
      x: 360,
      y: 180,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#5a0e6b"
    },

    // 📖 EVENT NAME
    {
      id: 7,
      type: "text",
      text: "Vidyarambham Ceremony",
      x: 430,
      y: 220,
      fontSize: 20,
      fontFamily: "Cinzel",
      fill: "#5a0e6b"
    },

    // 📅 DATE
    {
      id: 8,
      type: "text",
      text: "📅 Sunday, 22 August 2026",
      x: 430,
      y: 260,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#5a0e6b"
    },

    // ⏰ TIME
    {
      id: 9,
      type: "text",
      text: "⏰ 9:30 AM onwards",
      x: 460,
      y: 285,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#5a0e6b"
    },

    // 📍 VENUE
    {
      id: 10,
      type: "text",
      text: "📍 Venue: Sri Sai Function Hall",
      x: 410,
      y: 315,
      fontSize: 12,
      fontFamily: "Poppins",
      fill: "#5a0e6b"
    },

    {
      id: 15,
      type: "text",
      text: "Vijayawada",
      x: 510,
      y: 335,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#5a0e6b"
    },

    // 🎉 ACTIVITIES
    {
      id: 11,
      type: "text",
      text: "📖 First Writing • 🙏 Blessings • 🍛 Lunch",
      x: 360,
      y: 370,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#5a0e6b"
    },

    {
      id: 12,
      type: "text",
      text: "👨‍👩‍👧 Family Gathering & Joyful Moments",
      x: 375,
      y: 395,
      fontSize: 13,
      fontFamily: "Poppins",
      fill: "#5a0e6b"
    },

    // ✨ TAGLINE
    {
      id: 13,
      type: "text",
      text: "Beginning the Journey of Knowledge ✨",
      x: 340,
      y: 430,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "#5a0e6b"
    },

    // 🔗 CONTACT
    {
      id: 14,
      type: "text",
      text: "📞 Contact: 98765XXXXX",
      x: 420,
      y: 460,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#5a0e6b"
    }

  ]
};

export default aksharabhyasamInvitationElements;