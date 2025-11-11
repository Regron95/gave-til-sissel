// Message.jsx – Personlig tekstseksjon
import React from "react";

function Message() {
  return (
    <section style={styles.message}>
      <h2 style={styles.heading}>Et lite brev fra meg til deg 💌</h2>
      <p style={styles.text}>
        ← Her kommer en personlig tekst
      </p>
    </section>
  );
}

// 🎨 Stil med ro og varme
const styles = {
  message: {
    backgroundColor: "#FDF6F0", // varm beige
    padding: "60px 20px",
    textAlign: "center",
  },
  heading: {
    fontFamily: "Playfair Display, serif",
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#6E6658",
  },
  text: {
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem",
    maxWidth: "600px",
    margin: "0 auto",
    color: "#4F4F4F",
    lineHeight: "1.6",
  },
};

export default Message;