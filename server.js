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
        averageGI: '40',
    },
    'white potato' :{
        name: 'White Potato',
        size: 'medium',
        carbs: '34g',
        averageGI: 'High 80s',
    },
    'sweet potato': {
        name: 'Sweet Potato',
        size: 'medium',
        carbs: '24g',
        averageGI: '61',
    },
    'carrot': {
        name: 'Carrot',
        size: '1/2 cup',
        carbs: '6g',
        averageGI: '47',
    },
    'green peas': {
        name: 'Green peas',
        size: '1/2 cup',
        carbs: '11g',
        averageGI: '48',
    },
    'chickpeas': {
        name: 'Chickpeas',
        size: '1 cup',
        carbs: '54g',
        averageGI: '34',
    },
    'soy beans': {
        name: 'Soy Beans',
        size: '1/2 cup',
        carbs: '13g',
        averageGI: '17',
    },
    'cheddar cheese': {
        name: 'Cheddar Cheese',
        size: '100 g',
        carbs: '1g',
        averageGI: '0',
    },
    'plain sponge cake': {
        name: 'Plain Sponge Cake',
        size: '63g',
        carbs: '36g',
        averageGI: '46',
    },
    'coca cola': {
        name: 'Coca Cola',
        size: '250ml',
        carbs: '26g',
        averageGI: '53',
    },
    'gatorade': {
        name: 'Gatorade',
        size: '250ml',
        carbs: '15g',
        averageGI: '41',
    },
    'bagel':{
        name: 'Bagel',
        size: '70g',
        carbs: '35g',
        averageGI: '72',
    }, 
    'baguette' :{
        name: 'Baguette',
        size: '30g',
        carbs: '15g',
        averageGI: '95',
    }, 
    'gluten free white bread' :{
        name: 'Gluten Free White Bread',
        size: '30g',
        carbs: '15g',
        averageGI: '71',
    },
    'all bran cereal': {
        name: 'All Bran Cereal',
        size: '30g',
        carbs: '15g',
        averageGI: '30',
    },
    'muesli': {
        name: 'Muesli',
        size: '30g',
        carbs: '21g',
        averageGI: '66',
    },
    'porridge': {
        name: 'Porridge',
        size: '250g',
        carbs: '23g',
        averageGI: '69',
    },
    'puffed wheat': {
        name: 'Puffed Wheat',
        size: '30g',
        carbs: '20g',
        averageGI: '67',
    },
    'shredded wheat': {
        name: 'Shredded Wheat',
        size: '30g',
        carbs: '20g',
        averageGI: '67',
    },
    'millet': {
        name: 'Millet',
        size: '150g',
        carbs: '36g',
        averageGI: '71',
    },
    'white rice': {
        name: 'White Rice',
        size: '150g',
        carbs: '30g',
        averageGI: '45',
    },
    'high fat ice cream': {
        name: 'Ice Cream (High Fat)',
        size: '50ml',
        carbs: '10g',
        averageGI: '37',
    },
    'low fat ice cream': {
        name: 'Ice Cream (Low Fat)',
        size: '50ml',
        carbs: '13g',
        averageGI: '50',
    },
    'full fat milk': {
        name: 'Milk (Full Fat)',
        size: '250ml',
        carbs: '12g',
        averageGI: '40',
    },
    'skim milk': {
        name: 'Milk (Skim)',
        size: '250ml',
        carbs: '13g',
        averageGI: '32',
    },
    'yogurt':{
        name: 'Yogurt',
        size: '200ml',
        carbs: '9g',
        averageGI: '36',
    }, 
    'low fat yogurt': {
        name: 'Yogurt (Low Fat)',
        size: '200ml',
        carbs: '13g',
        averageGI: '14',
    },
    'non fat yogurt': {
        name: 'Yogurt (Non Fat)',
        size: '200ml',
        carbs: '14g',
        averageGI: '24',
    },
    'soy milk': {
        name: 'Soy Milk',
        size: '250ml',
        carbs: '23g',
        averageGI: '32',
    }, 
    'apple juice': {
        name: 'Apple Juice',
        size: '120ml',
        carbs: '15g',
        averageGI: '38',
    },
    'dried apple': {
        name: 'Dried Apple',
        size: '60g',
        carbs: '34g',
        averageGI: '29',
    },
    'apricot': {
        name: 'Apricot',
        size: '75g',
        carbs: '9g',
        averageGI: '57',
    },
    'banana': {
        name: 'Banana',
        size: '120g',
        carbs: '24g',
        averageGI: '52',
    },
    'cherries': {
        name: 'Cherries',
        size: '120g',
        carbs: '12g',
        averageGI: '22',
    },
    'cranberry juice': {
        name: 'Cranberry Juice',
        size: '250ml',
        carbs: '31g',
        averageGI: '52',
    },
    'dried dates': {
        name: 'Dates (Dried)',
        size: '60g',
        carbs: '40g',
        averageGI: '103',
    },
    'dried figs': {
        name: 'Figs (Dried)',
        size: '60g',
        carbs: '26g',
        averageGI: '61',
    },
    'grapefruit juice': {
        name: 'Grapefruit Juice',
        size: '250ml',
        carbs: '20g',
        averageGI: '48',
    },
    'grapefruit': {
        name: 'Grapefruit',
        size: '120g',
        carbs: '11g',
        averageGI: '25',
    },
    'grapes': {
        name: 'Grapes',
        size: '120g',
        carbs: '18g',
        averageGI: '46',
    },
    'kiwi': {
        name: 'Kiwi',
        size: '120g',
        carbs: '12g',
        averageGI: '46',
    },
    'mango': {
        name: 'Mango',
        size: '120g',
        carbs: '17g',
        averageGI: '51',
    },
    'oranges': {
        name: 'Oranges',
        size: '120g',
        carbs: '11g',
        averageGI: '42',
    },
    'orange juice': {
        name: 'Orange Juice',
        size: '250ml',
        carbs: '23g',
        averageGI: '52',
    },
    'peaches': {
        name: 'Peaches',
        size: '120g',
        carbs: '11g',
        averageGI: '42',
    },
    'pears': {
        name: 'Pears',
        size: '120g',
        carbs: '13g',
        averageGI: '33',
    },
    'pineapple': {
        name: 'Pineapple',
        size: '120g',
        carbs: '10g',
        averageGI: '59',
    },
    'pineapple juice':{
        name: 'Pineapple Juice',
        size: '250ml',
        carbs: '34g',
        averageGI: '46',
    },
    'plums': {
        name: 'Plums',
        size: '120g',
        carbs: '12g',
        averageGI: '29'
    },
    'strawberries': {
        name: 'Strawberries',
        size: '120g',
        carbs: '3g',
        averageGI: '40'
    },
    'cantaloupe': {
        name: 'Cantaloupe',
        size: '120g',
        carbs: '6g',
        averageGI: '65'
    },
    'watermelon': {
        name: 'Watermelon',
        size: '120g',
        carbs: '6g',
        averageGI: '72'
    },
    'baked beans': {
        name: 'Baked Beans',
        size: '150g',
        carbs: '15g',
        averageGI: '48'
    },
    'kidney beans':{
        name: 'Kidney Beans',
        size: '150g',
        carbs: '25g',
        averageGI: '28'
    },
    'sushi':{
        name: 'Sushi',
        size: '100g',
        carbs: '37g',
        averageGI: '27'
    },
    'linguine':{
        name: 'Linguine',
        size: '180g',
        carbs: '45g',
        averageGI: '52'
    },
    'rice noodles and pasta':{
        name: 'Rice Noodles and Pasta',
        size: '180g',
        carbs: '39g',
        averageGI: '61'
    },
    'spaghetti':{
        name: 'Spaghetti',
        size: '180g',
        carbs: '47g',
        averageGI: '42'
    },
    'chocolate milk':{
        name: 'Chocolate Milk',
        size: '50g',
        carbs: '30g',
        averageGI: '42'
    },
    'mars bar': {
        name: 'Mars Bar',
        size: '60g',
        carbs: '40g',
        averageGI: '65'
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