const db = require('../dbconnect');

// Function to add profile data to the database
exports.Adddata = (req, res) => {
  // Extract data from the request body
  const { name, phone_number, email, best_time } = req.body;

  // Validate that all required fields are present
  if (!name || !phone_number || !email || !best_time) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Define the SQL query to insert data into the tbl_profiles table
  const sqlQuery = 'INSERT INTO tbl_profile (name, phone_number, email, best_time) VALUES (?, ?, ?, ?)';

  // Execute the query with the provided data
  db.query(sqlQuery, [name, phone_number, email, best_time], (err, result) => {
    if (err) {
      console.error('Error while inserting data into tbl_profiles:', err);
      return res.status(500).json({ error: 'Failed to insert data into the database' });
    }

    // Send a success response back to the client
    res.status(201).json({ message: 'Profile data added successfully!', insertedId: result.insertId });
  });
};
