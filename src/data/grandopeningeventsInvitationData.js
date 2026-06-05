import grandopeningevents_background from "../images/grandopeningevents/grandopeningevents_background.png";
import grandopeningevents1 from "../images/grandopeningevents/grandopeningevents1.png";
import '../invitations/Invitation.css'

const grandopeningeventsInvitationElements = [

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: grandopeningevents_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 🎉 GRAND OPENING IMAGE
  {
    id: 14,
    type: "image",
    src: grandopeningevents1,
    x: 120,
    y: 450,
    width: 300,
    height: 400,
    shape:"circle"
  },

  // ✨ TAGLINE
  {
    id: 3,
    type: "text",
    text: "Celebrate • Discover • Experience",
    x: 180,
    y: 200,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#2540c8"
  },

  // 🎊 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🎉GRAND OPENING EVENT✨",
    x: 100,
    y: 150,
    fontSize: 26,
    fontFamily: "Playfair Display",
    fill: "#2540c8"
  },

  // ✨ DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 180,
    y: 220,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#2540c8"
  },

  // 📝 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Join us as we celebrate the exciting launch of our new destination",
    x: 120,
    y: 280,
    fontSize: 11,
    fontFamily: "Poppins",
    fill: "#2540c8"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 25 February 2027",
    x: 140,
    y: 340,
    fontSize: 12,
    fontFamily: "Poppins",
    fill: "#2540c8"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 6:00 PM",
    x: 165,
    y: 370,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#2540c8"
  },

  // 📍 VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 370,
    y: 330,
    fontSize: 15,
    fontFamily: "Playfair Display",
    fill: "#2540c8"
  },

  {
    id: 10,
    type: "text",
    text: "Royal Event Lounge",
    x: 335,
    y: 350,
    fontSize: 14,
    fontFamily: "Poppins",
    fill: "#2540c8"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 365,
    y: 370,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#2540c8"
  },

  // 🌟 FOOTER
  {
    id: 12,
    type: "text",
    text: "A New Beginning • A Grand Celebration",
    x: 150,
    y: 460,
    fontSize: 22,
    fontFamily: "Great Vibes",
    fill: "#2540c8"
  }

];

export default grandopeningeventsInvitationElements;