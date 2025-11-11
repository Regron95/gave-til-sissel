import Header from "./components/header";
import Gallery from "./components/gallery";
import GalleryFirstTrip from "./components/GalleryFirstTrip";
import GalleryLastTrip from "./components/GalleryLastTrip";
import Message from "./components/Message";
import GiftCard from "./components/GiftCard";

function App() {
  return (
    <>
      <Header />
      <Gallery />
      <GalleryFirstTrip />
      <GalleryLastTrip />
      <Message />
      <GiftCard />
    </>
  );
}

export default App;