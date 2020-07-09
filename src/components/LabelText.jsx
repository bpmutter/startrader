import React from 'react';
import {withStyles} from 'arwes';
import Words from 'arwes/lib/Words';

const styles = {
  labelText: {
      width: 160,
      display: "inline-block",
      paddingRight: "1rem",
      textAlign: "right",
  },
};

const Label = withStyles(styles)( ({classes, label, required}) => {

    return (
      <Words layer="primary">
        <span className={classes.labelText}>
          {label}
          {required ? (
            <span>
              <Words layer="alert">*</Words>
            </span>
          ) : (
            ""
          )}
        </span>
      </Words>
    );
})

export default Label;