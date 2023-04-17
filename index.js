const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

const UserAgent = require('user-agents'); 
   
const userAgent = new UserAgent();



app.listen(PORT, () => {
  console.log('server started on port ${PORT}');
console.log(userAgent.toString());
});

app.get('/', (req, res) => {
    console.log(userAgent.toString());
    res.send("GET Request Called")
})
