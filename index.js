const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const app = express();
const port =3000; 

app.set('view engine', 'ejs'); 

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
    res.render('index.ejs', { title: 'Rate My Professor' });

  });
  

// Search for professors
app.get('/search', async(req, res) => {
    
    try {
        const result = await database.query('SELECT * FROM professors');
        res.json(result.rows);
      } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Internal Server Error');
      }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
