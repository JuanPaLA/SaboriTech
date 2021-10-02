import React, {useState, useContext } from 'react'
import Dish from './dish';
import DishCount from './dishCount';
import { CartContext } from '../context';

export default function DishDetail({id,precio,nombre,descripcion,disponible,vegetariano}) {
    const [dishCount, setDishCount] = useState(0);
    const {addDish } = useContext(CartContext);

    function handleCounterToChild(c) {
        setDishCount(c);
    }

    return (
        <div>
        <Dish
            id={id} 
            precio={precio}
            disponible={disponible}
            vegetariano={vegetariano}
            descripcion={descripcion}
            nombre={nombre}
        />

        <DishCount handleCounterToChild={handleCounterToChild}/>


        <input
            type="button"
            value={`Añadir al carrito ${dishCount}`}
            onClick={()=>addDish(nombre,dishCount, precio)}
        />
        
        </div>
    )
}
