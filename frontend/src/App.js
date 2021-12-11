import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { get } from './utils/baseRequest.js';
import Auth from './pages/Auth';
import Home from './pages/Home';
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
      {
        (isAuthed) ? 
          <Routes>
            <Route path='/' element={
              <Home />
            }/>
          </Routes>
          :
          <Routes>
            <Route path='/' element={
              <Auth attemptAuth={triggerAuthAttempted}/>
            }/>
          </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
