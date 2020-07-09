import React from 'react';
import {Frame, Button, Line} from 'arwes';

const QuickSearch = ({setQuery}) => {
    const style = {
      wrapper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'row',
        flexWrap:'no-wrap',

        margin: ".75rem",
        maxWidth: 800,
        xOverflow: 'auto',
      },
      button: {
        margin: ".5rem .5rem",
      },
    };

    const query = e => {
      setQuery(e.target.name)
    }
    return (
      <>
        <div style={style.wrapper}>
            <Button style={style.button} onClick={query} name="latest">Latest</Button>
            <Button style={style.button} onClick={query} name="unique">Unique Ships</Button>
            <Button style={style.button} onClick={query} name="starfighters">Starfighters</Button>
            <Button style={style.button} onClick={query} name="high_capacity">High Capacity</Button>
            <Button style={style.button} onClick={query} name="bargains">Bargains</Button>
        </div>
      </>
    );
}
export default QuickSearch;