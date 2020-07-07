import React from 'react';
import ShipResults from './ShipResults';

const millenniumFalcon = {
  id: 1,
  img:
    "https://starwars-trader-imgs.s3.us-east-2.amazonaws.com/img/starships/10.jpg",
  name: "Millennium Falcon",
  cost: 1234567,
  forSale: true,
  owner: {
    id: 14,
    name: "Han Solo",
    img:
      "https://starwars-trader-imgs.s3.us-east-2.amazonaws.com/img/characters/14.jpg",
  },
};
const latestShips= [millenniumFalcon, millenniumFalcon, millenniumFalcon];

const LatestShips = () => {
    return (
        <ShipResults title="Latest Listings" ships={latestShips}/>
    );
}

export default LatestShips;