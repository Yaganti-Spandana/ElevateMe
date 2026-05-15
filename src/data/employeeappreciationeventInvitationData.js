import employeeappreciationevent_background from "../images/employeeappreciationevent/employeeappreciationevent_background.png";
import employeeappreciationevent1 from "../images/employeeappreciationevent/employeeappreciationevent1.png";
import employeeappreciationevent2 from "../images/employeeappreciationevent/employeeappreciationevent2.png";
import '../invitations/Invitation.css'

const employeeappreciationeventInvitationElements = [

  // 🖼 RIGHT SIDE IMAGES
  {
    id: 14,
    type: "image",
    src: employeeappreciationevent1,
    x: 250,
    y: 90,
    width: 325,
    height: 340,
    shape: "circle"
  },
  {
    id: 25,
    type: "image",
    src: employeeappreciationevent2,
    x: 250,
    y: 430,
    width: 325,
    height: 340,
    shape: "circle"
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: employeeappreciationevent_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // 🎉 TOP ICONS
  {
    id: 1,
    type: "text",
    text: "🏆",
    x: 70,
    y: 50,
    fontSize: 25,
    fontFamily: "Poppins",
    fill: "#163824"
  },
  {
    id: 2,
    type: "text",
    text: "👏",
    x: 480,
    y: 50,
    fontSize: 25,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // ✨ TAGLINE
  {
    id: 3,
    type: "text",
    text: "Recognize • Appreciate • Celebrate",
    x: 35,
    y: 200,
    fontSize: 18,
    fontFamily: "Great Vibes",
    fill: "#163824"
  },

  // 🎯 MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "EMPLOYEE APPRECIATION EVENT",
    x: 100,
    y: 50,
    fontSize: 23,
    fontFamily: "Playfair Display",
    fill: "#163824"
  },

  // ✨ DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 45,
    y: 220,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 📝 DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Join us as we celebrate the dedication,",
    x: 25,
    y: 260,
    fontSize: 10,
    fontFamily: "Poppins",
    fill: "#163824"
  },
  {
    id: 26,
    type: "text",
    text: "passion, and achievements of our team",
    x: 25,
    y: 280,
    fontSize: 10,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 📅 DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 25 August 2026",
    x: 30,
    y: 330,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // ⏰ TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 6:00 PM",
    x: 30,
    y: 360,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 📍 VENUE TITLE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 75,
    y: 450,
    fontSize: 28,
    fontFamily: "Playfair Display",
    fill: "#163824"
  },

  // 📍 VENUE DETAILS
  {
    id: 10,
    type: "text",
    text: "Celebration Hall",
    x: 75,
    y: 510,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#163824"
  },
  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 75,
    y: 550,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#163824"
  },

  // 🏁 FOOTER
  {
    id: 12,
    type: "text",
    text: "Celebrating the People Behind Success",
    x: 20,
    y: 670,
    fontSize: 22,
    fontFamily: "Great Vibes",
    fill: "#163824"
  }

];

export default employeeappreciationeventInvitationElements;