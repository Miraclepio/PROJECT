const express = require('express');


require('dotenv').config() 

require('./config/dataBase')

const staffRoutes = require('./route/factoryRoute');

const app = express();
app.use(express.json()) 
const PORT = process.env.PORT || 2222;

app.use('/api/staff', staffRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
