import successcelebration_background from "../images/successcelebration/successcelebration_background.png";
import successcelebration1 from "../images/successcelebration/successcelebration1.png";
import successcelebration2 from "../images/successcelebration/successcelebration2.png";

export const successcelebrationslides = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    /* ---------------- 🎉 SLIDE 1 — SUCCESS CELEBRATION INTRO ---------------- */
    [
      {
        id: 1,
        type: "background",
        src: successcelebration_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      // CELEBRATION IMAGE
      {
        id: 2,
        type: "image",
        src: successcelebration1,
        x: 420,
        y: 230,
        width: 245,
        height: 245,
        shape: "circle",
      },

      // TITLE
      {
        id: 4,
        type: "text",
        text: "Success Celebration",
        x: 250,
        y: 60,
        fontSize: 34,
        fontFamily: "Playfair Display",
        fill: "#b0dfb0"
      },

      // SUBTITLE
      {
        id: 5,
        type: "text",
        text: "Achievement • Growth • Victory",
        x: 100,
        y: 110,
        fontSize: 20,
        fontFamily: "Great Vibes",
        fill: "#b0dfb0"
      },

      // INTRO TEXT
      {
        id: 6,
        type: "text",
        text: "Join us as we celebrate our",
        x: 100,
        y: 150,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      },

      {
        id: 7,
        type: "text",
        text: "milestones, teamwork & achievements",
        x: 100,
        y: 180,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      },

      // EVENT NAME
      {
        id: 8,
        type: "text",
        text: "Annual Success Celebration 2026",
        x: 100,
        y: 220,
        fontSize: 22,
        fontFamily: "Cinzel",
        fill: "#f8f9f7"
      },

      // HIGHLIGHTS
      {
        id: 9,
        type: "text",
        text: "🏆 Team Achievements",
        x: 100,
        y: 320,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      },

      {
        id: 10,
        type: "text",
        text: "🎯 Milestone Recognition",
        x: 100,
        y: 350,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      },

      {
        id: 11,
        type: "text",
        text: "🎉 Future Success Journey",
        x: 100,
        y: 380,
        fontSize: 18,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      },

      // FOOTER
      {
        id: 12,
        type: "text",
        text: "Celebrating Success Together",
        x: 100,
        y: 420,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#b0dfb0"
      }
    ],

    /* ---------------- 📅 SLIDE 2 — EVENT DETAILS ---------------- */
    [
      {
        id: 13,
        type: "background",
        src: successcelebration_background,
        x: 0,
        y: 0,
        width: 800,
        height: 540
      },

      {
        id: 25,
        type: "image",
        src: successcelebration2,
        x: 100,
        y: 70,
        width: 245,
        height: 245,
        shape: "circle",
      },

      // INVITATION
      {
        id: 16,
        type: "text",
        text: "You're Invited 🎉",
        x: 400,
        y: 80,
        fontSize: 32,
        fontFamily: "Playfair Display",
        fill: "#b0dfb0"
      },

      // DATE
      {
        id: 17,
        type: "text",
        text: "📅 Date: 15 June 2026",
        x: 400,
        y: 140,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      },

      // TIME
      {
        id: 18,
        type: "text",
        text: "⏰ Time: 6:00 PM",
        x: 400,
        y: 180,
        fontSize: 20,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      },

      // VENUE
      {
        id: 19,
        type: "text",
        text: "📍 Venue: Grand Celebration Hall, Vijayawada",
        x: 350,
        y: 220,
        fontSize: 15,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      },

      // MESSAGE
      {
        id: 20,
        type: "text",
        text: "Let's honor achievements, teamwork,",
        x: 370,
        y: 270,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      },

      {
        id: 30,
        type: "text",
        text: "and the journey toward excellence",
        x: 380,
        y: 300,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      },

      // HOST
      {
        id: 21,
        type: "text",
        text: "Hosted by",
        x: 350,
        y: 380,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      },

      {
        id: 22,
        type: "text",
        text: "Management Team",
        x: 335,
        y: 400,
        fontSize: 22,
        fontFamily: "Dancing Script",
        fill: "#b0dfb0"
      },

      // RSVP
      {
        id: 23,
        type: "text",
        text: "📞 RSVP: 98765XXXXX",
        x: 310,
        y: 440,
        fontSize: 16,
        fontFamily: "Poppins",
        fill: "#b0dfb0"
      }
    ]

  ]
};