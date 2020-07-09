import React, { useEffect, useState } from "react";
import ShipResults from "./ShipResults";

const UniqueShips = ({type}) => {
  const [ships, setShips] = useState([]);
  useEffect(() => {
    (async () => {
      console.log('TYPE::', type)
      const res = await fetch(`http://localhost:5000/ships/class/${type}`);
      const data = await res.json();
      setShips(data.star_ships);
      console.log('LATEST SHIPS::', data.star_ships)
    })();
  }, [type]);
  return <ShipResults title={type} ships={ships} />;
};

export default UniqueShips;
