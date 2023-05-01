const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Chef recipe is working')
})

app.listen(port, () => {
    console.log(`chef recipe is running on port, ${port}`)
})