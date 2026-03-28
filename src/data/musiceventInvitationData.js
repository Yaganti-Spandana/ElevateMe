import music_bg from "../images/musicevent_logo.png";
import '../invitations/Invitation.css'

const musicInvitationElements = [

  // 🎶 TOP ICONS
  {
    id: 1,
    type: "text",
    text: "🎵",
    x: 10,
    y: 120,
    fontSize: 22,
    fontFamily: "Poppins",
    fill: "#ffd700"
  },
  {
    id: 2,
    type: "text",
    text: "🎵",
    x: 300,
    y: 120,
    fontSize: 22,
    fontFamily: "Poppins",
    fill: "#ffd700"
  },

  // ✨ EVENT TAGLINE
  {
    id: 3,
    type: "text",
    text: "Feel the Rhythm • Live the Music",
    x: 40,
    y: 120,
    fontSize: 22,
    fontFamily: "Great Vibes",
    fill: "#e5e7eb"
  },

  // 🎤 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "Live Music Night",
    x: 20,
    y: 30,
    fontSize: 42,
    fontFamily: "Playfair Display",
    fill: "#ffffff"
  },

  // ✨ DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 45,
    y: 140,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#ffd700"
  },

  // 🎧 SHORT INVITE LINE
  {
    id: 6,
    type: "text",
    text: "Join us for an unforgettable night of music & vibes",
    x: 10,
    y: 170,
    fontSize: 10,
    fontFamily: "Poppins",
    fill: "#d1d5db"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: Saturday, 18 July 2026",
    x: 10,
    y: 250,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#ffffff"
  },

  // ⏱ TIME
  {
    id: 8,
    type: "text",
    text: "⏱ Time: 7:00 PM onwards",
    x: 10,
    y: 280,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#ffffff"
  },

  // 📍 VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 400,
    y: 550,
    fontSize: 18,
    fontFamily: "Playfair Display",
    fill: "#ffd700"
  },
  {
    id: 10,
    type: "text",
    text: "Harmony Club",
    x: 400,
    y: 580,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#e5e7eb"
  },
  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 400,
    y: 610,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#9ca3af"
  },

  // 🎶 FOOTER LINE
  {
    id: 12,
    type: "text",
    text: "Let the music take over 🎶",
    x: 260,
    y: 700,
    fontSize: 35,
    fontFamily: "Great Vibes",
    fill: "#ffd700"
  },

  // BACKGROUND
  {
    id: 13,
    type: "background",
    src: music_bg,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  }

];

export default musicInvitationElements;