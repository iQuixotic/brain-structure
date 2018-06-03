const joi = require ('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = joi.validate(req.body, schema);
            console.log(req.body);
            if (result.error) {
                console.log('made it this far    fddfsfadsf sad ');
                return res.status(400).json(result.error);
            }
            if(!req.value) {req.value = {}; }
            req.value['body'] = result.value;
            next();
        }

    },
    schemas: {
        authSchema: joi.object().keys({
            userName: joi.string().required(),
            firstName: joi.string().required(),
            lastName: joi.string().required(),
            email: joi.string().email().required(),
            password: joi.string().required()
            
        })
    }
}