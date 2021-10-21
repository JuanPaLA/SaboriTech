import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap';
import authHeader from '../../services/authentication/auth-header';

export default function DishForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [vegetarian, setVegetarian] = useState(false);
    const [price, setPrice] = useState(0);
    const [available, setAvailable] = useState(true);
    
    let history = useHistory();

    let options = {
        method: 'POST',
        headers: {
            'Authorization' : '',
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'application/json',
        },
        body: ''
    }

    const submit = event => {
        event.preventDefault();
        const new_dish = {
            nombre: name,
            descripcion: description,
            vegetariano: vegetarian,
            precio: price,
            disponible: available
        }
        options.headers.Authorization = authHeader().Authorization
        options.body = JSON.stringify(new_dish);

        fetch(`/api/platillo`, options)
        .then(response => response.json())
        .then(data => {
            if (data && data.id) {
                // dish created successfully (go back to home)
                history.push("/");
            } 
        })
        .catch(e => {
            console.log('NOT SHOULD VE VISIBLE');
        })
    }

    useEffect(()=>{
        console.log('qué pasa aquí');
    },[])

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h3>Crear nuevo plato</h3>
                    <form onSubmit={submit}>
                        <div className="form-item">
                            <label>Nombre</label>
                            <input 
                                type="text" 
                                onChange={e => setName(e.target.value)} 
                            />
                        </div>
                        <div className="form-item">
                            <label>Descripción</label>
                            <textarea rows="4" cols="50"
                                onChange={e => setDescription(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="form-item">
                            <label>Precio</label>
                            <input 
                                type="number" 
                                onChange={e => setPrice(e.target.value)} 
                            />
                        </div>
                        <div className="form-item">
                            <label>Vegetariano</label>
                            <div>
                                <label>
                                    <input type="radio" 
                                        name="vegetarian" 
                                        value={true}
                                        checked={vegetarian === true}
                                        onChange={e => setVegetarian(true)}
                                    />
                                    Si
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" 
                                        name="vegetarian" 
                                        value={false}
                                        checked={vegetarian === false}
                                        onChange={e => setVegetarian(false)}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="form-item">
                            <label>Disponible</label>
                            <div>
                                <label>
                                    <input type="radio" 
                                        name="available" 
                                        value={true}
                                        checked={available === true}
                                        onChange={e => setAvailable(true)}
                                    />
                                    Si
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" 
                                        name="available" 
                                        value={false}
                                        checked={available === false}
                                        onChange={e => setAvailable(false)}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                        <Button 
                            type="submit"
                            variant="primary"
                            disabled={name.length === 0}
                        >
                            Crear
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
