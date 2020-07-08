import React from 'react';
import withStyles from 'arwes/lib/tools/withStyles';

const styles = { 
    radio: {
       display: 'inline-block',
       padding: [0, 10]
    }
}

const Radio = withStyles(styles)( ({classes, name, value, label, onChange, checked})=>{

    return (        
        <div className={classes.radio}>
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
        </div>
        
    );
})
export default Radio;