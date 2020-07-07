import React from 'react';
import QuickSearch from './QuickSearch';
import LatestShips from './LatestShips';
import HotShips from './HotShips'
import Frame from 'arwes/lib/Frame';
import ShipResults from './ShipResults';
const Homepage = () => {
    const style = {
      background: {
        padding: '1.5rem',
        margin: 0,
        position: 'relative',
        zIndex: -1,
        // top: -12,
        // bottom: -12,
        backgroundImage: "url(/assets/img/deathstar-background-purple.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      backgroundFiler: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        backgroundColor: 'rgba(38, 218, 253, .05)'
      },
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      quickSearch: {
        margin: '3rem',
      },
      frame: {
        margin: ".75rem",
        maxWidth: 1200,
      },
    };
    return (
      <div style={style.background}>
        <div style={style.backgroundFiler}></div>
        <QuickSearch style={style.quickSearch} />
        <main style={style.main}>
          <Frame
            animate
            level={3}
            corners={4}
            layer="primary"
            style={style.frame}
          >
            <HotShips />
            <LatestShips />
          </Frame>
        </main>
      </div>
    );
}

export default Homepage;