const mongoose = require('mongoose');
const DataBase_url=process.env.DataBase_url;
mongoose.connect(DataBase_url).then(()=>{
    console.log('Database has been connected')
}).catch((err)=>{
    console.log('there is an error trying to connect:',err.message)
})  