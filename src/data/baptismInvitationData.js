import baptism_background from "../images/baptism/baptism_background.png";
import baptism1 from "../images/baptism/baptism1.png";
import '../invitations/Invitation.css'

const baptismInvitationElements = [

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: baptism_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 👶 BAPTISM IMAGE
  {
    id: 14,
    type: "image",
    src: baptism1,
    x: 45,
    y: 330,
    width: 330,
    height: 250,
  },

  // ✨ TAGLINE
  {
    id: 3,
    type: "text",
    text: "Faith • Blessings • Celebration",
    x: 210,
    y: 220,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#a37927"
  },

  // 👶 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "✝HOLY BAPTISM CEREMONY✨",
    x: 150,
    y: 180,
    fontSize: 24,
    fontFamily: "Dancing Script",
    fill: "#a37927"
  },

  // ✨ DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 200,
    y: 230,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // 🙏 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "With God’s grace and joyful hearts, we warmly invite you and your family",
    x: 100,
    y: 280,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  {
    id: 16,
    type: "text",
    text: "to join us in celebrating the Holy Baptism of our beloved child",
    x: 140,
    y: 300,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 15 August 2027",
    x: 390,
    y: 340,
    fontSize: 12,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 10:30 AM",
    x: 410,
    y: 380,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // 📍 VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 450,
    y: 450,
    fontSize: 15,
    fontFamily: "Playfair Display",
    fill: "#a37927"
  },

  {
    id: 10,
    type: "text",
    text: "St. Mary's Church",
    x: 430,
    y: 480,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  {
    id: 11,
    type: "text",
    text: "Hyderabad",
    x: 450,
    y: 510,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // 🌟 FOOTER
  {
    id: 12,
    type: "text",
    text: "May God Bless Our Little One With Love & Grace",
    x: 80,
    y: 600,
    fontSize: 20,
    fontFamily: "Great Vibes",
    fill: "#a37927"
  }

];

export default baptismInvitationElements;