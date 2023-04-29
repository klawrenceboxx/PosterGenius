import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Homepage/Hero";
import Popular from "./components/Homepage/Popular";
import Promotion from "./components/Homepage/Promotion";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Popular />
      <Promotion />
      <Footer />
    </div>
  );
}

export default App;
