import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Container } from 'react-bootstrap';

// export const exampleUser = () => {
//     let nav = useNavigate();
//     return (
//         <main>
//             <button
//                 onClick={() => {
//                     nav("/Events");
//                 }} 
//                 class={"Button"}
//             >
//                 {" "}
//                 Join Events
//             </button>
//         </main>
//     )
// }

export const ExampleUser = () => {
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
            {/* <AuthProvider> */}
                {/* <Container 
                className="d-flex align-center justify-content-center"
                style= {{ minHeight: "100vh" }}
                >
                    <div className="w-100" style={{ maxWidth: "350px" }}>
                    <Signup />
                    </div>
                </Container> */}
            {/* </AuthProvider> */}
            
            
        </main>
    )
}