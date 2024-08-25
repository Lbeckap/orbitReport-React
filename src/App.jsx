import Buttons from "./components/Buttons.jsx";
import Table from "./components/Table.jsx";
import Banner from "./components/Banner.jsx";
import { useState } from "react";
import satData from "./components/satData.jsx";

function App() {
  const [sat, setSat] = useState(satData);
  const orbitTypes = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };

  return (
    <div>
      <Banner />
      <Buttons
           filterByType={filterByType}
           setSat={setSat}
           orbitTypes={orbitTypes} />
      <Table sat={sat} />
    </div>
  );
}

export default App;