const mongoose = require('mongoose');  

const userSchema = new mongoose.Schema(
    {
        username: {
            type: 'string',
            require: true,
            min:3,
            max:20,
            unique: true,
        },
        email: {
            type: 'string',
            required: true,
            max:50,
            unique: true,
        },
        password: {
            type: 'string',
            required:true,
            min:6,
        },
        profilePicture: {
            type: 'string',
            default: '',
        },
        coverPicture: {
            type: 'string',
            default: '',
        },
        followers:{
            type:Array,
            default:[],
        },
        followind:{
            type:Array,
            default:[],
        },
        isAdmin: {
            type:Boolean,
            default:false,
        } 
    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("user", userSchema);