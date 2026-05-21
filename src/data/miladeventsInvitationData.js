import miladevents_background from "../images/miladevents/miladevents_background.png";
import miladevents1 from "../images/miladevents/miladevents1.png";
import '../invitations/Invitation.css'

const miladeventsInvitationElements = [

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: miladevents_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 🌙 MILAD EVENT IMAGE
  {
    id: 14,
    type: "image",
    src: miladevents1,
    x: 30,
    y: 250,
    width: 400,
    height: 300,
  },

  // ✨ TAGLINE
  {
    id: 3,
    type: "text",
    text: "Faith • Unity • Blessings",
    x: 220,
    y: 150,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#a37927"
  },

  // 🌙 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🌙MILAD-UN-NABI CELEBRATION✨",
    x: 100,
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
    x: 210,
    y: 160,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // 🙏 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "With gratitude and happiness, we warmly invite you and your family",
    x: 120,
    y: 190,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  {
    id: 16,
    type: "text",
    text: "to join us in celebrating the blessed occasion of Milad-un-Nabi",
    x: 130,
    y: 210,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 27 September 2027",
    x: 400,
    y: 300,
    fontSize: 12,
    fontFamily: "Poppins",
    fill: "#a37927"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 7:30 PM",
    x: 430,
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
    text: "Noor Community Hall",
    x: 435,
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
    text: "Milad Mubarak • May Peace & Blessings Be Upon All",
    x: 80,
    y: 600,
    fontSize: 21,
    fontFamily: "Great Vibes",
    fill: "#a37927"
  }

];

export default miladeventsInvitationElements;