let mongo = require("mongoose");

let booking = mongoose.Schema({
    guest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest",
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: true
    },
    created_at:{
        type:Date,
        default:Date.now
        }
    
});

module.exports=mongo.model("Booking",booking)