import React from 'react';
import {Loading, withStyles} from 'arwes';

const styles = { 
    wrapper: {
        position: 'fixed',
        width: 500,
        height: 200,
        top: '50%',
        left: '50%',
        marginTop: -100, /* Negative half of height. */
        marginLeft: -250 /* Negative half of width. */
    }
}

const LoadingBig = withStyles(styles)( ({classes})=>{

    return (
      <div className={classes.wrapper}>
        <Loading animate />
        <Loading animate small />
        <div style={{ position: "relative", width: 200, height: 200 }}>
          <Loading animate full />
        </div>
      </div>
    );
})

export default LoadingBig;