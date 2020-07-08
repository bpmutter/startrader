import React from 'react';
import {withStyles} from 'arwes';
import Words from 'arwes/lib/Words';

const styles = {
  labelText: {
      width: 150,
      display: "inline-block",
      paddingRight: "1rem",
      textAlign: "right",
  },
};

const Label = withStyles(styles)( ({classes, label, required}) => {

    return (
        <span className={classes.labelText}>
            {label}
            {required ? <span><Words layer="alert">*</Words></span>: ""}
        </span>
    )
})

export default Label;