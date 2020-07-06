import React from 'react';
import { Content, Heading } from "arwes";
import ShipCard from "./ShipCard";

const ShipResults = ({title, ships}) => { 

    const style = { 
      container: { 
        padding: '1rem',
      },
      listings: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        // maxWidth: 600,
      }
    }
    console.log(ships);
    
    return (
      <Content style={style.container}>
        <Heading node="h2">{title}</Heading>
        <Content style={style.listings}>
          { ships ? ships.map((ship) => (
            <ShipCard ship={ship} />
          )) : <p>No ships yet!</p> }
          {}
        </Content>
      </Content>
    );
    
}

export default ShipResults;