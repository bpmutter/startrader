import React from 'react';
import QuickSearch from './QuickSearch';
import LatestShips from './LatestShips';
import HotShips from './HotShips'
import Frame from 'arwes/lib/Frame';
const Homepage = () => {
    const style = {
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      quickSearch: {
        margin: "3rem",
      },
      frame: {
        margin: ".75rem",
        maxWidth: 1200,
      },
    };
    return (
      <>
      
      <main style={style.main}>
        <QuickSearch style={style.quickSearch} />
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
        </>
    );
}

export default Homepage;