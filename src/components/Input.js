import React from 'react';
import myTheme from "../theme/theme";
import {Frame} from 'arwes'

const Input = (props) => {
    const style = {
        labelText: {
          width: 150,
          display: 'inline-block',
          paddingRight: '1rem',
          textAlign: 'right'
        },
        inputFrame: {
            width: props.width,
            padding: '5px 3px',
            display: 'inline-block'
        },
        input: {
            height: "100%",
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
      <p>
        <label>
          <span style={style.labelText}>{props.label}</span>
          <Frame
            show={true}
            animate={true}
            // level={3}
            corners={4}
            // layer="primary"
            style={style.inputFrame}
          >
            <input
              style={style.input}
              type={props.type}
              name={props.name}
              onChange={props.onChange}
            ></input>
          </Frame>
        </label>
      </p>
    );

}

export default Input;