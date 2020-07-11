import React, { useEffect, useState } from 'react';
import ShipResults from './ShipResults';

const UserShipsForSale = ({name, id,user}) =>{
    const [ships, setShips] = useState([])
    useEffect(()=>{
        (async ()=>{
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/ships/user/${id}`);
            const data = await res.json();
            setShips(data.star_ships);
            ships.forEach(ship => ship.user = user)
            
        })()
    },[name, ships.length, id])

    return( <ShipResults hideOwner={true} title={`${name}'s Ships`} ships={ships}/>)
}

export default UserShipsForSale