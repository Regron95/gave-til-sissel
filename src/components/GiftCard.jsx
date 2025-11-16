// GiftCard.jsx – Gavekort med bilde og tekstboks
import React from "react";
import centralbad from "../assets/centralbad.jpeg";

function GiftCard() {
  return (
    <section style={styles.card}>
      <h2 style={styles.heading}>Din gave 🎁</h2>
      <img src={centralbad} alt="Centralbadet" style={styles.image} />
      <div style={styles.giftBox}>
        <p style={styles.text}>
          En middag og Spa på Centralbadet med meg – du velger dato, eg fikser resten 💆‍♀️🍷
        </p>
        <p style={styles.note}>
          (Gjelder hele 2026 – og inkluderer bobler, latter og god stemning)
        </p>
      </div>
    </section>
  );
}

// 🎨 Stil med bilde og gaveboks
const styles = {
  card: {
    backgroundColor: "#f1bff1ff",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
  },
  heading: {
    fontFamily: "Playfair Display, serif",
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#6E6658",
  },
  image: {
    display: "block",
    margin: "0 auto 30px",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  giftBox: {
    backgroundColor: "#ffffffcc", // hvit med litt gjennomsiktighet
    border: "2px dashed #6E6658",
    borderRadius: "12px",
    padding: "25px",
    maxWidth: "500px",
    margin: "0 auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  text: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: "1.2rem",
    color: "#4F4F4F",
    marginBottom: "10px",
    lineHeight: "1.6",
  },
  note: {
    fontFamily: "Inter, sans-serif",
    fontSize: "0.95rem",
    color: "#9A9A9A",
    fontStyle: "italic",
    lineHeight: "1.5",
  },
};

export default GiftCard;