import moviescreenings_background from "../images/moviescreenings/moviescreenings_background.png";
import moviescreenings1 from "../images/moviescreenings/moviescreenings1.png";
import '../invitations/Invitation.css'

const moviescreeningsInvitationElements = [

  // 🎬 MOVIE IMAGE
  {
    id: 14,
    type: "image",
    src: moviescreenings1,
    x: 85,
    y: 350,
    width: 430,
    height: 250,
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: moviescreenings_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // TAGLINE
  {
    id: 3,
    type: "text",
    text: "Cinema • Entertainment • Memories",
    x: 220,
    y: 130,
    fontSize: 13,
    fontFamily: "Great Vibes",
    fill: "#272119"
  },

  // MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "🎬 MOVIE SCREENING NIGHT 🍿",
    x: 95,
    y: 20,
    fontSize: 26,
    fontFamily: "Playfair Display",
    fill: "#f2a43e"
  },

  // DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 215,
    y: 140,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#272119"
  },

  // DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Join us for an unforgettable cinematic",
    x: 200,
    y: 170,
    fontSize: 9,
    fontFamily: "Poppins",
    fill: "#272119"
  },
  {
    id: 26,
    type: "text",
    text: "experience with friends & family",
    x: 215,
    y: 180,
    fontSize: 9,
    fontFamily: "Poppins",
    fill: "#272119"
  },

  // DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 22 December 2026",
    x: 100,
    y: 250,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#272119"
  },

  // TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 7:00 PM",
    x: 140,
    y: 280,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#272119"
  },

  // VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 330,
    y: 220,
    fontSize: 20,
    fontFamily: "Playfair Display",
    fill: "#272119"
  },

  {
    id: 10,
    type: "text",
    text: "Grand Cinema Hall",
    x: 330,
    y: 250,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#272119"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 345,
    y: 280,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#272119"
  },

  // FOOTER
  {
    id: 12,
    type: "text",
    text: "Lights • Camera • Action",
    x: 220,
    y: 630,
    fontSize: 22,
    fontFamily: "Great Vibes",
    fill: "#272119"
  }

];

export default moviescreeningsInvitationElements;