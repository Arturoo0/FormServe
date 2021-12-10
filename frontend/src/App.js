import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { get } from './utils/baseRequest.js';
import Auth from './pages/Auth';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [authAttempted, triggerAuthAttempted] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    async function checkSession(){
        const res = await get('/auth/is-valid-session');
        const { isValidSession, username } = res.data;
        setIsAuthed(isValidSession);
    };
    checkSession();
  }, [authAttempted]); 

  return (
    <BrowserRouter>
      <Auth attemptAuth={triggerAuthAttempted}/>
    </BrowserRouter>
  );
}

export default App;
