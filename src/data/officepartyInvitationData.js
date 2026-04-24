import officeparty_background1 from "../images/officeparty/officeparty_background1.png";
import officeparty_background2 from "../images/officeparty/officeparty_background2.png";
import officeparty1 from "../images/officeparty/officeparty1.png";
import officeparty2 from "../images/officeparty/officeparty2.png";
import officeparty3 from "../images/officeparty/officeparty3.png";
import officeparty4 from "../images/officeparty/officeparty4.png";

export const officepartyslides = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    /* ---------------- 🎉 SLIDE 1 — OFFICE PARTY INTRO ---------------- */
    [
      {
        id: 1,
        type: "background",
        src: officeparty_background1,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // 🖼 TEAM IMAGES
      {
        id: 17,
        type: "image",
        src: officeparty1,
        x: 20,
        y: 100,
        width: 170,
        height: 195
      },
      {
        id: 18,
        type: "image",
        src: officeparty2,
        x: 20,
        y: 350,
        width: 170,
        height: 160
      },

      // 🎉 TITLE
      {
        id: 2,
        type: "text",
        text: "🎉 Office Party 🎉",
        x: 250,
        y: 16,
        fontSize: 32,
        fontFamily: "Poppins",
        fill: "#f6f8e9"
      },

      // 🧑‍💼 SUBTITLE
      {
        id: 3,
        type: "text",
        text: "Celebrating Team Success",
        x: 380,
        y: 120,
        fontSize: 26,
        fontFamily: "Playfair Display",
        fill: "#f6f8e9"
      },

      // ✨ DESCRIPTION
      {
        id: 4,
        type: "text",
        text: "An evening of fun, bonding & celebration",
        x: 345,
        y: 180,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#f6f8e9"
      },

      {
        id: 5,
        type: "text",
        text: "Let's relax, celebrate achievements & enjoy together!",
        x: 290,
        y: 210,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#f6f8e9"
      },

      // 🎯 ACTIVITIES
      {
        id: 6,
        type: "text",
        text: "🎶 Music & DJ",
        x: 420,
        y: 370,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#dfc9c2"
      },
      {
        id: 7,
        type: "text",
        text: "🎤 Games & Fun Activities",
        x: 370,
        y: 410,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#dfc9c2"
      },
      {
        id: 8,
        type: "text",
        text: "🍽 Dinner & Networking",
        x: 390,
        y: 450,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#dfc9c2"
      }
    ],

    /* ---------------- 🎉 SLIDE 2 — EVENT DETAILS ---------------- */
    [
      {
        id: 9,
        type: "background",
        src: officeparty_background2,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // 🖼 TEAM MOMENTS
      {
        id: 20,
        type: "image",
        src: officeparty3,
        x: 20,
        y: 30,
        width: 230,
        height: 210
      },
      {
        id: 21,
        type: "image",
        src: officeparty4,
        x: 30,
        y: 300,
        width: 230,
        height: 210
      },

      // 💌 INVITE TEXT
      {
        id: 10,
        type: "text",
        text: "You're Invited 💌",
        x: 420,
        y: 50,
        fontSize: 30,
        fontFamily: "Playfair Display",
        fill: "#f6f8e9"
      },

      // 📅 DETAILS
      {
        id: 11,
        type: "text",
        text: "📅 Date: 25 March 2026",
        x: 390,
        y: 100,
        fontSize: 22,
        fontFamily: "Poppins",
        fill: "#dfc9c2"
      },
      {
        id: 12,
        type: "text",
        text: "⏰ Time: 6:30 PM onwards",
        x: 370,
        y: 140,
        fontSize: 22,
        fontFamily: "Poppins",
        fill: "#dfc9c2"
      },
      {
        id: 13,
        type: "text",
        text: "📍 Venue: Grand Ballroom, City Hotel",
        x: 320,
        y: 180,
        fontSize: 22,
        fontFamily: "Poppins",
        fill: "#dfc9c2"
      },

      // 🎯 CTA
      {
        id: 14,
        type: "text",
        text: "Let’s celebrate together 🎉",
        x: 410,
        y: 370,
        fontSize: 22,
        fontFamily: "Poppins",
        fill: "#f6f8e9"
      },

      // 👔 HOST LINE
      {
        id: 15,
        type: "text",
        text: "Hosted by",
        x: 580,
        y: 420,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#dfc9c2"
      },
      {
        id: 16,
        type: "text",
        text: "Team ElevateMe 💼",
        x: 560,
        y: 440,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#dfc9c2"
      }
    ]

  ]
};