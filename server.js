const express = require('express');
const { request } = require('http');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());

const foods = {
    'apple': {
        name: 'Apple',
        size: 'medium',
        carbs: '15g',
        range: "28-44",
        averageGI: '40',
    },
    'white potato' :{
        name: 'White Potato',
        size: 'medium',
        carbs: '34g',
        range: "56-111",
        averageGI: 'High 80s',
    },
    'sweet potato': {
        name: 'Sweet Potato',
        size: 'medium',
        carbs: '24g',
        range: "44-78",
        averageGI: '61',
    },
    'carrot': {
        name: 'Carrot',
        size: '1/2 cup',
        carbs: '6g',
        range: "16-92",
        averageGI: '47',
    },
    'green peas': {
        name: 'Green peas',
        size: '1/2 cup',
        carbs: '11g',
        range: "39-54",
        averageGI: '48',
    },
    'chickpeas': {
        name: 'Chickpeas',
        size: '1 cup',
        carbs: '54g',
        range: "31-36",
        averageGI: '34',
    },
    'soy beans': {
        name: 'Soy Beans',
        size: '1/2 cup',
        carbs: '13g',
        range: "15-20",
        averageGI: '17',
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:foodname', (req, res) => {
    const foodname = req.params.foodname.toLowerCase();
    if (foods[foodname]){
        res.json(foods[foodname]);
    } else {
        res.status(404).send('Food not found');
    }
    });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});