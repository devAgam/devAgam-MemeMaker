import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Gallery } from "./components/gallery.jsx";
import TopHeader from "./components/TopHeader.jsx";

import Templates from "./components/Templates.jsx";
import Body from "./components/Body";
function App() {
  return (
    <div>
      <TopHeader />
      <Body />
    </div>
  );
}

export default App;
