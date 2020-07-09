import React, {useState} from 'react';
import LatestShips from './LatestShips';
import UniqueShips from './UniqueShips';
import {Button, Frame} from 'arwes';
import ShipsByType from './ShipsByType';
const Homepage = () => {
    debugger;
    const style = {
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "3rem",
      },
      frame: {
        margin: ".75rem",
        maxWidth: 1200,
      },
      wrapper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "no-wrap",
        margin: "3rem",
        maxWidth: 800,
        xOverflow: "auto",
      },
      button: {
        margin: ".5rem .5rem",
      },
    };

    const [activeQuery, setActiveQuery] = useState('latest');
    
    return (
      <main style={style.main}>
        <div style={style.wrapper}>
          <Button style={style.button} onClick={()=>{setActiveQuery("latest")}}>Latest</Button>
          <Button style={style.button} onClick={()=>{setActiveQuery("unique")}}>Unique</Button>
          <Button style={style.button} onClick={()=>{setActiveQuery("Starfighter")}}>Starfighters</Button>
          <Button style={style.button} onClick={()=>{setActiveQuery("Star Dreadnought")}}>Dreadnoughts</Button>
          <Button style={style.button} onClick={()=>{setActiveQuery("Star Cruiser")}}>Cruisers</Button>
          <Button style={style.button} onClick={()=>{setActiveQuery("Freighter")}}>Freighters</Button>
          <Button style={style.button} onClick={()=>{setActiveQuery("Transport")}}>Transports</Button>
          
        </div>
        <Frame
          animate
          level={3}
          corners={4}
          layer="primary"
          style={style.frame}
        >
          {activeQuery === "latest" && <LatestShips/>}
          {activeQuery === "unique" && <UniqueShips/>}
          {activeQuery !== "unique" && activeQuery !== "latest" && <ShipsByType type={activeQuery}/>}

        </Frame>
      </main>
    );
}

export default Homepage;