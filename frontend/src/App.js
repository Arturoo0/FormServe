import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { get } from './utils/baseRequest.js';
import Auth from './pages/Auth';

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
    <div className="App">
      <Auth attemptAuth={triggerAuthAttempted}/>
    </div>
  );
}

export default App;
