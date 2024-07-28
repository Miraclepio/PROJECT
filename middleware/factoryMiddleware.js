const Joi = require('@hapi/joi');


// Staff schema validation
const schema = Joi.object({
    fullname: Joi.string().min(3).required().trim().pattern(/^[A-Z][a-zA-Z'-]+( [A-Z]\.)?( [A-Z][a-zA-Z'-]+)+$/)
    .messages({
        'string.pattern.base': 'Fullname must be in letters only and follow the correct format',
        'string.min':'Fullname must be at least three characters in length',
        'string.empty': 'Fullname cannot be left empty',
        'any.required':'fullname is required'
        
    }),
    age: Joi.number().integer().min(18).max(65).required().messages({
        'number.empty': 'Number cannot be left empty',
        'number.base': 'Age must be a number',
        'number.min': 'Age must be at least 18',
        'number.max': 'Age must be at most 65',
        'any.required':'age is required'
        
        
    }),
    MaritalStatus: Joi.string().trim().valid('single', 'married', 'divorced').required().messages({
        'any.only': 'Marital Status must be one of [single, married, divorced]',
        'any.required':'Marital status is required'

        
      
    
    }),
    address: Joi.string().required().messages({
        'string.empty': 'Address cannot be left empty',
        'any.required':'address is required'
    }),
    gender: Joi.string().trim().valid('male', 'female').required().messages({
        'any.only': 'Gender must be one of [male, female]',
        'any.required':'gender is required'
    }),
    academicQualification: Joi.string().trim().required().messages({
        'string.empty': 'Academic Qualification cannot be left empty',
        'string.base': 'Academic Qualification must be in letters only',
        'any.required':'Academic Qualification is required'
    }),
    stateOfOrigin: Joi.string().trim().required().messages({
        'string.empty': 'State of Origin cannot be left empty',
        'string.base': 'State of Origin must be in letters only',
        'any.required':'state of origin is required'
    }),
    resumptionTime: Joi.date().optional().messages({
        'date.base': 'Resumption Time must be a valid date',
        
    }),
    closureTime: Joi.date().optional().messages({
        'date.base': 'Closure Time must be a valid date'
    })
})
   

const validateStaff = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ errors: error.details.map(detail => detail.message) });
    }

    next();
};

module.exports = { validateStaff };
