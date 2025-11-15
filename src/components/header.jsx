//Header.jsx-gratulasjon og introseksjon
import React from "react";

<<<<<<< HEAD
function Header({ onStart }) {
  return (
    <header style ={styles.header}>
      <h1 style = {styles.title}>Gratulerer med 30års dagen, Sissel!🎉</h1>
      <p style = {styles.subtitle}>Din gave er klar! </p>
      <button className="next-btn" onClick={onStart}>Start gaven</button>
=======
function Header() {
  return (
    <header style ={styles.header}>
      <h1 style = {styles.title}>Gratulerer med 30års dagen, Sissel!</h1>
      <p style = {styles.subtitle}>Din gave er klar - scroll ned! </p>
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
    </header>
  );
}

//Enkel styling med pastellfarger og rolig uttrykk
const styles = {
  header: {
    backgroundColor: "#FCEEF5",
<<<<<<< HEAD
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
=======
    padding: "60px 20px",
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
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
<<<<<<< HEAD
    color: "#9A9A9A",
    marginBottom: "30px",
  },
  
=======
    color: "#9A9A9A"
  }
>>>>>>> d61edf806c02ef9b3b9ca5f74051ffca88601c44
};
export default Header;