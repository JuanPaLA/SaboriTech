import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const PASSWORD_MIN_LENGTH = 8;

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true)
    const [validPassword, setValidPassword] = useState(false)

    const submit = event => {
        event.preventDefault();
        // connect to /signup api
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
                            <label>Username</label>
                            <input 
                                type="text" 
                                onChange={e => setUsername(e.target.value)} 
                            />
                        </div>
                        <div className="form-item">
                            <label>Password</label>
                            <input 
                                type="password" 
                                onChange={e => setPassword(e.target.value)}
                            />
                            <small>Must contain at least {PASSWORD_MIN_LENGTH} characters</small>
                        </div>
                        <div className="form-item">
                            <label>Repeat Password</label>
                            <input 
                                type="password" 
                                onChange={e => setRepeatPassword(e.target.value)}
                            />
                            {!passwordsMatch && <small className="error-text">Passwords don't match</small>}
                        </div>
                        
                        <Button 
                            type="submit"
                            variant="primary" 
                            disabled={username.length === 0 || !validPassword || !passwordsMatch}
                        >
                            Submit
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
