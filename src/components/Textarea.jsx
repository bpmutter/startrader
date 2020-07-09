import React from "react";
import myTheme from "../theme/theme";
import { Frame } from "arwes";
import LabelText from "./LabelText";

const Textarea = (props) => {
  const style = {
    container: {
      display: "flex",
      justifyContent: "flex-start",
    },
    labelText: {
      width: 150,
      display: "inline-block",
      paddingRight: "1rem",
      textAlign: "right",
      alignSelf: "flex-end",
    },
    inputFrame: {
      width: props.width,
      padding: "5px 3px",
      display: "inline-block",
    },
    input: {
      height: props.type === "textarea" ? 125 : "100%",
      width: "100%",
      margin: 0,
      outline: "none",
      border: "none",
      backgroundColor: myTheme.color.background.main,
      color: myTheme.color.primary.base,
      fontSize: myTheme.font.baseSize,
      fontFamily:
        "'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif",
    },
  };
  return (
    <p styles={style.container}>
      <label for={props.name}>
        <LabelText label={props.label} required={props.required} />
      </label>
      <Frame show={true} animate={true} corners={4} style={style.inputFrame}>
        <textarea
          style={style.input}
          type={props.type}
          name={props.name}
          onChange={props.onChange}
          required={props.required}
          value={props.value}
        ></textarea>
      </Frame>
    </p>
  );
};

export default Textarea;
