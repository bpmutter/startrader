import React from 'react';
import QuickSearch from './QuickSearch';
import LatestShips from './LatestShips';
import HotShips from './HotShips'
import Frame from 'arwes/lib/Frame';
const Homepage = ({activeView}) => {
    const style = {
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: '3rem',
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
        <QuickSearch style={style.quickSearch} activeSearch/>
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