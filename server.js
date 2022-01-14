// Add near the top of the file
const db = require('./db/connection');
const prompts = require("./prompts");
require("console.table");

// Start server after DB db
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');

  initialPrompt();
});

