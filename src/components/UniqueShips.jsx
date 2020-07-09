import React, { useEffect, useState } from "react";
import ShipResults from "./ShipResults";

const UniqueShips = () => {
  const [ships, setShips] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:5000/ships/uniques");
      const data = await res.json();
      setShips(data.star_ships);
    })();
  }, []);
  return <ShipResults title="Unique Listings" ships={ships} />;
};

export default UniqueShips;
