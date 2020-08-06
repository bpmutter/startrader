import React from 'react';
import {withStyles} from 'arwes';
import Words from 'arwes/lib/Words';
import myTheme from '../theme/theme'
const styles = theme => ({
  labelText: {
    width: 165,
    display: "inline-flex",
    paddingRight: "1rem",
    textAlign: "right",
    fontFamily: myTheme.font.fontFamily.regular,
    fontSize: myTheme.font.baseSize,
    height: myTheme.font.baseSize +20, 
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      display: 'block',
      textAlign: 'left',
      paddingBottom: '.5rem',
      width: '100%',
    },
  },
});

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