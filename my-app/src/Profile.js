import React from 'react';
import {useNavigate} from 'react-router-dom';
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';

export const Profile = () => {
    let nav = useNavigate();
    return (
        <main>
            <button
                onClick={() => {
                    nav("/Events");
                }} 
            >
                {" "}
                Join Events
            </button>
            <AuthProvider>
                <Container 
                className="d-flex align-center justify-content-center"
                style= {{ minHeight: "100vh" }}
                >
                    <div className="w-100" style={{ maxWidth: "350px" }}>
                    <Signup />
                    </div>
                </Container>
            </AuthProvider>
            
            
            
        </main>
    )
}