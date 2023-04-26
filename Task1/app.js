// express module
const express = require('express');

//Inbuild filesystem package
const fs = require('fs');

const app = express();
// body-parser
app.use(express.json());

// Define the endpoint for the API
app.post('/employees', (req, res) => {
  // Get the data from the request body
  const {employees}  = req.body;
  
  // Write the data to a file
  fs.writeFile('employees.txt', JSON.stringify(employees), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to file');
    } else {
      res.status(200).send('Data written to file');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
