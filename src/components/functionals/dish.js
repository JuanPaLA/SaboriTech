import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function Dish({nombre, descripcion, precio, vegetariano,disponible,id}) {
    return (
        <Card className="dish-card">
            <Card.Body>
                <Card.Title>
                    <Link to={{ pathname: `/dishdetail/${id}`}}>{nombre}</Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {descripcion}
                </Card.Subtitle>
                <Card.Text>
                    Disponible: {disponible ? 'si' : 'no'}<br/>
                    Vegetariano: {vegetariano ? 'si' : 'no'}<br/>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                Precio: ${precio}
            </Card.Footer>
        </Card>
    )
}
