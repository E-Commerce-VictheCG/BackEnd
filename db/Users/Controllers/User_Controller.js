const UserModel = require("../../userModal");


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
        newUser = newUser.toObject()
        delete newUser.password
        const newUserName = newUser.name
        console.log(newUser)
        return(res.send({
            message: `Succesuful; We are happy to have you, ${newUserName}`,
            success: true,
            statusCode: 200,
            newUser
        }))
    }catch(error){
        console.log(error);
        res.send({
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
    const user = await UserModel.findOne({email, password}).select('-password');
    console.log(user)
    if(user) {
        const userName = user.name;
        console.log(userName)
        res.send({
            user,
            message: `Welcome Back, ${userName}`,   
            success: true,
            statusCode: 200,
        })
    }
    else{
        res.send({  
            message: 'Login Unsuccesuful; incorrect username or password',
            success: false,
            statusCode: 401
        })
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

