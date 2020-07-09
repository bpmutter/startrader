import React, { useEffect, useState, useContext } from 'react';
import {useParams} from 'react-router-dom';
import { Content, Image, Frame, Button, withStyles, Link} from "arwes";
import LoadingBig from './LoadingBig';
import appContext from './Context';
import EditListingModal from './EditListingModal';

const styles = (theme) => ({
  contentInFrame: {
    padding: ".5rem",
  },
  container: {
    padding: "1.5rem",
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    gridTemplateRows: "auto auto",
    gridAutoRows: "minmax(300px, auto)",
    [`@media (max-width: ${theme.responsive.medium + 1}px)`]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto auto auto auto",
    },
  },
  img: {
    maxWidth: "100%",
    margin: ".75rem",
    gridColumn: "1/2",
    gridRow: "1 /2",
    [`@media (max-width: ${theme.responsive.medium + 1}px)`]: {
      gridColumn: "1/2",
      gridRow: "1 /2",
    },
  },
  infoWrapper: {
    width: "100%",
    height: "100%",
    margin: ".75rem",
    padding: ".5rem",
    gridColumn: "2/3",
    gridRow: "1 /3",
    [`@media (max-width: ${theme.responsive.medium + 1}px)`]: {
      gridColumn: "1/2",
      gridRow: "2/3",
      margin: 0,
    },
  },
  mainInfo: {
    marginBottom: "1rem",
  },
  seller: {
    gridColumn: "2/3",
  },
  sellerContent: {
    padding: ".5rem",
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
  },
  sellerImg: {
    gridColumn: "1/2",
    margin: ".5rem",
    maxWidth: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sellerInfo: {
    gridColumn: "2/3",
    padding: ".5rem",
  },
  additionalInfo: {
    padding: ".5rem",
    gridColumn: "1/2",
    gridRow: "2 / 3",
    height: '100%',
    [`@media (max-width: ${theme.responsive.medium + 1}px)`]: {
      gridColumn: "1/2",
      gridRow: "3/4",
    },
  },
});

const ListingPage = ({classes}) => { 
    const shipId = parseInt(useParams().id);
    const {id, user} = useContext(appContext);
    const [ship, setShip] = useState({});

    useEffect(()=>{
      (async ()=>{
        const res = await fetch(`http://localhost:5000/ships/${shipId}`)
        const {star_ship} = await res.json();
        console.log(star_ship)
        setShip(star_ship);
      })()
    },[shipId, ship.id])

    const triggerRender = () => {
      (async () => {
        const res = await fetch(`http://localhost:5000/ships/${shipId}`);
        const { star_ship } = await res.json();
        console.log(star_ship);
        setShip(star_ship);
      })();
    }
    return (
      <>
        {!ship.id ? (
          <LoadingBig />
        ) : ( 
          <Content className={classes.container}>
            <div className={classes.img}>
              <Image
                animate
                layer="primary"
                resources={ship.starship_type.ship_image}
              ></Image>
            </div>
            <div className={classes.infoWrapper}>
              <Content className={classes.mainInfo}>
                <Frame animate level={3} corners={4}>
                  <Content className={classes.contentInFrame}>
                    <h1>{ship.custom_name || ship.starship_type.type_name}</h1>
                    <p>Price: {ship.sale_price} credits</p>
                    <p>Lightyears Traveled: {ship.lightyears_traveled}</p>
                    <p>Type: {ship.starship_type.type_name}</p>
                    <p>Model: {ship.starship_type.model}</p>
                    <p>Manufacturer: {ship.starship_type.manufacturer}</p>
                    <p>Class: {ship.starship_type.starship_class}</p>
                    <p>Seller Comment: {ship.seller_comment}</p>
                    {ship.user.id === id ? (
                      <EditListingModal
                        listing={ship}
                        rerenderParent={()=>triggerRender()}
                      />
                    ) : ship.for_sale ? (
                      <Button animate layer="success">
                        Buy Now
                      </Button>
                    ) : (
                      <Button animate disabled>
                        Not For Sale
                      </Button>
                    )}
                  </Content>
                </Frame>
              </Content>
              <Content className={classes.seller}>
                <Frame animate level={3} corners={4}>
                  <Content className={classes.sellerContent}>
                    <Content className={classes.sellerImg}>
                      <Image resources={ship.user.user_image}></Image>
                    </Content>
                    <Content className={classes.sellerInfo}>
                      <h2>Seller Info</h2>
                      <p>{ship.user.name}</p>
                      <Link href={`/users/${ship.user.id}`}>
                        <Button>Go to Profile</Button>
                      </Link>
                    </Content>
                  </Content>
                </Frame>
              </Content>
            </div>

            <div className={classes.additionalInfo}>
              <Frame animate level={3} corners={4}>
                <Content className={classes.contentInFrame}>
                  <h3>Additional Info</h3>
                  <div>
                    <h4>Capacity</h4>
                    <ul>
                      <li>Cargo: {ship.starship_type.cargo}</li>
                      <li>Consumables: {ship.starship_type.consumables}</li>
                      <li>Crew: {ship.starship_type.crew}</li>
                      <li>Passengers: {ship.starship_type.passengers}</li>
                      <li>Length: {ship.starship_type.length}</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Speed</h4>
                    <ul>
                      <li>Base speed: {ship.starship_type.mglt}</li>
                      <li>
                        Hyperdrive Rating:{" "}
                        {ship.starship_type.hyperdrive_rating}
                      </li>
                    </ul>
                  </div>
                </Content>
              </Frame>
            </div>
          </Content>
        )}
      </>
    );
}

export default withStyles(styles)(ListingPage);