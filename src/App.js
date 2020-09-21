import React from "react";

import "./App.css";
import { Gallery } from "./components/gallery.jsx";
import { TopHeader } from "./components/TopHeader.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Templates from "./components/Templates.jsx";
function App() {
  return (
    <div>
      <TopHeader />
      <Templates />
    </div>
  );
}

export default App;
