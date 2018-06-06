const joi = require ('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
           
            const result = joi.validate(req.body, schema);
            if (result.error) {
                console.log('result.error');
                return res.status(400).json(result.error);
            }
            if(!req.value) {req.value = {}; }
            req.value['body'] = result.value;
            next();
        }
    },  
    schemas: {
        addAuthSchema: joi.object().keys({
            userName: joi.array().items(joi.string().min(5).max(25).required()),
            firstName: joi.array().items(joi.string().min(2).max(30).required()),
            lastName: joi.array().items(joi.string().min(2).max(30).required()),
            email: joi.array().items(joi.string().min(5).max(30).email().required()),
            password: joi.array().items(joi.string().min(7).max(25).required())
        }),
        loginAuthSchema: joi.object().keys({
            userName: joi.array().items(joi.string().min(5).max(25).required()),
            password: joi.array().items(joi.string().min(7).max(25).required())
        })
    }
}