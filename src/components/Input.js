import React from 'react';
import myTheme from "../theme/theme";
import {Frame} from 'arwes'
import withStyles from "arwes/lib/tools/withStyles";

import LabelText from './LabelText';

const styles = (theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",

    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      flexDirection: "column",
      marginBottom: ".5em",
    },
  },
  inputFrame: {
    padding: "5px 3px",
    display: "inline-block",
    backgroundColor: myTheme.color.background.main,
    height: myTheme.font.baseSize + 20,
  },
  input: {
    width: "100%",
    height: "100%",
    margin: 0,
    outline: "none",
    border: "none",
    backgroundColor: myTheme.color.background.main,
    color: theme.color.primary.base,
    fontSize: myTheme.font.baseSize,
    fontFamily:
      "'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif",
  },
});
const Input = withStyles(styles)(
  ({ classes, width, type, name, label, value, onChange, required }) => {
    const style = {
      inputFrame: {
        width: width,
      },
      input: {
        height: type === "textarea" ? 125 : "100%",
      },
    };
    return (
      <p className={classes.container}>
        <label for={name}>
          <LabelText label={label} required={required} />
        </label>
        <Frame
          show={true}
          animate={true}
          corners={4}
          className={classes.inputFrame}
          style={style.inputFrame}
        >
          <input
            style={style.input}
            className={classes.input}
            type={type}
            name={name}
            onChange={onChange}
            required={required}
            value={value}
          ></input>
        </Frame>
      </p>
    );
  }
);

export default Input;