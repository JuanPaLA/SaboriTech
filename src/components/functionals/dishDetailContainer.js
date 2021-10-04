import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import DishDetail from './dishDetail';

export default function DishDetailContainer(props) {
    const [dish, setDish] = useState(false);
    const {id} = useParams();

    useEffect((async) => {
        fetch(`/api/platillo/${id}`)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            setDish(data)
        })
    }, [])

    return (
        <div>
            {dish ? 
            <DishDetail 
                id={dish.id} 
                precio={dish.precio}
                disponible={dish.disponible}
                vegetariano={dish.vegetariano}
                descripcion={dish.descripcion}
                nombre={dish.nombre}
            />
                :
            'Fetching data from database'}
        </div>
    )
}
