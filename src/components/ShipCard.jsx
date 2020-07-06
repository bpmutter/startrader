import React from 'react';
import {Frame, Image, Content, Words} from 'arwes';
const ShipCard = ({ship}) => { 
    const style = {
        wrapper: {
            margin: '1rem'
        },
        frame: {
            maxWidth: 275,
            display: "inline-block",
            // padding: '1rem !important',
            "&::hover": {
            transform: "scale(1.1)",
            },
        },
        img: {
            cursor: "pointer",
            maxWidth:275,
        },
        content: {
            cursor: "default",
            padding: ".5rem 1rem",
            title: {
                textAlign: "center",
            },
            additionalInfo: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            },
        },
    };
    return (
      <Content style={style.wrapper}>
        <Frame animate hover={true} style={style.img}>
          <Image
            animate
            resources={ship.img}
            layer="primary"
            style={style.img}
          ></Image>
          <Content style={style.content}>
            <h3 style={style.content.title}>
              <a href={`/ships/${ship.id}`}>
              {ship.name}
              </a>
            </h3>
            <p style={style.content.additionalInfo}>
              <h6>{ship.cost} credits</h6>
              <span>
                <h5>
                  <Words layer="success">
                    {ship.forSale ? "For Sale" : ""}
                  </Words>
                </h5>
              </span>
            </p>
            <p>
              Listing by{" "}
              <a href={`/users/${ship.owner.id}`}>{ship.owner.name}</a>
            </p>
          </Content>
        </Frame>
      </Content>
    );
}

export default ShipCard