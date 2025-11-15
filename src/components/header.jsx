//Header.jsx-gratulasjon og introseksjon
import React from "react";

function Header({ onStart }) {
  return (
    <header style ={styles.header}>
      <h1 style = {styles.title}>Gratulerer med 30års dagen, Sissel!🎉</h1>
      <p style = {styles.subtitle}>Din gave er klar! </p>
      <button className="next-btn" onClick={onStart}>Start gaven</button>
    </header>
  );
}

//Enkel styling med pastellfarger og rolig uttrykk
const styles = {
  header: {
    backgroundColor: "#FCEEF5",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontFamily: "Playfair Display, serif",
    fontSize: "2.8rem",
    marginBottom: "10px",
    color: "#6E6658"
  },
  subtitle: {
    fontFamily: "Inter, sans-serif",
    fontSize: "1.2rem",
    color: "#9A9A9A",
    marginBottom: "30px",
  },
  
};
export default Header;