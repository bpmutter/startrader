import React from 'react';
import {withStyles, Frame} from 'arwes';
import myTheme from "../theme/theme";
import LabelText from './LabelText';

const styles = (theme) => ({
  container: {
    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      display: "flex",
      flexDirection: "column",
      marginBottom: '.5em',
    },
  },
  labelText: {
    width: 150,
    display: "inline-block",
    paddingRight: "1rem",
    textAlign: "right",
  },
  select: {
    display: "inline-block",
    margin: [5, 0],
    height: 30,
    width: 230,
    border: "none",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",
    backgroundColor: myTheme.color.background.main,
    color: theme.color.primary.base,
    fontSize: myTheme.font.baseSize,
    lineHeight: "30px",
    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      width: '100%',
    },
  },
  frame: {
    width: "auto",
    padding: "0 3px",
    display: "inline-block",
  },
});

const SelectOption = withStyles(styles)(({classes, label, onChange, name, options, optionValueId, optionInnerContent, required, selected, selectClass})=>{
    return (
      <div>
        <label className={classes.container}>
          {label && <LabelText label={label} required={required} />}
          <Frame
            show={true}
            animate={true}
            corners={4}
            className={classes.frame}
          >
            <select name={name} onChange={onChange} className={selectClass ? selectClass : classes.select} required={required}>
              {options.map((option) => {
                return (
                  <option
                    name={name}
                    value={option[optionValueId]}
                    selected={selected === option[optionValueId]}
                  >
                    {option[optionInnerContent]}
                  </option>
                );
              })}
            </select>
          </Frame>
        </label>
      </div>
    );
})

export default SelectOption;