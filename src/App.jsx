import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./header";
import Home from "./PAGES/home";
import About from "./PAGES/about";
import Contact from "./PAGES/contact";
import Verify from "./PAGES/verify";
import Apply from "./PAGES/apply";
import Footer from "./footer";

function App() {
  return (
    <div className="app">

      <Header />

      <div className="page-content">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/verify" element={<Verify />} />

          <Route path="/apply" element={<Apply />} />

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;