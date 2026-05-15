import leadershipmeetups_background from "../images/leadershipmeetups/leadershipmeetups_background.png";
import leadershipmeetups1 from "../images/leadershipmeetups/leadershipmeetups1.png";
import leadershipmeetups2 from "../images/leadershipmeetups/leadershipmeetups2.png";
import '../invitations/Invitation.css'

const leadershipmeetupsInvitationElements = {
  size: {
    width: 800,
    height: 540
  },

  elements: [

    // 🎨 BACKGROUND
    {
      id: 1,
      type: "background",
      src: leadershipmeetups_background,
      x: 0,
      y: 0,
      width: 800,
      height: 540
    },

    // 🧊 GLASS OVERLAY
    {
      id: 2,
      type: "rect",
      x: 380,
      y: 50,
      width: 300,
      height: 420,
      fill: "rgba(255,255,255,0.82)",
      cornerRadius: 15
    },

    // LEADERSHIP IMAGES
    {
      id: 20,
      type: "image",
      src: leadershipmeetups1,
      x: 50,
      y: 60,
      width: 300,
      height: 300,
      shape: "circle"
    },
    {
      id: 25,
      type: "image",
      src: leadershipmeetups2,
      x: 460,
      y: 190,
      width: 300,
      height: 300,
      shape: "circle"
    },

    // TITLE
    {
      id: 4,
      type: "text",
      text: "Leadership Meetups",
      x: 300,
      y: 50,
      fontSize: 28,
      fontFamily: "Playfair Display",
      fill: "#794507"
    },

    // SUBTITLE
    {
      id: 5,
      type: "text",
      text: "You're Invited",
      x: 485,
      y: 90,
      fontSize: 24,
      fontFamily: "Great Vibes",
      fill: "#794507"
    },

    // INVITATION TEXT
    {
      id: 6,
      type: "text",
      text: "Join visionary leaders for an evening of",
      x: 410,
      y: 120,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#794507"
    },

    {
      id: 7,
      type: "text",
      text: "insights, collaboration, and inspiration",
      x: 420,
      y: 140,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#794507"
    },

    // EVENT NAME
    {
      id: 8,
      type: "text",
      text: "Leadership Connect Summit 2026",
      x: 400,
      y: 160,
      fontSize: 25,
      fontFamily: "Crimson Text",
      fill: "#794507"
    },

    // EVENT DETAILS
    {
      id: 9,
      type: "text",
      text: "📅 Friday, 20 March 2026",
      x: 140,
      y: 360,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#794507"
    },

    {
      id: 10,
      type: "text",
      text: "⏰ 6:30 PM onwards",
      x: 160,
      y: 385,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#794507"
    },

    {
      id: 11,
      type: "text",
      text: "📍 Grand Convention Hall, Vijayawada",
      x: 105,
      y: 410,
      fontSize: 15,
      fontFamily: "Poppins",
      fill: "#794507"
    },

    // TAGLINE
    {
      id: 12,
      type: "text",
      text: "Lead • Inspire • Transform",
      x: 170,
      y: 435,
      fontSize: 20,
      fontFamily: "Dancing Script",
      fill: "#794507"
    },

    // RSVP
    {
      id: 13,
      type: "text",
      text: "📞 RSVP: 98765XXXXX",
      x: 170,
      y: 475,
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#794507"
    }

  ]
};

export default leadershipmeetupsInvitationElements;