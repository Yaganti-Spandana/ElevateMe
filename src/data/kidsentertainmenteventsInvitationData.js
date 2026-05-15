import kidsentertainmentevents_background from "../images/kidsentertainmentevents/kidsentertainmentevents_background.png";
import kidsentertainmentevents1 from "../images/kidsentertainmentevents/kidsentertainmentevents1.png";
import kidsentertainmentevents2 from "../images/kidsentertainmentevents/kidsentertainmentevents2.png";
import '../invitations/Invitation.css'

const kidsentertainmenteventsInvitationElements = [

  // 🎈 EVENT IMAGE
  {
    id: 14,
    type: "image",
    src: kidsentertainmentevents1,
    x: 150,
    y: 60,
    width: 300,
    height: 350,
    shape: "diamond"
  },
  {
    id: 25,
    type: "image",
    src: kidsentertainmentevents2,
    x: 290,
    y: 250,
    width: 300,
    height: 350,
    shape: "diamond"
  },

  // BACKGROUND
  {
    id: 13,
    type: "background",
    src: kidsentertainmentevents_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },
  // TAGLINE
  {
    id: 3,
    type: "text",
    text: "Fun • Laughter • Adventure",
    x: 100,
    y: 350,
    fontSize: 15,
    fontFamily: "Great Vibes",
    fill: "#b87f2b"
  },

  // MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🎈KIDS ENTERTAINMENT EVENT🎪",
    x: 60,
    y: 50,
    fontSize: 28,
    fontFamily: "Playfair Display",
    fill: "#b87f2b"
  },

  // DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 90,
    y: 360,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#b87f2b"
  },

  // DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Join us for a magical day filled with games",
    x: 60,
    y: 380,
    fontSize: 10,
    fontFamily: "Poppins",
    fill: "#b87f2b"
  },
  {
    id: 26,
    type: "text",
    text: ", fun activities, and surprises",
    x: 90,
    y: 400,
    fontSize: 10,
    fontFamily: "Poppins",
    fill: "#b87f2b"
  },

  // DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 22 November 2026",
    x: 170,
    y: 570,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#b87f2b"
  },

  // TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 4:00 PM",
    x: 210,
    y: 600,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#b87f2b"
  },

  // VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 150,
    y: 450,
    fontSize: 20,
    fontFamily: "Playfair Display",
    fill: "#b87f2b"
  },

  {
    id: 10,
    type: "text",
    text: "Kids Fun Park",
    x: 150,
    y: 480,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#b87f2b"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 160,
    y: 510,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#b87f2b"
  },

  // FOOTER
  {
    id: 12,
    type: "text",
    text: "A Day Full of Smiles & Memories",
    x: 200,
    y: 650,
    fontSize: 16,
    fontFamily: "Great Vibes",
    fill: "#b87f2b"
  }

];

export default kidsentertainmenteventsInvitationElements;