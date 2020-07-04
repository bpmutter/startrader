import React from 'react';
import QuickSearch from './QuickSearch';
import LatestShips from './LatestShips';
import Frame from 'arwes/lib/Frame';
const Homepage = () => {
    const style = {
      frame: {
        margin: ".75rem",

        // padding: "1rem",
      },
    };
    return (
      <>
        <QuickSearch />
        <main>
          <Frame
            animate
            level={3}
            corners={4}
            layer="primary"
            style={style.frame}
          >
            <LatestShips />
          </Frame>
        </main>
      </>
    );
}

export default Homepage;