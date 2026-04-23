import babyannounement_background from "../images/baby_announcement/babyannounement_background.png";
import babyannouncement_logo1 from "../images/baby_announcement/babyannouncement_logo1.png";
import babyannouncement_logo2 from "../images/baby_announcement/babyannouncement_logo2.png";
import babyannouncement_logo3 from "../images/baby_announcement/babyannouncement_logo3.png";
import '../invitations/Invitation.css'

const babyannouncementInvitationElements = [

  // 🧸 DECOR IMAGES
  {
    id: 20,
    type: "image",
    src: babyannouncement_logo1,
    x: 10,
    y: 10,
    width: 160,
    height: 230
  },
  {
    id: 21,
    type: "image",
    src: babyannouncement_logo2,
    x: 430,
    y: 310,
    width: 155,
    height: 230
  },
  {
    id: 22,
    type: "image",
    src: babyannouncement_logo3,
    x: 10,
    y: 605,
    width: 160,
    height: 230
  },

  // 👶 TOP ICONS
  {
    id: 1,
    type: "text",
    text: "🍼",
    x: 250,
    y: 30,
    fontSize: 25,
    fontFamily: "Poppins",
    fill: "#f472b6"
  },
  {
    id: 2,
    type: "text",
    text: "🍼",
    x: 480,
    y: 30,
    fontSize: 25,
    fontFamily: "Poppins",
    fill: "#f472b6"
  },

  // ✨ DIVIDER
  {
    id: 3,
    type: "text",
    text: "✦ ✦ ✦",
    x: 350,
    y: 30,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#f9a8d4"
  },

  // 👶 TITLE
  {
    id: 4,
    type: "text",
    text: "Baby Announcement",
    x: 230,
    y: 90,
    fontSize: 32,
    fontFamily: "Playfair Display",
    fill: "#be185d"
  },

  // 💖 SUBTITLE
  {
    id: 5,
    type: "text",
    text: "We are blessed with a little bundle of joy!",
    x: 250,
    y: 170,
    fontSize: 22,
    fontFamily: "Great Vibes",
    fill: "#ec4899"
  },

  // ✨ LINE
  {
    id: 6,
    type: "text",
    text: "──────── ✦ ────────",
    x: 260,
    y: 190,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#f472b6"
  },

  // 👶 BABY NAME
  {
    id: 7,
    type: "text",
    text: "Baby Name",
    x: 110,
    y: 360,
    fontSize: 28,
    fontFamily: "Playfair Display",
    fill: "#9d174d"
  },

  // 📅 DETAILS
  {
    id: 8,
    type: "text",
    text: "Born on: 10th April 2026",
    x: 80,
    y: 420,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#374151"
  },

  {
    id: 9,
    type: "text",
    text: "Weight: 3.2 kg",
    x: 110,
    y: 460,
    fontSize: 18,
    fontFamily: "Poppins",
    fill: "#374151"
  },

  // 👨‍👩‍👧 PARENTS
  {
    id: 10,
    type: "text",
    text: "Proud Parents",
    x: 310,
    y: 650,
    fontSize: 22,
    fontFamily: "Playfair Display",
    fill: "#be185d"
  },

  {
    id: 11,
    type: "text",
    text: "Mr. & Mrs. Sharma",
    x: 290,
    y: 680,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#374151"
  },

  // 💖 FOOTER
  {
    id: 12,
    type: "text",
    text: "Welcome our little angel into the world! 👼",
    x: 250,
    y: 750,
    fontSize: 22,
    fontFamily: "Great Vibes",
    fill: "#be185d"
  },

  {
    id: 13,
    type: "text",
    text: "With love & joy 💕",
    x: 320,
    y: 780,
    fontSize: 20,
    fontFamily: "Poppins",
    fill: "#9d174d"
  },

  // 🌸 BACKGROUND
  {
    id: 17,
    type: "background",
    src: babyannounement_background,
    x: 0,
    y: 0,
    width: 595,
    height: 842
  }

];

export default babyannouncementInvitationElements;