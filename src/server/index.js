const express = require('express');
const mysql = require('mysql2');

const app = express();

// Configure the database connection
const db = mysql.createConnection({
    host: 'your-database-host',
    user: 'your-database-username',
    password: 'your-database-password',
    database: 'your-database-name',
  });
  
  // Handle incoming data from HTML form
  app.post('/submit-data', (req, res) => {
    const data = req.body; // Assuming you are using a form POST request
  
    // Insert data into the database
    db.query('INSERT INTO your_table (column1, column2) VALUES (?, ?)', [data.field1, data.field2], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Error inserting data into the database' });
      } else {
        res.status(200).json({ message: 'Data inserted successfully' });
      }
    });
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
});