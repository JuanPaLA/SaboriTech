import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function DishForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [vegetarian, setVegetarian] = useState(false);
    const [price, setPrice] = useState(0);
    const [available, setAvailable] = useState(true);


    const submit = event => {
        event.preventDefault();
        const new_dish = {
            name,
            description,
            vegetarian,
            price,
            available
        }
        
        // connect to /create api
        console.log(new_dish)
    }

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
