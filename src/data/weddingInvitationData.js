import wedding_logo from "../images/wedding_logo.png";
import '../invitations/Invitation.css'

const weddingInvitationElements = [

  {
    id: 1,
    type: "text",
    text: "✨ Wedding Invitation ✨",
    x: 90,
    y: 80,
    fontSize: 38,
    fontFamily: 'Lato',
    fill: "#1A2A44"
  },

  {
    id: 2,
    type: "text",
    text: "With the blessings of Lord Venkateswara",
    x: 95,
    y: 140,
    fontSize: 22,
    fontFamily: 'Open Sans',
    fill: "#6D1B1B"
  },

  {
    id: 3,
    type: "text",
    text: "Together with their families",
    x: 20,
    y: 200,
    fontSize: 18,
    fontFamily: 'Montserrat',
    fill: "#2F2F2F"
  },

  // 👰 Bride Parents
  {
    id: 14,
    type: "text",
    text: "D/o Mr. & Mrs. Bride's Father Name",
    x: 30,
    y: 240,
    fontSize: 14,
    fontFamily: 'Poppins',
    fill: "#444"
  },

  // 🤵 Groom Parents
  {
    id: 15,
    type: "text",
    text: "S/o Mr. & Mrs. Groom's Father Name",
    x: 30,
    y: 260,
    fontSize: 14,
    fontFamily: 'Poppins',
    fill: "#444"
  },

  {
    id: 4,
    type: "text",
    text: "Bride Name",
    x: 90,
    y: 340,
    fontSize: 30,
    fontFamily: "Dancing Script",
    fill: "#8C6A2F"
  },

  {
    id: 5,
    type: "text",
    text: "&",
    x: 170,
    y: 380,
    fontSize: 26,
    fontFamily: "Dancing Script",
    fill: "#1A2A44"
  },

  {
    id: 6,
    type: "text",
    text: "Groom Name",
    x: 85,
    y: 420,
    fontSize: 30,
    fontFamily: "Dancing Script",
    fill: "#8C6A2F"
  },

  {
    id: 7,
    type: "text",
    text: "request the honor of your presence",
    x: 35,
    y: 490,
    fontSize: 12,
    fontFamily: 'Poppins',
    fill: "#2F2F2F"
  },

  {
    id: 8,
    type: "text",
    text: "on the auspicious occasion of their wedding",
    x: 15,
    y: 515,
    fontSize: 11,
    fontFamily: 'Poppins',
    fill: "#2F2F2F"
  },

  {
    id: 9,
    type: "text",
    text: "Sunday, 25th December 2026",
    x: 60,
    y: 550,
    fontSize: 20,
    fontFamily: 'Roboto',
    fill: "#6D1B1B"
  },

  {
    id: 10,
    type: "text",
    text: "Muhurtham: 9:30 AM",
    x: 90,
    y: 580,
    fontSize: 18,
    fontFamily: 'Roboto',
    fill: "#6D1B1B"
  },

  {
    id: 11,
    type: "text",
    text: "Venue: Kalyana Mandapam",
    x: 40,
    y: 620,
    fontSize: 18,
    fontFamily: 'Roboto',
    fill: "#6D1B1B"
  },

  {
    id: 16,
    type: "text",
    text: "City Name, State",
    x: 90,
    y: 650,
    fontSize: 16,
    fontFamily: 'Roboto',
    fill: "#6D1B1B"
  },

  {
    id: 12,
    type: "text",
    text: "Reception to follow",
    x: 220,
    y: 710,
    fontSize: 16,
    fontFamily: "Poppins",
    fill: "#444444"
  },

  // 🙏 Closing line
  {
    id: 17,
    type: "text",
    text: "Your presence will be a blessing to us",
    x: 170,
    y: 740,
    fontSize: 14,
    fontFamily: "Poppins",
    fill: "#555"
  },

  // 🖼 Logo
  {
    id: 13,
    type: "image",
    src: wedding_logo,
    x: 280,
    y: 200,
    width: 300,
    height: 300
  }

];

export default weddingInvitationElements;