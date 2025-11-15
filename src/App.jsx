import { useState, useEffect } from "react";
import Header from "./components/header";
import Message from "./components/Message";
import Gallery from "./components/gallery";
import GalleryFirstTrip from "./components/GalleryFirstTrip";
import GalleryLastTrip from "./components/GalleryLastTrip";
import GiftCard from "./components/GiftCard";
import Footer from "./components/Footer";
import ConfettiEffect from "./components/ConfettiEffect";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep((prev) => prev + 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <div className="App">
      {step === 0 && (
        <>
          <ConfettiEffect />
          <Header onStart={nextStep} />
        </>
      )}
      {step === 1 && <Message />}
      {step === 2 && <Gallery />}
      {step === 3 && <GalleryFirstTrip />}
      {step === 4 && <GalleryLastTrip />}
      {step === 5 && (
        <>
          <ConfettiEffect />
          <GiftCard />
          <Footer onRestart={() => setStep(0)} />
        </>
      )}
      {step > 0 && step < 5 && (
        <button onClick={nextStep} className="next-btn">
          Neste steg →
        </button>
      )}
    </div>
  );
}

export default App;