import React, {useState, useContext } from 'react'
import Dish from './dish';
import DishCount from './dishCount';
import { CartContext } from '../context';
import { Button } from 'react-bootstrap';

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

        <Button variant="primary"
            onClick={()=>addDish(nombre, dishCount, precio)}
        >
            Añadir al carrito ${dishCount*precio}
        </Button>
        
        </div>
    )
}
