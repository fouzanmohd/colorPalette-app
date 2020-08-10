import React from "react";
import Palette from "./Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./Colorhelpers";
function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColor[3])} />
    </div>
  );
}

export default App;
