import skilldevelopmentsessions_background from "../images/skilldevelopmentsessions/skilldevelopmentsessions_background.png";
import skilldevelopmentsessions1 from "../images/skilldevelopmentsessions/skilldevelopmentsessions1.png";
import skilldevelopmentsessions2 from "../images/skilldevelopmentsessions/skilldevelopmentsessions2.png";

export const skilldevelopmentsessionsslides = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    /* ---------------- 📚 SLIDE 1 — SKILL DEVELOPMENT INTRO ---------------- */
    [
      {
        id: 1,
        type: "background",
        src: skilldevelopmentsessions_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // Training Image
      {
        id: 2,
        type: "image",
        src: skilldevelopmentsessions1,
        x: 480,
        y: 20,
        width: 300,
        height: 300,
        shape: "circle",
      },

      // Star Image
      {
        id: 25,
        type: "image",
        src: skilldevelopmentsessions2,
        x: 30,
        y: 200,
        width: 300,
        height: 300,
        shape: "circle",
      },

      // Title
      {
        id: 4,
        type: "text",
        text: "Skill Development Sessions",
        x: 70,
        y: 60,
        fontSize: 32,
        fontFamily: "Playfair Display",
        fill: "#0c2157"
      },

      // Subtitle
      {
        id: 5,
        type: "text",
        text: "Learn • Practice • Achieve",
        x: 100,
        y: 110,
        fontSize: 20,
        fontFamily: "Great Vibes",
        fill: "#0c2157"
      },

      // Intro
      {
        id: 6,
        type: "text",
        text: "Enhance your professional abilities",
        x: 90,
        y: 150,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#0c2157"
      },

      {
        id: 7,
        type: "text",
        text: "through hands-on learning sessions",
        x: 90,
        y: 180,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#0c2157"
      },

      // Program Name
      {
        id: 8,
        type: "text",
        text: "Professional Growth Program 2026",
        x: 70,
        y: 220,
        fontSize: 20,
        fontFamily: "Cinzel",
        fill: "#f8f9f7"
      },

      // Highlights
      {
        id: 9,
        type: "text",
        text: "🎯 Leadership Skills",
        x: 340,
        y: 320,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#0c2157"
      },

      {
        id: 10,
        type: "text",
        text: "💡 Problem Solving",
        x: 340,
        y: 350,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#0c2157"
      },

      {
        id: 11,
        type: "text",
        text: "🤝 Communication Excellence",
        x: 340,
        y: 380,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#0c2157"
      },

      // Footer
      {
        id: 12,
        type: "text",
        text: "Building Skills for Future Success",
        x: 340,
        y: 430,
        fontSize: 20,
        fontFamily: "Dancing Script",
        fill: "#0c2157"
      }
    ],

    /* ---------------- 📅 SLIDE 2 — SESSION DETAILS ---------------- */
    [
      {
        id: 13,
        type: "background",
        src: skilldevelopmentsessions_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // Invitation
      {
        id: 16,
        type: "text",
        text: "You're Invited 📚",
        x: 300,
        y: 80,
        fontSize: 32,
        fontFamily: "Playfair Display",
        fill: "#0c2157"
      },

      // Date
      {
        id: 17,
        type: "text",
        text: "📅 Date: 15 June 2026",
        x: 300,
        y: 140,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#0c2157"
      },

      // Time
      {
        id: 18,
        type: "text",
        text: "⏰ Time: 10:00 AM",
        x: 300,
        y: 180,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#0c2157"
      },

      // Venue
      {
        id: 19,
        type: "text",
        text: "📍 Venue: Training Center, Vijayawada",
        x: 250,
        y: 220,
        fontSize: 15,
        fontFamily: "Poppins",
        fill: "#0c2157"
      },

      // Message
      {
        id: 20,
        type: "text",
        text: "Learn practical strategies, build confidence,",
        x: 240,
        y: 270,
        fontSize: 15,
        fontFamily: "Poppins",
        fill: "#0c2157"
      },

      {
        id: 30,
        type: "text",
        text: "and unlock your full potential",
        x: 290,
        y: 300,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#0c2157"
      },

      // Host
      {
        id: 21,
        type: "text",
        text: "Hosted by",
        x: 220,
        y: 380,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#0c2157"
      },

      {
        id: 22,
        type: "text",
        text: "Learning & Development Team",
        x: 240,
        y: 410,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#0c2157"
      },

      // Contact
      {
        id: 23,
        type: "text",
        text: "📞 Contact: 98765XXXXX",
        x: 270,
        y: 450,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#0c2157"
      }
    ]

  ]
};