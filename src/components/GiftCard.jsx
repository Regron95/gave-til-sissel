// GiftCard.jsx – Gavekort med wow-effekt
import React from "react";

function GiftCard() {
  return (
    <section style={styles.card}>
      <h2 style={styles.heading}>Din gave 🎁</h2>
      <div style={styles.box}>
        <p style={styles.text}>
          En middag og spa med meg – du velger dato, jeg fikser resten 💆‍♀️🍷
        </p>
        <p style={styles.note}>
          (Gjelder hele 2026 – og inkluderer bobler, latter og rolig musikk)
        </p>
      </div>
    </section>
  );
}

// 🎨 Stil med gavekort-følelse
const styles = {
  card: {
    backgroundColor: "#F5F0E6", // varm beige
    padding: "60px 20px",
    textAlign: "center",
  },
  heading: {
    fontFamily: "Playfair Display, serif",
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#6E6658",
  },
  box: {
    backgroundColor: "#FFFFFF",
    border: "2px dashed #6E6658",
    borderRadius: "12px",
    padding: "30px",
    maxWidth: "500px",
    margin: "0 auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  text: {
    fontFamily: "Inter, sans-serif",
    fontSize: "1.1rem",
    color: "#4F4F4F",
    marginBottom: "10px",
  },
  note: {
    fontSize: "0.9rem",
    color: "#9A9A9A",
    fontStyle: "italic",
  },
};

export default GiftCard;