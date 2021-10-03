import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = event => {
        event.preventDefault();
        // connect to /login api
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h3>Login</h3>
                    <p>No tienes una cuenta? <Link to={'/signup'}>Regístrate aquí</Link></p>
                    <form onSubmit={submit}>
                        <div className="form-item">
                            <label>Nombre de usuario</label>
                            <input 
                                type="text" 
                                onChange={e => setUsername(e.target.value)} 
                            />
                        </div>
                        <div className="form-item">
                            <label>Contraseña</label>
                            <input 
                                type="password" 
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <Button 
                            type="submit"
                            variant="primary"
                            disabled={username.length === 0 || password.length === 0}
                        >
                            Login
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
