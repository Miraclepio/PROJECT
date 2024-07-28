
const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    fullname:
     {
         type: String,
         
          },
          
    age: { type: Number, 
    
         min: 18,
          max: 65 },
    MaritalStatus: { type: String,
         
          enum: ['single', 'married', 'divorced'] },
    address: { type: String, 
         },
    gender: { type: String

    },
        
         
    academicQualification: { type: String,
         },
    stateOfOrigin: { type: String,
         },
    resumptionTime: { type: Date},
    closureTime: { type: Date }
});
staffmodel=mongoose.model("staff",staffSchema)

module.exports = staffmodel
