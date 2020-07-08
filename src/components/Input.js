import React from 'react';
import myTheme from "../theme/theme";
import {Frame} from 'arwes'
import LabelText from './LabelText';

const Input = (props) => {
    const style = {
        container: { 
          display: 'flex',
          justifyContent: 'flex-start',
        },
        labelText: {
          width: 150,
          display: 'inline-block',
          paddingRight: '1rem',
          textAlign: 'right',
          alignSelf: 'flex-end',
        },
        inputFrame: {
            width: props.width,
            padding: '5px 3px',
            display: 'inline-block'
        },
        input: {
            height: props.type === "textarea" ? 125 : "100%",
            width: "100%",
            margin: 0,
            outline: "none",
            border: "none",
            backgroundColor: myTheme.color.background.main,
            color: myTheme.color.primary.base,
            fontSize: myTheme.font.baseSize
        },
    };
    return (
      <p styles={style.container}>
        <label for={props.name}>
          <LabelText label={props.label} required={props.required} />
        </label>
        <Frame show={true} animate={true} corners={4} style={style.inputFrame}>
          <input
            style={style.input}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            required={props.required}
          ></input>
        </Frame>
      </p>
    );

}

export default Input;