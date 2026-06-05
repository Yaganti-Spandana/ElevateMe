import communityculturalevents_background from "../images/communityculturalevents/communityculturalevents_background.png";
import communityculturalevents1 from "../images/communityculturalevents/communityculturalevents1.png";
import '../invitations/Invitation.css'

const communityculturaleventsInvitationElements = [

  // 🎭 CULTURAL IMAGE
  {
    id: 14,
    type: "image",
    src: communityculturalevents1,
    x: 130,
    y: 300,
    width: 350,
    height: 350,
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: communityculturalevents_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },
  // TAGLINE
  {
    id: 3,
    type: "text",
    text: "Culture • Heritage • Togetherness",
    x: 60,
    y: 100,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#6a189d"
  },

  // MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🎭COMMUNITY CULTURAL EVENT🎨",
    x: 95,
    y: 20,
    fontSize: 26,
    fontFamily: "Playfair Display",
    fill: "#6a189d"
  },

  // DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 80,
    y: 120,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#6a189d"
  },

  // DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Celebrate traditions, performances, art, and unity with our community",
    x: 15,
    y: 160,
    fontSize: 9,
    fontFamily: "Poppins",
    fill: "#6a189d"
  },

  // DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 14 November 2026",
    x: 30,
    y: 200,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#6a189d"
  },

  // TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 5:30 PM",
    x: 70,
    y: 250,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#6a189d"
  },

  // VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 330,
    y: 190,
    fontSize: 20,
    fontFamily: "Playfair Display",
    fill: "#6a189d"
  },

  {
    id: 10,
    type: "text",
    text: "Community Hall",
    x: 340,
    y: 220,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#6a189d"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 345,
    y: 250,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#6a189d"
  },

  // FOOTER
  {
    id: 12,
    type: "text",
    text: "Celebrate Diversity • Share Joy",
    x: 180,
    y: 680,
    fontSize: 22,
    fontFamily: "Great Vibes",
    fill: "#6a189d"
  }

];

export default communityculturaleventsInvitationElements;