const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const app = express();
const port =3000; 

const database = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "professor",
    password: "7758258Chen",
    port: 5432,
});

database.connect();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
// Main page
app.get('/', (req, res) => {
  res.render('index', { title: 'Rate My Professor' });
});

// Search for professors
app.get('/search/professor', (req, res) => {
    res.render('index', { title: 'Rate My Professor' });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
