import seminar1 from "../images/seminar/seminar1.png";
import '../invitations/Invitation.css'

const seminarInvitationElements = [

  // 🎓 TOP ICONS
  {
    id: 1,
    type: "text",
    text: "🎓",
    x: 350,
    y: 50,
    fontSize: 25,
    fontFamily: "Poppins",
    fill: "#a9a931" // blue
  },

  {
    id: 2,
    type: "text",
    text: "🎓",
    x: 530,
    y: 50,
    fontSize: 25,
    fontFamily: "Poppins",
    fill: "#2563eb"
  },

  // ✨ TOP DIVIDER
  {
    id: 3,
    type: "text",
    text: "✦ ✦ ✦",
    x: 430,
    y: 50,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "bisque"
  },

  // 🎤 TITLE
  {
    id: 4,
    type: "text",
    text: "Seminar Invitation",
    x: 330,
    y: 80,
    fontSize: 30,
    fontFamily: "Playfair Display",
    fill: "bisque"
  },

  // ✨ SUBTITLE
  {
    id: 5,
    type: "text",
    text: "You're Invited!",
    x: 380,
    y: 120,
    fontSize: 28,
    fontFamily: "Great Vibes",
    fill: "bisque"
  },

  // ✨ LINE
  {
    id: 6,
    type: "text",
    text: "──────── ✦ ────────",
    x: 330,
    y: 160,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "bisque"
  },

  // 📚 SEMINAR TITLE
  {
    id: 7,
    type: "text",
    text: "Future of Technology & Innovation 2026",
    x: 330,
    y: 230,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#1e293b"
  },

  // 📢 DESCRIPTION
  {
    id: 8,
    type: "text",
    text: "Join us for an insightful",
    x: 370,
    y: 280,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#050506"
  },
  {
    id: 19,
    type: "text",
    text: "seminar featuring expert talks,",
    x: 350,
    y: 310,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#050506"
  },

  {
    id: 9,
    type: "text",
    text: "interactive sessions, and networking opportunities.",
    x: 330,
    y: 345,
    fontSize: 10,
    fontFamily: "Poppins",
    fill: "#050506"
  },

  // 📅 DATE
  {
    id: 10,
    type: "text",
    text: "🗓 Sunday, 22 March 2026",
    x: 10,
    y: 500,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#050506"
  },

  // ⏰ TIME
  {
    id: 11,
    type: "text",
    text: "⏱ 10:00 AM – 2:00 PM",
    x: 10,
    y: 530,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#050506"
  },

  // 📍 VENUE TITLE
  {
    id: 12,
    type: "text",
    text: "Venue",
    x: 10,
    y: 570,
    fontSize: 26,
    fontFamily: "Playfair Display",
    fill: "bisque"
  },

  // 📍 VENUE NAME
  {
    id: 13,
    type: "text",
    text: "Convention Hall,",
    x: 10,
    y: 610,
    fontSize: 24,
    fontFamily: "Poppins",
    fill: "#334155"
  },

  {
    id: 14,
    type: "text",
    text: "Vijayawada",
    x: 10,
    y: 640,
    fontSize: 22,
    fontFamily: "Poppins",
    fill: "#334155"
  },

  // 🎤 FOOTER
  {
    id: 15,
    type: "text",
    text: "Enhance your knowledge & connect with professionals!",
    x: 10,
    y: 700,
    fontSize: 16,
    fontFamily: "Great Vibes",
    fill: "bisque"
  },

  // 🎯 FINAL LINE
  {
    id: 16,
    type: "text",
    text: "We look forward to your presence!",
    x: 10,
    y: 750,
    fontSize: 17,
    fontFamily: "Playfair Display",
    fill: "white"
  },

  // BACKGROUND IMAGE
  {
    id: 17,
    type: "background",
    src: seminar1,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  }

];

export default seminarInvitationElements;