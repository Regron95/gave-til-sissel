import { useState } from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import Gallery from "./components/Gallery";
import GalleryFirstTrip from "./components/GalleryFirstTrip";
import GalleryLastTrip from "./components/GalleryLastTrip";
import GiftCard from "./components/GiftCard";
import Footer from "./components/Footer";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [width, height] = useWindowSize();

  const nextStep = () => setStep((prev) => prev + 1);
  const reset = () => setStep(0);

  return (
    <div className="App">
      {/* 🎊 Konfetti kun på første og siste steg */}
      {(step === 0 || step === 5) && <Confetti width={width} height={height} />}

      {step === 0 && <Header onStart={nextStep} />}
      {step === 1 && <Message />}
      {step === 2 && <Gallery />}
      {step === 3 && <GalleryFirstTrip />}
      {step === 4 && <GalleryLastTrip />}
      {step === 5 && <GiftCard />}

      {/* Neste-knapp mellom steg 1–4 */}
      {step > 0 && step < 5 && (
        <button onClick={nextStep} className="next-btn">
          Neste →
        </button>
      )}

      {/* Footer kun på siste steg */}
      {step === 5 && <Footer onRestart={reset} />}
    </div>
  );
}

export default App;