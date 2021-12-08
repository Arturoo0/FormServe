import { AuthInput } from "../components";

const authContainer = {
    'height': '100vh',
    'widht': '100vw',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems' : 'center'
};

const Auth = () => {
    return (
        <div style={authContainer}>
            <AuthInput />
        </div>
    );
}

export default Auth;