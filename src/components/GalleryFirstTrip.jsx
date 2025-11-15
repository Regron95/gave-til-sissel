// GalleryFirstTrip.jsx – Første ferie med bildetekster og dato
import React from "react";
import ferie1 from "../assets/ferie1.jpg";
import ferie2 from "../assets/ferie2.jpg";
import ferie3 from "../assets/ferie3.jpg";

function GalleryFirstTrip() {
  const images = [
    {
      src: ferie1,
<<<<<<< HEAD
      caption: "På tur å drikke alkohol",
=======
      caption: "← skriv inn bildetekst her",
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
      date: "20. juli 2019",
      time: "kl. 11:42",
    },
    {
      src: ferie2,
<<<<<<< HEAD
      caption: "Drakk alkohol",
      date: "21. juli 2019",
      time: "Ukjent tidspunkt men sikkert sent",
    },
    {
      src: ferie3,
      caption: "Venta sikkert på alkohol",
=======
      caption: "← skriv inn bildetekst her",
      date: "21. juli 2019",
      time: "kl. 15:10",
    },
    {
      src: ferie3,
      caption: "← skriv inn bildetekst her",
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
      date: "22. juli 2019",
      time: "kl. 09:05",
    },
  ];

  return (
    <section style={styles.gallery}>
      <h2 style={styles.heading}>
<<<<<<< HEAD
        Første ferie sammen – og starten på en tradisjon vi aldri helt klarte å holde fast ved😂
=======
        Første ferie sammen – og starten på en tradisjon vi aldri helt har sluttet med.
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
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

// 🎨 Styling beholdes lik for visuell kontinuitet
const styles = {
  gallery: {
<<<<<<< HEAD
    backgroundColor: "#fff1c2ff", // lys turkis
=======
    backgroundColor: "#E8F8F5", // lys turkis
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
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
<<<<<<< HEAD
    flexWrap: "wrap",
      justifyContent: "center",
=======
    flexDirection: "column",
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
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

export default GalleryFirstTrip;