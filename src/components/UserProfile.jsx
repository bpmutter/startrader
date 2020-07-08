import React, { useContext, useEffect, useState } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { Content, Image, Frame, Button, withStyles, Loading } from "arwes";
import ShipResults from './ShipResults';
import appContext from './Context';

const user = { 
    id: 1, 
    name: 'Luke Skywalker', 
    'email': 'lukeskywalker@aol.com',
    'species': 'Human', 
    'bio': 'Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known.',
    'faction': true, 
    'credits': 1000000, 
    'user_image': 'https://starwars-trader-imgs.s3.us-east-2.amazonaws.com/img/characters/01.jpg', 
    'force_points': 0
}

const styles = (theme) => ({
  profileWrapper: {
    margin: "1rem 10rem 4rem",
    [`@media (max-width: ${theme.responsive.medium + 1}px)`]: {
      margin: "1rem 5rem",
    },
    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      margin: "1rem",
    },
  },
  profileContentWrapper: {
    margin: "1rem 0rem",
  },
  profileContent: {
    padding: ".75rem",
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    alignItems: "center",
    justifyItems: "center",
    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      gridTemplateColumns: "1fr",
    },
  },
  profilePicture: {
    maxWidth: 250,
    marginTop: "1rem",
  },
  profileInfo: {
    padding: "1rem",
  },
  profileName: {
    display: "flex",
    justifyContent: "space-between",
  },
});


const UserProfile = ({classes, personalProfile}) => {
    const paramId = useParams().id;
    const context = useContext(appContext);
    const id = context.user.id
    console.log("context", paramId, context)
    console.log("context ID::", id)
    console.log("personal profile::", personalProfile)
    const [user, setUser] = useState({});
    

    //TODO REFACTOR AWAY FROM LOCAL STORAGE also

    useEffect(()=>{
      ( async ()=>{
        console.log('derppp')
        const res = await fetch(`http://localhost:5000/users/${personalProfile ? id : paramId}`);
        const {user} = await res.json();
        console.log('USER::',user)
        setUser(user);
      })();
    },[paramId, personalProfile, id, user.id]);

    if (paramId === id) {
      return <Redirect to="/profile" />;
    }

    return (
      <>{!user.id ? 
        <div>
            <Loading animate />
            <Loading animate small />
            <div style={{ position: "relative", width: 200, height: 200 }}>
              <Loading animate full />
            </div>
          </div>
        : <Content className={classes.profileWrapper}>
        <div className={classes.profileContentWrapper}>
          <Frame animate level={3} corners={4}>
            <section className={classes.profileContent}>
              <Image
                resources={user.user_image}
                animate
                layer="primary"
                className={classes.profilePicture}
              ></Image>
              <div className={classes.profileInfo}>
                <div className={classes.profileName}>
                  <h1>{user.name}</h1>
                  {/* TODO: make button do something..load modal i guess... */}
                  {personalProfile ? <Button>Edit Profile</Button> : ""}
                </div>
                {personalProfile ? <p>{user.credit} credits</p> : ""}
                <p className={classes.profileAdditionalInfo}>
                  <span>{user.species_info.species_type}</span>
                  {" • "}
                  <span>{user.faction ? "Rebellion" : "Empire"}</span>
                </p>
                <p className={classes.profileBio}>{user.bio}</p>
              </div>
            </section>
          </Frame>
        </div>
        <section>
          <ShipResults title="For Sale" ships={user.starships} />
        </section>
        <section>{/* TODO: CREATE AND ADD TRANSACTION TABLE */}</section>
      </Content>}</>
      
    );
}

export default withStyles(styles)(UserProfile);