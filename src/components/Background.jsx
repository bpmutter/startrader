import React from 'react';

const Background = () => { 
    const style = {
      background: {
        padding: 0,
        margin: 0,
        position: "absolute",
        zIndex: 0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // bottom: -12,
        backgroundImage: "url(/assets/img/deathstar-background-purple.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      backgroundFiler: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        backgroundColor: "rgba(38, 218, 253, .05)",
      },
    }
    return (
      <div style={style.background}>
        <div style={style.backgroundFiler}></div>
      </div>
    );
}
export default Background;