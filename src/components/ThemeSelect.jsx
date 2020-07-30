import React, {useContext} from 'react';
import context from './Context';
import { withStyles, Frame } from "arwes";
import myTheme from "../theme/theme";
import {GiLightSabers} from 'react-icons/gi'

const styles = (theme) => ({
  wrapper: {
    display: "inline-block",
    marginTop: 5,
  },
  select: {
    display: "inline-block",
    margin: [5, 0],
    height: 30,
    width: 80,
    border: "none",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",

    backgroundColor: myTheme.color.background.main,
    color: theme.color.primary.base,
    fontSize: 16,
    lineHeight: 30,
  },
  frame: {
    width: "auto",
    padding: "0 3px",
    display: "inline-block",
  },
});

const SelectOption = withStyles(styles)(({classes, ...props}) => {

  const { updateTheme, themeName } = useContext(context);
  const colors = [
    { id: "luke", value: <GiLightSabers /> },
    { id: "windu", value: "windu" },
    { id: "yoda", value: "yoda" },
    { id: "vader", value: "vader" },
    { id: "rey", value: "rey" },
  ];

  const setTheme = (e) => {
    updateTheme(e.target.value);
  };
  return (
    <span {...props}>
      <div className={classes.wrapper}>
        <Frame
          show={true}
          animate={true}
          corners={10}
          className={classes.frame}
        >
          <select name="theme" onChange={setTheme} className={classes.select}>
            <option
              name="theme"
              value="luke"
              selected={themeName === "luke"}
              style={{ color: "blue" }}
            >
              Luke
            </option>
            <option name="theme" value="windu" selected={themeName === "windu"}>
              Windu
            </option>
            <option name="theme" value="vader" selected={themeName === "vader"}>
              Vader
            </option>
            <option name="theme" value="yoda" selected={themeName === "yoda"}>
              Yoda
            </option>
            <option name="theme" value="rey" selected={themeName === "rey"}>
              Rey
            </option>
          </select>
        </Frame>
      </div>
    </span>
  );
});

export default SelectOption;