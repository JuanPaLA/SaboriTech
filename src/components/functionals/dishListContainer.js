import React from 'react';
import DishList from './dishList';
import { Link } from 'react-router-dom';

export default function DishListContainer(props) {
    return (
        <div>
            <h5>Welcome {props.user} to our finest dishes selection</h5>
            <Link to="/createdish">+ Crear nuevo plato</Link>
            <DishList/>
        </div>
    )
}
