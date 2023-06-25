const UserModel = require("../../userModel");


const HandleUserRegister = async(req, res) => {
    const data = req.body;
    const userEmailExists = await UserModel.countDocuments({ email: data.email });

    if(userEmailExists) {
        return(res.status(409).json({
            message: "User already exists",
            success: false,
            statusCode: 409
        }))
    }

    try {
        let newUser = new UserModel(data)
        newUser = await newUser.save();
        return(res.status(500).json({
            message: 'Succesuful',
            success: true,
            statusCode: 200,
            newUser
        }))
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Registration unsuccessful!",
            success: false,
            error,
            statusCode: 500
        }); 
    }
    
    // let result = await user.save()
    // res.send(result)
}
const HandleUserLogin = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await UserModel.findOne({email, password});
        // let User = new UserModel(data)
        // newUser = await newUser.save();
        return(
            // res.send(user.select("-password"))
            res.status(200).json({
                message: 'Succesuful',
                success: true,
                statusCode: 200,
                user
            }));
    }catch(error){
        console.log(error)
        return(
            res.status(401).json({  
                message: 'Login Unsuccesuful',
                error,
                success: false,
                statusCode: 401
            })
        )
    }
    
    // let result = await user.save()
    // res.send(result)
}

const HandleGetUser = async (req, res) => {
    // const {name, email} = req.body;

    try {
        const users = await UserModel.find();
        // let User = new UserModel(data)
        // newUser = await newUser.save();
        return(
            // res.send(user.select("-password"))
            res.status(200).json({
                message: 'Succesuful',
                success: true,
                statusCode: 200,
                users
            }));
    }catch(error){
        console.log(error)
        return(
            res.status(401).json({  
                message: 'Users not found',
                error,
                success: false,
                statusCode: 401
            })
        )
    }
    
    // let result = await user.save()
    // res.send(result)
}
module.exports = {
    HandleUserRegister,
    HandleUserLogin,
    HandleGetUser
}
// app.post('/register', async (req, res) => {
//     let user = new User(req.body)
//     let result = await user.save()
//     res.send(result)
// })

// app.get('/register', (req, res) => {
//     res.send('WELCOME')
// })

