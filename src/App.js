import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter  as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Contact from "../src/Pages/Contact/Contact.js";
// import AboutUs from "../src/Pages/AboutUs/AboutUs.js";
import NavBarMenu from "./Components/NavBar/NavBar.js";
import Home from "../src/Pages/Home/Home.js";
import Footer from "../src/Components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="*" element={<Home />} />
          <Route path="" element={<Home />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
