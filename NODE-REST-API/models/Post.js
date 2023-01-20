const mongoose = require('mongoose');  

const postSchema = new mongoose.Schema(
    {
        userId:{
            type: 'string',
            reqired: true,
        },
        desc:{
            type: 'string',
            max:500,
        },
        img:{
            type: 'string',
        },
        likes:{
            type:Array,
            default:[],
        },
    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("Post", postSchema);