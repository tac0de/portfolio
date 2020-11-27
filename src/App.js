import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

import { sections } from "./utils/variables";

function App() {
  return (
    <div>
      <Header />
      {sections}
      <Footer />
    </div>
  );
}

export default App;
