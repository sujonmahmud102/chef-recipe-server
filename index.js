const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors())

const chef = require('./data/chef.json');
const recipes = require('./data/recipes.json');

app.get('/', (req, res) => {
    res.send('Chef recipe is working')
})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipe = recipes.find(r => r.id === id);
    res.send(selectedRecipe);

})

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chefRecipe = recipes.filter(r => parseInt(r.chef_id) === id);
    res.send(chefRecipe);
})

app.listen(port, () => {
    console.log(`chef recipe is running on port, ${port}`)
})