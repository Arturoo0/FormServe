import { AuthInput } from '../components';
import { useState, useEffect } from 'react';
import { get } from '../utils/baseRequest.js';
import { 
    ButtonGroup,
    Button
} from 'react-bootstrap';

const authContainer = {
    'height': '100vh',
    'widht': '100vw',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems' : 'center',
    'flexDirection' : 'column'
};

const Auth = (props) => {
    const LOGIN = 'login';
    const SIGNUP = 'sign-up';
    const [authType, setAuthType] = useState(LOGIN);
    return (
        <div style={authContainer}>
            <ButtonGroup className='mb-3'>
                <Button variant="secondary" onClick={() => {setAuthType(SIGNUP)}}>Sign-up</Button>
                <Button variant="secondary" onClick={() => {setAuthType(LOGIN)}}>Login</Button>
            </ButtonGroup>
            <AuthInput 
                selectedAuthType={authType}
                attemptAuth={props.attemptAuth}
            />
        </div>
    );
}

export default Auth;