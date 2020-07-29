import React from 'react';
import {Frame, Image, Content, Words} from 'arwes';
const ShipCard = ({ship, hideOwner}) => { 
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
                alignItems: 'center'
            },
        },
    };
    return (
      <Content style={style.wrapper}>
        <Frame animate hover={true} style={style.img}>
          <a href={`/listings/${ship.id}`}>
            <Image
              animate
              resources={ship.starship_type.ship_image}
              layer="primary"
              style={style.img}
            ></Image>
          </a>
          <Content style={style.content}>
            <h3 style={style.content.title}>
              <a href={`/listings/${ship.id}`}>
                {ship.custom_name || ship.starship_type.type_name}
              </a>
            </h3>
            <p style={style.content.additionalInfo}>
              <span>{ship.sale_price} credits</span>
              <span>
                
                  <Words layer="success">
                    {ship.for_sale ? "For Sale" : ""}
                  </Words>
                
              </span>
            </p>
            {!hideOwner && <p>
              Listing by <a href={`/users/${ship.user.id}`}>{ship.user.name}</a>
            </p>}
          </Content>
        </Frame>
      </Content>
    );
}

export default ShipCard