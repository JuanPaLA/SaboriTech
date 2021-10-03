import {Link} from 'react-router-dom';

import React from 'react'

export default function Dish({nombre, descripcion, precio, vegetariano,disponible,id}) {
    return (
        <div className="dish-card">
            <Link to={{ pathname: `/dishdetail/${id}`}}>
                <h4>{nombre}</h4>
            </Link>
            <ul>
                <li>Descripcion: {descripcion}</li>
                <li>Precio: {precio}</li>
                <li>Disponible: {disponible ? 'si' : 'no'}</li>
                <li>Vegetariano: {vegetariano ? 'si' : 'no'}</li>
            </ul>
        </div>
    )
}
