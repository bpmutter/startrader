import React from 'react';
import {Frame, Button, Line} from 'arwes';

const QuickSearch = () => {
    const style = {
      wrapper: {
        display: "flex",
        justifyContent: "center",
        margin: ".75rem",
      },
      button: {
        margin: ".5rem .5rem",
      },
    };
    return (
      <>
        <div style={style.wrapper}>
            <Button style={style.button}>Latest</Button>
            <Button style={style.button}>Unique Ships</Button>
            <Button style={style.button}>Starfighters</Button>
            <Button style={style.button}>High Capacity</Button>
            <Button style={style.button}>Bargains</Button>
        </div>
      </>
    );
}
export default QuickSearch;