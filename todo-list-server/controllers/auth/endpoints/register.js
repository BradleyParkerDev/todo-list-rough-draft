const User = require("../../../database/schemas/users.ts") ;

const register = async (req,res) =>{
    try {
        const newUser = new User({
            id: uuidv4(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            password: req.body.password
        });        

        res.json({success: true, newUser: newUser});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.toString()})

    }
}

module.exports = register;