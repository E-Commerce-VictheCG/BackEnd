const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "can't be blank"],
    },
    email:{
        type: String,
        required: [true, "can't be blank"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "can't be blank"],
        minlength: [4, 'Minimum length must be 4']
    }
    
})
// const hashpassword = async (next) => {
//     const salt = await bcrypt.genSalt()
//     this.password = bcrypt.hash(this.password, salt)
//     next()
// }

// userSchema.pre('save', async function (next) {
//     // let saltRounds = 10;
//     const salt = await bcrypt.genSalt();
//     this.password = bcrypt.hash(this.password, salt);
//     next();
// });


module.exports = mongoose.model("users", userSchema)    