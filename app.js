const express = require("express");
const app = express();
const PORT = 8001;


app.get('/', (req, res) => {
    res.send('Hello Express!');
  });

  app.get('/sum', (req, res) => {
      const a = parseInt(req.query.a);
      const b = parseInt(req.query.b);
      const c = a + b
      const sum = `The sum of ${a} and ${b} is ${c}`;

    res.send(`${sum}`);
  });


  app.get('/cipher', (req, res) => {
      const text = req.query.text;
      const shift = parseInt(req.query.shift);
      
      const textToNumber = text.charCodeAt() + shift;
      const numberToText = String.fromCharCode(textToNumber);
      
      
  res.send(`${numberToText}`);
});








app.listen(PORT, () => {
    console.log('Express server is listening on port 8001!');
  });