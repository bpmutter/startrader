import React from 'react';
import { Content, Heading } from "arwes";
import ShipCard from "./ShipCard";
import Loading from 'arwes/lib/Loading';

const ShipResults = ({title, ships, hideOwner}) => { 

    const style = {
      container: {
        padding: "1rem",
        minWidth: 275,
      },
      listings: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      },
    };
    
    return (
      <Content style={style.container}>
        <Heading node="h2" style={{textAlign:'center'}}>{title}</Heading>
        { !ships ?  <Loading/> : 
          <Content style={style.listings}>
          { ships.length ? ships.map((ship) => (
            <ShipCard ship={ship} hideOwner={hideOwner}/>
          )) : <p>No ships yet!</p> }
          {}
        </Content>
        }
        
      </Content>
    );
    
}

export default ShipResults;