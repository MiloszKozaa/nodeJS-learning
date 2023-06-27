const express = require('express');
const port = 9002;


const app = express();

app.get('/', (req, res) => {
  res.json({
    name: 'Shopping Assistant',
    message: `I'm going to help you with your shopping`,
  });
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});