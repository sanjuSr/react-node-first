const express = require('express');
const app = express();
const port = 3001; // You can use any port you prefer
const cors=require("cors")
app.use(express.json());
app.use(cors({origin:true}))

// Define a route to handle signup
app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;
  // Perform user registration logic here
  // You can use a database to store user data

  // Respond with a success message or an error message
  res.json({ message: 'Signup successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});