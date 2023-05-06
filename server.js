const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin:'*'
}))

    const ingredients = [
    {
        "id": "1",
        "item": "Bacon"
    },
    {
        "id": "2",
        "item": "Eggs"
    },
    {
        "id": "3",
        "item": "Milk"
    },
    {
        "id": "4",
        "item": "Butter"
    }
];

app.get('/ingredients', (req, res) =>{
    res.send(ingredients);
});
app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});