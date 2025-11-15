// Gallery.jsx – Festbilder med plass til dine egne tekster
import React from "react";
import fest1 from "../assets/fest1.jpg";
import fest2 from "../assets/fest2.jpg";
import fest3 from "../assets/fest3.jpg";

function Gallery() {
  const images = [
    {
      src: fest1,
<<<<<<< HEAD
=======
      caption: "← skriv inn bildetekst her",
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
      date: "12. mars 2018",
      time: "kl. 04:55",
    },
    {
      src: fest2,
<<<<<<< HEAD
=======
      caption: "← skriv inn bildetekst her",
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
      date: "12. mars 2018",
      time: "kl. 04:58",
    },
    {
      src: fest3,
<<<<<<< HEAD
=======
      caption: "← skriv inn bildetekst her",
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
      date: "12. mars 2018",
      time: "kl. 05:03",
    },
  ];

  return (
    <section style={styles.gallery}>
      <h2 style={styles.heading}>
<<<<<<< HEAD
        Første bildan av oss to på min kamerarull- <br/>Såklart tatt mellom kl 04:55 og 05:03<br/>👯‍♀️
=======
        Disse bildene ble tatt mellom 04:55 og 05:03
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
      </h2>
      <div style={styles.imageContainer}>
        {images.map((img, index) => (
          <div key={index} style={styles.card}>
            <img src={img.src} alt={`Bilde ${index + 1}`} style={styles.image} />
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

// 🎨 Styling med pastell og rolig uttrykk
const styles = {
  gallery: {
<<<<<<< HEAD
    backgroundColor: "#e0f5edff",
=======
    backgroundColor: "#FFF9E3",
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

export default Gallery;