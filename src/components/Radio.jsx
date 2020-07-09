import React from 'react';
import withStyles from 'arwes/lib/tools/withStyles';
import {Words} from 'arwes';

const styles = { 
    radio: {
       display: 'inline-block',
       padding: [0, 10]
    }
}

const Radio = withStyles(styles)( ({classes, name, value, label, onChange, checked})=>{

    return (
      <div className={classes.radio}>
        <Words layer="primary">
          <label>
            <input
              name={name}
              type="radio"
              value={value}
              checked={checked}
              onChange={onChange}
            />
            {label}
          </label>
        </Words>
      </div>
    );
})
export default Radio;