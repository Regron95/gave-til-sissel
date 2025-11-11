// GalleryLastTrip.jsx – Siste ferie med bildetekster og dato
import React from "react";
import ferie1 from "../assets/ferie2.1.jpg";
import ferie2 from "../assets/ferie2.2.jpg";
import ferie3 from "../assets/ferie2.3.jpg";

function GalleryLastTrip() {
  const images = [
    {
      src: ferie1,
      caption: "← skriv inn bildetekst her",
      date: "5. august 2023",
      time: "kl. 13:20",
    },
    {
      src: ferie2,
      caption: "← skriv inn bildetekst her",
      date: "6. august 2023",
      time: "kl. 17:45",
    },
    {
      src: ferie3,
      caption: "← skriv inn bildetekst her",
      date: "7. august 2023",
      time: "kl. 09:10",
    },
  ];

  return (
    <section style={styles.gallery}>
      <h2 style={styles.heading}>
        Siste ferie sammen – og fortsatt like mye latter, vin og rare bilder.
      </h2>
      <div style={styles.imageContainer}>
        {images.map((img, index) => (
          <div key={index} style={styles.card}>
            <img src={img.src} alt={`Feriebilde ${index + 1}`} style={styles.image} />
            <p style={styles.caption}>{img.caption}</p>
            <p style={styles.meta}>
              {img.date} • {img.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 🎨 Samme stil for visuell helhet
const styles = {
  gallery: {
    backgroundColor: "#F0F4FF", // lys blå
    padding: "40px 20px",
    textAlign: "center",
  },
  heading: {
    fontFamily: "Playfair Display, serif",
    fontSize: "1.5rem",
    marginBottom: "30px",
    color: "#6E6658",
    maxWidth: "600px",
    margin: "0 auto 30px",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
  },
  card: {
    maxWidth: "320px",
    transition: "opacity 1s ease-in-out",
    opacity: 1,
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  caption: {
    marginTop: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#6E6658",
    fontFamily: "Inter, sans-serif",
  },
  meta: {
    fontSize: "0.85rem",
    color: "#9A9A9A",
    fontFamily: "Inter, sans-serif",
  },
};

export default GalleryLastTrip;