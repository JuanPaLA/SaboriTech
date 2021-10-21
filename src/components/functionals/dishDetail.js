import React, {useState, useContext } from 'react'
import Dish from './dish';
import DishCount from './dishCount';
import { CartContext } from '../context';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function DishDetail({id,precio,nombre,descripcion,disponible,vegetariano}) {
    const [dishCount, setDishCount] = useState(0);
    const {addDish, isAuth } = useContext(CartContext);

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

        <br />

        {isAuth ? 
        
        <div>
            <h5>Agregar a la orden:</h5>

            <DishCount handleCounterToChild={handleCounterToChild}/>

            <Button variant="primary"
                onClick={()=>addDish(nombre, dishCount, precio)}
            >
                Añadir ${dishCount * precio}
            </Button> 
        </div>

            :

            <h6>Acceda al <span> </span> <Link to="/">login</Link><span> </span> para añadir platillos a su orden de compra</h6>

}
        
        
        </div>
    )
}
