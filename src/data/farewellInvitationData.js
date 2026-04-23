import farewell_background from "../images/farewell/farewell_background.png";
import farewell1 from "../images/farewell/farewell1.png";
import farewell2 from "../images/farewell/farewell2.png";
import farewell3 from "../images/farewell/farewell3.png";
import farewell4 from "../images/farewell/farewell4.png";
import farewell5 from "../images/farewell/farewell5.png";
import farewell6 from "../images/farewell/farewell6.png";

export const farewellslides = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    /* ---------------- 🎓 SLIDE 1 — FAREWELL TITLE ---------------- */
    [
      {
        id: 1,
        type: "background",
        src: farewell_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },
      {
  id: 17,
  type: "image",
  shape: "circle", // 👈 add this
  src: farewell1,
  x: 338,
  y: 130,
  width: 165,
  height: 165   // 👈 must be equal
},
{
  id: 18,
  type: "image",
  shape: "circle", // 👈 add this
  src: farewell6,
  x: 211,
  y: 300,
  width: 162,
  height: 162   // 👈 must be equal
},
{
  id: 19,
  type: "image",
  shape: "circle", // 👈 add this
  src: farewell3,
  x: 430,
  y: 335,
  width: 124,
  height: 120  // 👈 must be equal
},

      {
        id: 2,
        type: "text",
        text: "🎓 Farewell Party 🎓",
        x: 10,
        y: 80,
        fontSize: 26,
        fontFamily: "Poppins",
        fill: "#bb1769"
      },

      {
        id: 3,
        type: "text",
        text: "Goodbye & Best Wishes",
        x: 490,
        y: 280,
        fontSize: 26,
        fontFamily: "Playfair Display",
        fill: "#444"
      },

      {
        id: 4,
        type: "text",
        text: "A celebration of memories,",
        x: 20,
        y: 200,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#211f1f"
      },
      {
        id: 22,
        type: "text",
        text: "friendship & new beginnings",
        x: 20,
        y: 240,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#211f1f"
      },

      {
        id: 5,
        type: "text",
        text: "Join us as we bid farewell",
        x: 520,
        y: 260,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#333"
      },

      {
        id: 6,
        type: "text",
        text: "🎉Music & Dance",
        x: 20,
        y: 330,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#bb1769"
      },

      {
        id: 7,
        type: "text",
        text: "📸 Memories & Photos",
        x: 10,
        y: 370,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#bb1769"
      },

      {
        id: 8,
        type: "text",
        text: "🍽 Dinner & Fun",
        x: 20,
        y: 410,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#bb1769"
      }
    ],

    /* ---------------- 🎓 SLIDE 2 — EVENT DETAILS ---------------- */
    [
      {
        id: 9,
        type: "background",
        src: farewell_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },
      {
  id: 20,
  type: "image",
  shape: "circle", // 👈 add this
  src: farewell4,
  x: 338,
  y: 130,
  width: 165,
  height: 165   // 👈 must be equal
},
{
  id: 21,
  type: "image",
  shape: "circle", // 👈 add this
  src: farewell5,
  x: 211,
  y: 300,
  width: 162,
  height: 162   // 👈 must be equal
},
{
  id: 22,
  type: "image",
  shape: "circle", // 👈 add this
  src: farewell2,
  x: 430,
  y: 335,
  width: 124,
  height: 120  // 👈 must be equal
},

      {
        id: 10,
        type: "text",
        text: "You're Invited 💌",
        x: 20,
        y: 70,
        fontSize: 30,
        fontFamily: "Playfair Display",
        fill: "#bb1769"
      },

      {
        id: 11,
        type: "text",
        text: "📅 Date: 25 March 2026",
        x: 10,
        y: 140,
        fontSize: 22,
        fontFamily: "Poppins",
        fill: "#111827"
      },

      {
        id: 12,
        type: "text",
        text: "⏰ Time: 6:00 PM onwards",
        x: 10,
        y: 190,
        fontSize: 22,
        fontFamily: "Poppins",
        fill: "#111827"
      },

      {
        id: 13,
        type: "text",
        text: "📍 Venue: Grand Hall",
        x: 10,
        y: 240,
        fontSize: 22,
        fontFamily: "Poppins",
        fill: "#111827"
      },

      {
        id: 14,
        type: "text",
        text: "Let's make it unforgettable🎉",
        x: 470,
        y: 300,
        fontSize: 22,
        fontFamily: "Poppins",
        fill: "#520505"
      },

      {
        id: 15,
        type: "text",
        text: "With Love & Best Wishes,",
        x: 580,
        y: 380,
        fontSize: 17,
        fontFamily: "Poppins",
        fill: "#374151"
      },

      {
        id: 16,
        type: "text",
        text: "Class of 2026 🎓",
        x: 620,
        y: 420,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#000"
      }
    ]

  ]
};