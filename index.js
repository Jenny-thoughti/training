const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, ress) => {
    ress.send('Hello World!');
})

app.listen(port, () => {
    console.log('App Listening on port ${port}')
})