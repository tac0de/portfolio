import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
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
