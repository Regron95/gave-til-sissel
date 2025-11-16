import { useState } from "react";
import Header from "./components/header";
import Message from "./components/Message";
import Gallery from "./components/gallery";
import GalleryFirstTrip from "./components/GalleryFirstTrip";
import GalleryLastTrip from "./components/GalleryLastTrip";
import GiftCard from "./components/GiftCard";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="App">
      {step === 0 && <Header onStart={nextStep} />}
      {step === 1 && <Message />}
      {step === 2 && <Gallery />}
      {step === 3 && (
        <>
          <GalleryFirstTrip />
          <GalleryLastTrip />
        </>
      )}
      {step === 4 && <GiftCard />}
      {step > 0 && step < 4 && (
        <button onClick={nextStep} className="next-btn">
          Neste steg →
        </button>
      )}
    </div>
  );
}

export default App;
