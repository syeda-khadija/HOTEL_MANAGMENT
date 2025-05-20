let mongo =require("mongoose");

let Room_collection=mongo.Schema({
    room_type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    room_number:{
        type:String,
        require:true,
        unique:true
    },
    no_of_bed:{
        type:Number,
        required:true
    },
    is_available: {
        type: Boolean,
        default: true
    },
    price :{
        type:Number,
        required:true
    }, 
     image: {
        type: String,     // This will store the URL or path of the image
        required: false   // Optional, set to true if image is mandatory
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongo.model("Room",Room_collection)