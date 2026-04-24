import ugadi_background from "../images/ugadi/ugadi_background.png";
import ugadi1 from "../images/ugadi/ugadi1.png";
import ugadi2 from "../images/ugadi/ugadi2.png";
import ugadi3 from "../images/ugadi/ugadi3.png";
import ugadi4 from "../images/ugadi/ugadi4.png";

export const ugadislides = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    /* ---------------- 🌿 SLIDE 1 — UGADI INTRO ---------------- */
    [
      {
        id: 1,
        type: "background",
        src: ugadi_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // 🌸 TRADITIONAL IMAGES
      {
        id: 2,
        type: "image",
        src: ugadi1,
        shape: "circle",
        x: 155,
        y: 55,
        width: 160,
        height: 160
      },
      {
        id: 3,
        type: "image",
        src: ugadi2,
        shape: "circle",
        x: 153,
        y: 253,
        width: 160,
        height: 160
      },

      // 🌿 TITLE
      {
        id: 4,
        type: "text",
        text: "🌿 Happy Ugadi 🌿",
        x: 300,
        y: 15,
        fontSize: 36,
        fontFamily: "Playfair Display",
        fill: "#14532d"
      },

      // ✨ SUBTITLE
      {
        id: 5,
        type: "text",
        text: "New Beginnings • New Hopes • New Joy",
        x: 330,
        y: 110,
        fontSize: 20,
        fontFamily: "Great Vibes",
        fill: "#166534"
      },

      // 🌸 INVITE TEXT
      {
        id: 6,
        type: "text",
        text: "Join us in celebrating the Telugu New Year",
        x: 320,
        y: 150,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#064e3b"
      },
      {
        id: 7,
        type: "text",
        text: "with joy, tradition & togetherness",
        x: 340,
        y: 180,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#064e3b"
      },

      // 🌼 FESTIVAL NAME
      {
        id: 8,
        type: "text",
        text: "Ugadi Celebrations 2026🌼",
        x: 320,
        y: 220,
        fontSize: 24,
        fontFamily: "Cinzel",
        fill: "#78350f"
      },

      // 🎉 HIGHLIGHTS
      {
        id: 9,
        type: "text",
        text: "🍛 Ugadi Pachadi",
        x: 380,
        y: 320,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#7c2d12"
      },
      {
        id: 10,
        type: "text",
        text: "🎶 Cultural Programs",
        x: 380,
        y: 350,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#7c2d12"
      },
      {
        id: 11,
        type: "text",
        text: "🌸 Rangoli & Traditions",
        x: 380,
        y: 380,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#7c2d12"
      },

      // ✨ FOOTER
      {
        id: 12,
        type: "text",
        text: "Wishing You Prosperity & Happiness 🌿",
        x: 340,
        y: 420,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#14532d"
      }
    ],

    /* ---------------- 🌿 SLIDE 2 — EVENT DETAILS ---------------- */
    [
      {
        id: 13,
        type: "background",
        src: ugadi_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // 🌸 SIDE IMAGES
      {
        id: 14,
        type: "image",
        src: ugadi3,
        shape: "circle",
        x: 155,
        y: 55,
        width: 160,
        height: 160
      },
      {
        id: 15,
        type: "image",
        src: ugadi4,
        shape: "circle",
        x: 153,
        y: 253,
        width: 160,
        height: 160
      },

      // 💌 INVITE
      {
        id: 16,
        type: "text",
        text: "You're Invited💌",
        x: 370,
        y: 80,
        fontSize: 32,
        fontFamily: "Playfair Display",
        fill: "#14532d"
      },

      // 📅 DATE
      {
        id: 17,
        type: "text",
        text: "📅 Date: 9 April 2026",
        x: 370,
        y: 140,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#064e3b"
      },

      // ⏰ TIME
      {
        id: 18,
        type: "text",
        text: "⏰ Time: 10:00 AM onwards",
        x: 340,
        y: 180,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#064e3b"
      },

      // 📍 VENUE
      {
        id: 19,
        type: "text",
        text: "📍 Venue: Community Hall, Vijayawada",
        x: 350,
        y: 220,
        fontSize: 15,
        fontFamily: "Poppins",
        fill: "#064e3b"
      },

      // 🙏 MESSAGE
      {
        id: 20,
        type: "text",
        text: "Let us welcome the New Year with",
        x: 350,
        y: 330,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#7c2d12"
      },
      {
        id: 30,
        type: "text",
        text: "positivity & blessings 🙏",
        x: 390,
        y: 350,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#7c2d12"
      },

      // 👨‍👩‍👧 HOST
      {
        id: 21,
        type: "text",
        text: "Hosted by",
        x: 580,
        y: 380,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#064e3b"
      },
      {
        id: 22,
        type: "text",
        text: "Family & Friends 🌿",
        x: 540,
        y: 400,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#14532d"
      },

      // 📞 RSVP
      {
        id: 23,
        type: "text",
        text: "📞 RSVP: 98765XXXXX",
        x: 510,
        y: 440,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#111827"
      }
    ]

  ]
};