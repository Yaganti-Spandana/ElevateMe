import cradle_logo from "../images/cradle_ceremony/cradle_logo.png";
import cradle_logo1 from "../images/cradle_ceremony/cradle_logo1.png";
import cradle_logo2 from "../images/cradle_ceremony/cradle_logo2.png";
import '../invitations/Invitation.css'

const cradleInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🌿 BACKGROUND
    {
      id: 1,
      type: "background",
      src: cradle_logo,
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
id:3,
type:"image",
src:cradle_logo1,
x:30,
y:10,
width:285,
height:220
},
{
id:14,
type:"image",
src:cradle_logo2,
x:410,
y:10,
width:310,
height:205
},

    // 👶 TITLE
    {
      id: 4,
      type: "text",
      text: "Cradle Ceremony",
      x: 90,
      y: 260,
      fontSize: 30,
      fontFamily: "Playfair Display",
      fill: "#96d7e1"
    },

    // 💌 SUBTITLE
    {
      id: 5,
      type: "text",
      text: "With Joy in Our Hearts",
      x: 110,
      y: 300,
      fontSize: 22,
      fontFamily: "Great Vibes",
      fill: "#96d7e1"
    },

    // 👋 INVITE TEXT
    {
      id: 6,
      type: "text",
      text: "We are delighted to invite you to",
      x: 70,
      y: 340,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#96d7e1"
    },

    {
      id: 7,
      type: "text",
      text: "the cradle ceremony of our beloved baby",
      x: 40,
      y: 365,
      fontSize: 16,
      fontFamily: "Poppins",
      fill: "#96d7e1"
    },

    // 👶 BABY NAME
    {
      id: 8,
      type: "text",
      text: "Baby Name",
      x: 130,
      y: 400,
      fontSize: 32,
      fontFamily: "Cormorant Garamond",
      fill: "#af2f94",
      shadowColor: "#000000",
      shadowBlur: 2
    },

    // 📅 DETAILS
    {
      id: 9,
      type: "text",
      text: "📅 Sunday, 22 March 2026",
      x: 520,
      y: 280,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#96d7e1"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 11:00 AM onwards",
      x: 520,
      y: 315,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#96d7e1"
    },

    {
      id: 11,
      type: "text",
      text: "📍 Our Residence, Hyderabad",
      x: 520,
      y: 345,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#96d7e1"
    },

    // 💖 TAGLINE
    {
      id: 12,
      type: "text",
      text: "Join us to bless our little bundle of joy",
      x: 470,
      y: 400,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "#af2f94"
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
      fill: "#af2f94"
    }

  ]
};

export default cradleInvitationElements;