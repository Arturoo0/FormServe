require('dotenv').config(); 
const express = require('express'); 
const app = express();
const port = 3000; 

console.log(process.env.TEST);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
