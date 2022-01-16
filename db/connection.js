const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      port: 3001,
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'test',
      database: 'employee_vision'
    },
    console.log('Connected to the Employee Vision database.')
  );

  // Start server after DB db
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');

 
});


