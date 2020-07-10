import React, { useEffect, useState } from "react";
import ShipResults from "./ShipResults";

const UniqueShips = () => {
  const [ships, setShips] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/ships/uniques`);
      const data = await res.json();
      setShips(data.star_ships);
    })();
  }, []);
  return <ShipResults title="Unique Listings" ships={ships} />;
};

export default UniqueShips;
