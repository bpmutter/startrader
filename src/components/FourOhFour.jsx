import React from "react";

import { Words, Button, Content, Heading, Image, Frame } from "arwes";


const FourOhFour = () => {
  const style = {
    container: {
      padding: "2rem",
      maxWidth: 600,
      margin: "0 auto",
    },
    title: {
      textAlign: "center",
      margin: "1rem",
    },
    contentWrapper: {
      margin: "1rem",
    },
  };


  return (
    <div>
      <Content style={style.container}>
        <Frame animate level={3} corners={4} style={style.frame}>
          <div style={style.contentWrapper}>
            <Heading node="h2" style={style.title}>
              404
            </Heading>
            <div>
              <p style={{textAlign:"center"}}>
                <Words animate>Resource Not Found</Words>
              </p>
              <Image
                animate
                resources="/assets/img/404-fail.webp"
                alt="Lego Stormtrooper hitting tree on speederbike"
                style={{opacity: '.7'}}
              />
            </div>
          </div>
        </Frame>
      </Content>
    </div>
  );
};

export default FourOhFour;
