const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './views/home.html'));
});


app.get('/registro', (request, response) => {
    response.sendFile(path.join(__dirname, './views/register.html'));
});


app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, './views/login.html'));
});



/* ------Servidor en escucha ---*/

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo');
});
