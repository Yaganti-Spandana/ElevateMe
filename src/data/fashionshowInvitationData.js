import fashionshow_background from "../images/fashionshow/fashionshow_background.png";
import fashionshow1 from "../images/fashionshow/fashionshow1.png";
import fashionshow2 from "../images/fashionshow/fashionshow2.png";
import fashionshow3 from "../images/fashionshow/fashionshow3.png";
import fashionshow4 from "../images/fashionshow/fashionshow4.png";

export const fashionshowslides = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    /* ---------------- 👠 SLIDE 1 — SHOW INTRO ---------------- */
    [
      {
        id: 1,
        type: "background",
        src: fashionshow_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // 👗 MODELS (LEFT)
      {
        id: 2,
        type: "image",
        src: fashionshow1,
        x: 20,
        y: 100,
        width: 230,
        height: 330
      },
      {
        id: 3,
        type: "image",
        src: fashionshow2,
        x: 550,
        y: 100,
        width: 230,
        height: 330
      },

      // ✨ TITLE
      {
        id: 4,
        type: "text",
        text: "✨ GRAND FASHION SHOW ✨",
        x: 170,
        y: 40,
        fontSize: 34,
        fontFamily: "Playfair Display",
        fill: "#f2f5f2"
      },

      // 👠 TAGLINE
      {
        id: 5,
        type: "text",
        text: "Where Style Meets Elegance",
        x: 295,
        y: 120,
        fontSize: 22,
        fontFamily: "Great Vibes",
        fill: "#06270d"
      },

      // 💎 DESCRIPTION
      {
        id: 6,
        type: "text",
        text: "Experience a night of glamour,",
        x: 290,
        y: 150,
        fontSize: 15,
        fontFamily: "Poppins",
        fill: "#06270d"
      },
      {
        id: 26,
        type: "text",
        text: "trends & creativity",
        x: 330,
        y: 180,
        fontSize: 15,
        fontFamily: "Poppins",
        fill: "#06270d"
      },

      {
        id: 7,
        type: "text",
        text: "Featuring top designers & stunning runway looks",
        x: 285,
        y: 240,
        fontSize: 10,
        fontFamily: "Poppins",
        fill: "#06270d"
      },

      // 💃 HIGHLIGHTS
      {
        id: 8,
        type: "text",
        text: "👗 Designer Collections",
        x: 300,
        y: 270,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#4f0b31"
      },
      {
        id: 9,
        type: "text",
        text: "🎤 Celebrity Guests",
        x: 300,
        y: 300,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#4f0b31"
      },
      {
        id: 10,
        type: "text",
        text: "🎶 Live Music & DJ",
        x: 300,
        y: 330,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#4f0b31"
      },

      // ✨ FOOTER
      {
        id: 11,
        type: "text",
        text: "Dress to Impress 💎",
        x: 340,
        y: 380,
        fontSize: 22,
        fontFamily: "Great Vibes",
        fill: "#4f0b31"
      }
    ],

    /* ---------------- 👠 SLIDE 2 — EVENT DETAILS ---------------- */
    [
      {
        id: 12,
        type: "background",
        src: fashionshow_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // 👗 MODELS RIGHT SIDE
      {
        id: 13,
        type: "image",
        src: fashionshow3,
        x: 20,
        y: 100,
        width: 230,
        height: 330
      },
      {
        id: 14,
        type: "image",
        src: fashionshow4,
        x: 550,
        y: 100,
        width: 230,
        height: 330
      },

      // 💌 INVITE
      {
        id: 15,
        type: "text",
        text: "You're Invited💌",
        x: 300,
        y: 130,
        fontSize: 30,
        fontFamily: "Playfair Display",
        fill: "#4f0b31"
      },

      // 📅 DETAILS
      {
        id: 16,
        type: "text",
        text: "📅 Date: 12 August 2026",
        x: 300,
        y: 170,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#06270d"
      },
      {
        id: 17,
        type: "text",
        text: "⏰ Time: 7:00 PM onwards",
        x: 300,
        y: 200,
        fontSize: 17,
        fontFamily: "Poppins",
        fill: "#06270d"
      },
      {
        id: 18,
        type: "text",
        text: "📍 Venue: Grand Ballroom, City Center",
        x: 285,
        y: 230,
        fontSize: 12,
        fontFamily: "Poppins",
        fill: "#06270d"
      },

      // 🎟 ENTRY
      {
        id: 19,
        type: "text",
        text: "🎟 Entry: Free for registered guests",
        x: 290,
        y: 270,
        fontSize: 13,
        fontFamily: "Poppins",
        fill: "#4f0b31"
      },

      // 🔗 REGISTRATION
      {
        id: 20,
        type: "text",
        text: "🔗 Register Now: www.fashionshow.com",
        x: 280,
        y: 290,
        fontSize: 12,
        fontFamily: "Poppins",
        fill: "#4f0b31"
      },

      // 👑 HOST
      {
        id: 21,
        type: "text",
        text: "Hosted by",
        x: 400,
        y: 330,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#06270d"
      },
      {
        id: 22,
        type: "text",
        text: "EliteMe Fashion Club👑",
        x: 350,
        y: 360,
        fontSize: 20,
        fontFamily: "Dancing Script",
        fill: "#4f0b31"
      },

      // ✨ CLOSING
      {
        id: 23,
        type: "text",
        text: "Unleash Your Style ✨",
        x: 320,
        y: 410,
        fontSize: 22,
        fontFamily: "Great Vibes",
        fill: "#4f0b31"
      }
    ]

  ]
};