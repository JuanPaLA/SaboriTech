import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import authService from '../../services/authentication/auth.service'
import { CartContext } from "../context";
import { useHistory } from "react-router-dom";
const PASSWORD_MIN_LENGTH = 8;

export default function Login() {
    const authContext = React.useContext(CartContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true)
    const [validPassword, setValidPassword] = useState(false)
    
    let history = useHistory();
    
    const submit = event => {
        event.preventDefault();
        // connect to /signup api
        authService.register(username, ['user'], password)
        .then((response) => {
          if (response.id) {
            authContext.login();
          }
        })
        .then(()=>{
            history.push("/login");
        })
        .catch((e) => {
          console.log(e);
        });
    }

    useEffect(() => {
        setValidPassword(password.length >= PASSWORD_MIN_LENGTH);
    }, [password])

    useEffect(() => {
        setPasswordsMatch(password === repeatPassword);
    }, [password, repeatPassword])

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h3>Sign up</h3>
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
                            <small>Debe contener al menos {PASSWORD_MIN_LENGTH} caracteres</small>
                        </div>
                        <div className="form-item">
                            <label>Repetir contraseña</label>
                            <input 
                                type="password" 
                                onChange={e => setRepeatPassword(e.target.value)}
                            />
                            {!passwordsMatch && <small className="error-text">Las contraseñas no coinciden</small>}
                        </div>
                        
                        <Button 
                            type="submit"
                            variant="primary" 
                            disabled={username.length === 0 || !validPassword || !passwordsMatch}
                        >
                            Crear
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
