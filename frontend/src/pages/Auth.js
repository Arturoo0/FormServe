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

const Auth = () => {
    const LOGIN = 'login';
    const SIGNUP = 'sign-up';
    const [authType, setAuthType] = useState(LOGIN);
    const [authAttempted, triggerAuthAttempted] = useState(false);

    const attemptedAuthetication = () => {
        triggerAuthAttempted(!authAttempted);
    };

    useEffect(() => {
        async function checkSession(){
            const res = await get('/auth/is-valid-session');
            const { isValidSession, username } = res.data;
            console.log(isValidSession, username);
        };
        checkSession();
    }, [authAttempted]); 

    return (
        <div style={authContainer}>
            <ButtonGroup className='mb-3'>
                <Button variant="secondary" onClick={() => {setAuthType(SIGNUP)}}>Sign-up</Button>
                <Button variant="secondary" onClick={() => {setAuthType(LOGIN)}}>Login</Button>
            </ButtonGroup>
            <AuthInput 
                attemptAuth={attemptedAuthetication} 
                selectedAuthType={authType}
            />
        </div>
    );
}

export default Auth;