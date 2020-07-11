import React, {useState} from 'react';
import LatestShips from './LatestShips';
import UniqueShips from './UniqueShips';
import {Button, Frame, withStyles} from 'arwes';
import ShipsByType from './ShipsByType';

const styles = (theme) => ({
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

  buttonWrapper: {
    // margin: ".5rem",
    // maxWidth: 800,

    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      width: '90vw',
      padding: '0 .25rem',
      height: 70,
      overflowX: 'scroll',
    },
  },
  button: {
    margin: ".5rem .5rem",
    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      fontSize: ".75rem",
    },
  },
});

const Homepage = ({classes}) => {

    const [activeQuery, setActiveQuery] = useState('latest');
    
    return (
      <main className={classes.main}>
          <Frame
            animate
          level={3}
          corners={2}
          layer="primary"
          className={classes.frame}
          >
        <div className={classes.buttonWrapper}>
            <Button className={classes.button} onClick={()=>{setActiveQuery("latest")}}>Latest</Button>
          <Button className={classes.button} onClick={()=>{setActiveQuery("unique")}}>Unique</Button>
          <Button className={classes.button} onClick={()=>{setActiveQuery("Starfighter")}}>Starfighters</Button>
          <Button className={classes.button} onClick={()=>{setActiveQuery("Star Dreadnought")}}>Dreadnoughts</Button>
          <Button className={classes.button} onClick={()=>{setActiveQuery("Star Cruiser")}}>Cruisers</Button>
          <Button className={classes.button} onClick={()=>{setActiveQuery("Freighter")}}>Freighters</Button>
          <Button className={classes.button} onClick={()=>{setActiveQuery("Transport")}}>Transports</Button>
        </div>
          </Frame>        
        <Frame
          animate
          level={3}
          corners={4}
          layer="primary"
          className={classes.frame}
        >
          {activeQuery === "latest" && <LatestShips/>}
          {activeQuery === "unique" && <UniqueShips/>}
          {activeQuery !== "unique" && activeQuery !== "latest" && <ShipsByType type={activeQuery}/>}

        </Frame>
      </main>
    );
}

export default withStyles(styles)(Homepage);