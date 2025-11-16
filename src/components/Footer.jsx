// Footer.jsx – Avslutning med personlig preg
import React from "react";

function Footer({ onRestart }) {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        Laget med kjærlighet av <br />
        Regine Ronesen<br />💛
      </p>

      {/* Bare vis knapp hvis restart-funksjon er sendt inn */}
      {onRestart && (
        <button onClick={onRestart} style={styles.button}>
          🔁 Tilbake til start
        </button>
      )}
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#FDF6F0",
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #E0DAD2",
    marginTop: "60px",
  },
  text: {
    fontFamily: "Inter, sans-serif",
    fontSize: "0.9rem",
    color: "#9A9A9A",
    marginBottom: "10px",
  },
  button: {
    fontSize: "0.9rem",
    padding: "10px 20px",
    backgroundColor: "#FFF9E3",
    border: "1px solid #E0DAD2",
    borderRadius: "8px",
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
  },
};

export default Footer;