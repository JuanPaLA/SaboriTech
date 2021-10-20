import React, {useContext, useEffect} from 'react';
import DishList from './dishList';
import { Link } from 'react-router-dom';
import {CartContext} from '../context';

export default function DishListContainer(props) {
    const {isAuth} = useContext(CartContext);
    
    useEffect(()=>{
        console.log(isAuth);
    },[])
    return (
        <div>
            <h5>Bienvenido/a {props.user}, esta es nuestra selección de platos: </h5>
            {isAuth ? <Link to="/createdish">+ Crear nuevo plato</Link> : null}
            <DishList/>
        </div>
    )
}
