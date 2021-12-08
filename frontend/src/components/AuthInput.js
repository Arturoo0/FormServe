import { 
    Form,
    Button
} from 'react-bootstrap';
import { useState } from 'react';
import { post } from '../utils/baseRequest';

const inputContainer = {
    'width': '300px'
};

const AuthInput = () => {
    const [inputEmail, setInputEmail] = useState(null);
    const [inputUsername, setInputUsername] = useState(null);
    const [inputPassword, setInputPassword] = useState(null);
    return (
        <div style={inputContainer}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        onChange={(e) => {setInputEmail(e.target.value)}} 
                        type="email" 
                        placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        onChange={(e) => {setInputUsername(e.target.value)}} 
                        type="username" 
                        placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        onChange={(e) => {setInputPassword(e.target.value)}} 
                        type="password" 
                        placeholder="Enter password" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={async () => {
                    const res = await post('/auth/sign-up', {
                        email: inputEmail,
                        username: inputUsername,
                        password: inputPassword
                    })
                }}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AuthInput;