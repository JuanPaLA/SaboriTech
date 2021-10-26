import { useState, useEffect } from 'react';
import React from 'react'
import Dish from './dish';
import authHeader from '../../services/authentication/auth-header';

export default function DishList() {
    const [dishes, setDishes] = useState(false);

    useEffect((async) => {
        fetch(`/api/platillo`)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            setDishes(data)
        })
    }, [])

    return (
        <div className="dishes-list">
            {dishes.length >= 0 ? 
                dishes.map((d,i)=>(
                    <Dish
                        key={i}
                        id={d.id} 
                        precio={d.precio}
                        disponible={d.disponible}
                        vegetariano={d.vegetariano}
                        descripcion={d.descripcion}
                        nombre={d.nombre}
                    />
                ))
            :
            'Fetching data from server...'
            }
        </div>
    )
}
