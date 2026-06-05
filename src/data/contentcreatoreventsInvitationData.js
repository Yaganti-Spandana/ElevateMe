import contentcreatorevents_background from "../images/contentcreatorevents/contentcreatorevents_background.png";
import contentcreatorevents1 from "../images/contentcreatorevents/contentcreatorevents1.png";
import '../invitations/Invitation.css'

const contentcreatoreventsInvitationElements = [

  // 📸 CONTENT CREATOR IMAGE
  {
    id: 14,
    type: "image",
    src: contentcreatorevents1,
    x: 100,
    y: 200,
    width: 400,
    height: 460,
  },

  // 🌌 BACKGROUND
  {
    id: 13,
    type: "background",
    src: contentcreatorevents_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  },

  // TAGLINE
  {
    id: 3,
    type: "text",
    text: "Create • Inspire • Influence",
    x: 220,
    y: 130,
    fontSize: 17,
    fontFamily: "Great Vibes",
    fill: "#8f5a10"
  },

  // MAIN TITLE
  {
    id: 4,
    type: "text",
    text: "📸CONTENT CREATOR MEETUP🎥",
    x: 100,
    y: 20,
    fontSize: 24,
    fontFamily: "Playfair Display",
    fill: "#8f5a10"
  },

  // DIVIDER
  {
    id: 5,
    type: "text",
    text: "──────── ✦ ────────",
    x: 210,
    y: 150,
    fontSize: 14,
    fontFamily: "Poppins",
    fill: "#8f5a10"
  },

  // DESCRIPTION
  {
    id: 6,
    type: "text",
    text: "Connect with creators, share ideas, and grow your digital journey",
    x: 100,
    y: 190,
    fontSize: 12,
    fontFamily: "Poppins",
    fill: "#8f5a10"
  },

  // DATE
  {
    id: 7,
    type: "text",
    text: "📅 Date: 28 February 2026",
    x: 80,
    y: 220,
    fontSize: 13,
    fontFamily: "Poppins",
    fill: "#8f5a10"
  },

  // TIME
  {
    id: 8,
    type: "text",
    text: "⏰ Time: 3:00 PM",
    x: 100,
    y: 240,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#8f5a10"
  },

  // VENUE
  {
    id: 9,
    type: "text",
    text: "📍 Venue:",
    x: 420,
    y: 220,
    fontSize: 15,
    fontFamily: "Playfair Display",
    fill: "#8f5a10"
  },

  {
    id: 10,
    type: "text",
    text: "Creator Studio",
    x: 415,
    y: 240,
    fontSize: 14,
    fontFamily: "Poppins",
    fill: "#8f5a10"
  },

  {
    id: 11,
    type: "text",
    text: "Vijayawada",
    x: 415,
    y: 260,
    fontSize: 15,
    fontFamily: "Poppins",
    fill: "#8f5a10"
  },

  // FOOTER
  {
    id: 12,
    type: "text",
    text: "Create • Collaborate • Shine",
    x: 200,
    y: 650,
    fontSize: 22,
    fontFamily: "Great Vibes",
    fill: "#8f5a10"
  }

];

export default contentcreatoreventsInvitationElements;