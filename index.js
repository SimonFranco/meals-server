const express = require('express');
const userRoutes = require('./userRoutes')
const app = express();
const cors = require('cors')
require('./db')
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(userRoutes);

app.listen(5000,()=>{
    console.log('Server running at port 5000');
})