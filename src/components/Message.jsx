// Message.jsx – Personlig tekstseksjon
import React from "react";

function Message() {
  return (
    <section style={styles.message}>
      <h2 style={styles.heading}>Et lite brev fra meg til deg<br/>💌 </h2>
      <p style={styles.text}>
        Kjære Sissel <br/>
  Eg har laga denna gaven til deg – ikje bare fordi du fortjene nåkka helt spesielt, men fordi du e den som har inspirert meg. <br/>Du og din bursdag e grunnen til at eg har tatt tak i studiet no, og dokker gjør det artig for meg å lære. <br/> 
  Heile dettan prosjektet ble til fordi eg ville skape nåkka som både kunne være en gave til deg – og en motivasjon for meg til å faktisk lære meg det eg har fått beskjed om å lære på skolen🤭 <br/>
  Du e så klok, så kul, og så full av driv. Eg beundrer deg mer enn eg klare å sei, og eg e så takknemlig for at du finns i livet mitt. <br/> 
  Eg gleder meg helt enormt til vi sees igjen og til vi kan feire vår "60-årsdag" ilag! <br/>
  <br/>Eg e veldig glad i deg❤️  
  <br/><br/>/Regine
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