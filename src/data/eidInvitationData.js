import eid_background from "../images/eid/eid_background.png";
import eid1 from "../images/eid/eid1.png";
import '../invitations/Invitation.css'

const eidInvitationElements = [

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: eid_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 🌙 EID IMAGE
  {
    id: 14,
    type: "image",
    src: eid1,
    x: 160,
    y: 250,
    width: 300,
    height: 400,
    shape: "circle"
  },

  // ✨ TAGLINE
  {
    id: 3,
    type: "text",
    text: "Faith • Peace • Togetherness",
    x: 220,
    y: 90,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#154b18"
  },

  // 🌙 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🌙 EID CELEBRATION ✨",
    x: 165,
    y: 50,
    fontSize: 24,
    fontFamily: "Playfair Display",
    fill: "#154b18"
  },

  // ✨ DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 210,
    y: 110,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#154b18"
  },

  // 🙏 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "With joy and gratitude, we warmly invite you and your family",
    x: 150,
    y: 130,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#154b18"
  },

  {
    id: 16,
    type: "text",
    text: "to celebrate the blessed occasion of Eid together",
    x: 190,
    y: 150,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#154b18"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 22 April 2027",
    x: 360,
    y: 220,
    fontSize: 12,
    fontFamily: "Poppins",
    fill: "#154b18"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 7:00 PM",
    x: 380,
    y: 240,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#154b18"
  },

  // 📍 VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 470,
    y: 350,
    fontSize: 15,
    fontFamily: "Playfair Display",
    fill: "#154b18"
  },

  {
    id: 10,
    type: "text",
    text: "Royal Banquet Hall",
    x: 460,
    y: 380,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#154b18"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 465,
    y: 410,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#154b18"
  },

  // 🌟 FOOTER
  {
    id: 12,
    type: "text",
    text: "Eid Mubarak • Peace & Blessings To All",
    x: 260,
    y: 600,
    fontSize: 21,
    fontFamily: "Great Vibes",
    fill: "#154b18"
  }

];

export default eidInvitationElements;