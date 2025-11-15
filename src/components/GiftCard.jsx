<<<<<<< HEAD
// GiftCard.jsx – Gavekort med bilde og tekstboks
import React from "react";
import centralbad from "../assets/centralbad.jpeg";
=======
// GiftCard.jsx – Gavekort med wow-effekt
import React from "react";
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44

function GiftCard() {
  return (
    <section style={styles.card}>
      <h2 style={styles.heading}>Din gave 🎁</h2>
<<<<<<< HEAD
      <img src={centralbad} alt="Centralbadet" style={styles.image} />
      <div style={styles.giftBox}>
        <p style={styles.text}>
          En middag og Spa på Centralbadet med meg – du velger dato, eg fikser resten 💆‍♀️🍷
        </p>
        <p style={styles.note}>
          (Gjelder hele 2026 – og inkluderer bobler, latter og god stemning)
=======
      <div style={styles.box}>
        <p style={styles.text}>
          En middag og spa med meg – du velger dato, jeg fikser resten 💆‍♀️🍷
        </p>
        <p style={styles.note}>
          (Gjelder hele 2026 – og inkluderer bobler, latter og rolig musikk)
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
        </p>
      </div>
    </section>
  );
}

<<<<<<< HEAD
// 🎨 Stil med bilde og gaveboks
const styles = {
  card: {
    backgroundColor: "#f1bff1ff",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
=======
// 🎨 Stil med gavekort-følelse
const styles = {
  card: {
    backgroundColor: "#F5F0E6", // varm beige
    padding: "60px 20px",
    textAlign: "center",
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
  },
  heading: {
    fontFamily: "Playfair Display, serif",
    fontSize: "2rem",
<<<<<<< HEAD
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
=======
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
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
  },
};

export default GiftCard;