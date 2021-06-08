const express = require('express');
const app = express();
const path = require('path');
const port = 3030;
const views = path.join(__dirname, 'views');
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(views, 'home.html')));
app.get('/about', (req, res) => res.sendFile(path.join(views, 'about.html')));
app.get('/music', (req, res) => res.sendFile(path.join(views, 'music.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(views, 'contact.html')));


app.listen(port, ()=> console.log(`Servidor corriendo en http://localhost:${port}`));