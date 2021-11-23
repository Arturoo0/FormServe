require('dotenv').config(); 

const cors = require('cors');
const express = require('express'); 
const cookieParser = require('cookie-parser');

const appStartTime = Date.now();

const startApp = async () => {
  const port = 3000;
  const app = express();

  app.use(cors({
    credentials: true 
  }));
  app.use(cookieParser());
  app.use(express.urlencoded({
      extended: true
  }));
  app.use(express.json()); 

  app.get('/', (req, res) => {
    const status = {
      uptime: Date.now() - appStartTime
    }
    res.send(status);
  });

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
}

startApp();
