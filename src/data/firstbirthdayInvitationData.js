import firstbirthday_background from "../images/firstbirthday/firstbirthday_background.png";
import firstbirthday1 from "../images/firstbirthday/firstbirthday1.png";
import firstbirthday2 from "../images/firstbirthday/firstbirthday2.png";

export const firstbirthdayslides = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    /* ---------------- 🎂 SLIDE 1 — INTRO ---------------- */
    [
      {
        id: 1,
        type: "background",
        src: firstbirthday_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // 👶 BABY PHOTOS
      {
        id: 2,
        type: "image",
        src: firstbirthday1,
        x: 25,
        y: 320,
        width: 747,
        height: 190
      },

      // 🎂 TITLE
      {
        id: 4,
        type: "text",
        text: "🎉 My First Birthday 🎉",
        x: 200,
        y: 20,
        fontSize: 36,
        fontFamily: "Playfair Display",
        fill: "#faf4f5"
      },

      // ✨ BABY NAME
      {
        id: 5,
        type: "text",
        text: "Baby Aarav Turns ONE!",
        x: 50,
        y: 130,
        fontSize: 26,
        fontFamily: "Great Vibes",
        fill: "#9333ea"
      },

      // 💖 MESSAGE
      {
        id: 6,
        type: "text",
        text: "A year full of smiles, giggles & love 💕",
        x: 30,
        y: 180,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#374151"
      },
      {
        id: 7,
        type: "text",
        text: "Join us to celebrate this special milestone",
        x: 20,
        y: 220,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#374151"
      },

      // 🎈 HIGHLIGHTS
      {
        id: 8,
        type: "text",
        text: "🎂 Cake Cutting",
        x: 470,
        y: 130,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#ef4444"
      },
      {
        id: 9,
        type: "text",
        text: "🎈 Balloons & Decorations",
        x: 440,
        y: 160,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#ef4444"
      },
      {
        id: 10,
        type: "text",
        text: "🎁 Fun Games & Surprises",
        x: 440,
        y: 190,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#ef4444"
      },

      // ✨ FOOTER
      {
        id: 11,
        type: "text",
        text: "We can't wait to celebrate with you 🥳",
        x: 410,
        y: 220,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#9333ea"
      }
    ],

    /* ---------------- 🎂 SLIDE 2 — DETAILS ---------------- */
    [
      {
        id: 13,
        type: "background",
        src: firstbirthday_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // 👶 PHOTOS
      {
        id: 14,
        type: "image",
        src: firstbirthday2,
        x: 25,
        y: 320,
        width: 747,
        height: 190
      },

      // 💌 INVITE
      {
        id: 16,
        type: "text",
        text: "You're Invited 💌",
        x: 70,
        y: 100,
        fontSize: 32,
        fontFamily: "Playfair Display",
        fill: "#ff4d6d"
      },

      // 📅 DATE
      {
        id: 17,
        type: "text",
        text: "📅 Date: 15 August 2026",
        x: 70,
        y: 150,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#374151"
      },

      // ⏰ TIME
      {
        id: 18,
        type: "text",
        text: "⏰ Time: 11:00 AM onwards",
        x: 60,
        y: 180,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#374151"
      },

      // 📍 VENUE
      {
        id: 19,
        type: "text",
        text: "📍 Venue: Rainbow Banquet Hall, Vijayawada",
        x: 30,
        y: 220,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#374151"
      },

      // 🎉 NOTE
      {
        id: 20,
        type: "text",
        text: "Join us for laughter, joy & celebration 🎈",
        x:60,
        y: 260,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#9333ea"
      },

      // 👨‍👩‍👦 HOST
      {
        id: 21,
        type: "text",
        text: "Hosted by",
        x: 580,
        y: 200,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#374151"
      },
      {
        id: 22,
        type: "text",
        text: "Aarav's Family 👨‍👩‍👦",
        x: 540,
        y: 220,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#ff4d6d"
      },

      // 📞 RSVP
      {
        id: 23,
        type: "text",
        text: "📞 RSVP: 98765XXXXX",
        x: 520,
        y: 260,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#111827"
      }
    ]

  ]
};