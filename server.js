const express = require('express');
const mongoose = require('mongoose');
const Customer = require('./customer.js')

const app = express();


const url = `mongodb+srv://toddnash:Winter2023$@cluster0.ypw5ypl.mongodb.net/customers`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    });


   // Create new customer instance and save to database.
   //const customer = new Customer({
   // name: 'Joe Fresh',
   // industry: 'Finance',
   //});

   //customer.save();


app.get('/customers', async (req, res) =>{
 // optional list collections    
 //console.log(await mongoose.connection.db.listCollections().toArray());

const result = await Customer.find();

  res.send({"customers": result}).status(200);
});


app.listen(3000, () => {console.log('Successfully connected to port 3000.')});

