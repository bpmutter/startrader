import React from 'react';
import {Puffs} from 'arwes';
import { render } from '@testing-library/react';


const style = {
    puffs1: {
        width: "100%", 
        height: 300,
        top: '-50%',
        position: 'fixed',
        zIndex: -1,
    },
    puffs2: {

    }
}

const MyPuffs = () => {


    return(<>
      <Puffs>
        <div style={style.puffs1} />
      </Puffs>
      {/* <Puffs>
        <div style={style.puffs2} />
      </Puffs> */}
      
      </>
    );
}

export default MyPuffs;