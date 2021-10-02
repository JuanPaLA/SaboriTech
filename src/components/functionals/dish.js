import {Link} from 'react-router-dom';

import React from 'react'

export default function Dish({nombre, descripcion, precio, vegetariano,disponible,id}) {
    return (
        <div>
            <Link to={{ pathname: `/dishdetail/${id}`}}>
                <h4>{nombre}</h4>
            </Link>
            <ul>
                <li>Precio: {precio}</li>
                <li>Disponible: {disponible}</li>
                <li>Descripcion: {descripcion}</li>
                <li>Vegetariano: {vegetariano}</li>
            </ul>
        </div>
    )
}
