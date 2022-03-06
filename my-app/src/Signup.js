import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import {useNavigate} from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { ExampleUser } from './ExampleUser';

export default function Signup() {
    let nav = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleEvent(e) {
        e.preventDefault()

        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
                return setError('Password do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value) 
        } catch {
            setError('Failed to create account')
        
        }
        
        setLoading(false)

        // signup(emailRef.current.value, passwordRef.current.value)
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref ={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref ={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref ={passwordConfirmRef} required />
                    </Form.Group>
                    <Button className="w-100 mt-2" onClick={() => {
                        nav("/ExampleUser");
                    }} 
                    class={"button"} >
                        {" "}
                        Sign Up
                    </Button>
{/* 
                   <Button className="w-100 mt-2" type="submit">Sign Up</Button> */}
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Already have an account? Login
        </div>
    </>
  )
}
