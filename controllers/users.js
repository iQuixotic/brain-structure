module.exports = {
    register: async (req, res, next) => {
        console.log('UsersController.register() called !');

        const {email, password, firstN, lastN, userN} = req.value.body;
    },
    signIn: async (req, res, next) => {
        // Generate token
        console.log('the users sign in route has been hit !');
    },
    secret: async (req, res, next) => {
        console.log('UsersController.secret() called !');
    }

}