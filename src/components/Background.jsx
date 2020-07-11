import React from 'react';

const Background = () => { 
    const style = {
      background: {
        padding: 0,
        margin: 0,
        position: "fixed",
        zIndex: -1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: "url(/assets/img/deathstar-background.webp)",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
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
    };
    return (
      <div style={style.background}>
        <div style={style.backgroundFiler}></div>
      </div>
    );
}
export default Background;