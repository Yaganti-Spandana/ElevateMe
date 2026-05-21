import christmas1_background from "../images/christmas/christmas1_background.png";
import christmas11 from "../images/christmas/christmas11.png";
import '../invitations/Invitation.css'

const christmas1InvitationElements = [

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: christmas1_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 🎄 CHRISTMAS IMAGE
  {
    id: 14,
    type: "image",
    src: christmas11,
    x: 30,
    y: 250,
    width: 400,
    height: 300,
  },

  // ✨ TAGLINE
  {
    id: 3,
    type: "text",
    text: "Joy • Love • Celebration",
    x: 220,
    y: 150,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#a37927"
  },

  // 🎄 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🎄 CHRISTMAS CELEBRATION ✨",
    x: 120,
    y: 110,
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
    y: 160,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // 🙏 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "With happiness and festive cheer, we warmly invite you and your family",
    x: 90,
    y: 190,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  {
    id: 16,
    type: "text",
    text: "to celebrate the joyful occasion of Christmas together",
    x: 150,
    y: 210,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 25 December 2027",
    x: 390,
    y: 300,
    fontSize: 12,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 6:30 PM",
    x: 420,
    y: 340,
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
    text: "Starlight Celebration Hall",
    x: 410,
    y: 480,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  {
    id: 11,
    type: "text",
    text: "Hyderabad",
    x: 465,
    y: 510,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // 🌟 FOOTER
  {
    id: 12,
    type: "text",
    text: "Merry Christmas • Peace, Joy & Blessings To All",
    x: 100,
    y: 600,
    fontSize: 21,
    fontFamily: "Great Vibes",
    fill: "#a37927"
  }

];

export default christmas1InvitationElements;