const express = require('express');
const port = 8000;

const app = express();

app.get('/', (req, res) => {
    res.send("This is our API-101 session.");
})

app.listen(port, () => {
    console.log(`Server running at port ` + port);
});