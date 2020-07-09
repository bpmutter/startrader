import React, { useEffect, useState } from 'react';
import ShipResults from './ShipResults';

const UserShipsForSale = ({id}) =>{
    const [ships, setShips] = useState([])
    useEffect(()=>{
        (async ()=>{
            const res = await fetch(`http://localhost:5000/ships/user/${id}`);
            const data = await res.json();
            setShips(data.star_ships);
            
        })()
    },[ships.length, id])

    return( <ShipResults title="For Sale" ships={ships}/>)
}

export default UserShipsForSale