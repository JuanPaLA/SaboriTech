import { useState, useEffect } from 'react';
import React from 'react'
import Dish from './dish';

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
            {dishes ? 
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
