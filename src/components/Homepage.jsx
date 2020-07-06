import React from 'react';
import QuickSearch from './QuickSearch';
import LatestShips from './LatestShips';
import HotShips from './HotShips'
import Frame from 'arwes/lib/Frame';
import ShipResults from './ShipResults';
const Homepage = () => {
    const style = {
      main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

      },
      frame: {
        margin: ".75rem",
        backgroundImage: "url(/assets/img/deathstar-background-purple.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        maxWidth: 1200,
      },
    };
    return (
      <>
        <QuickSearch />
        <main style={style.main}>
          <Frame
            animate
            level={3}
            corners={4}
            layer="primary"
            style={style.frame}
          >
            <HotShips/>
            <LatestShips />
          </Frame>
        </main>
      </>
    );
}

export default Homepage;