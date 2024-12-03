const express = require('express');
const app = express();
const PORT = 4000;

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World! UI Assignment 8. Done by Divyanshu Vijay');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT :: ${PORT}`);
});