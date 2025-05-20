let express = require("express");
let r = require("./Routing/Route");
let db = require("./Connect");
let user = require("./Models/Usermodel");
let room = require("./Models/Room");
let cors = require("cors");
require("dotenv").config();

const app = express();
const roomRouter = require("./Routing/Roomrouter"); // adjust the path if needed

app.use(express.json());



let Port = process.env.PORT || 3007;

let application = express();

application.use(cors());
application.use(express.json());
application.use("/Web/", r);


// Add data in User collection
let add_user = async function () {
    try {
        await user.create({
            user_name: "Khadija",
            user_email: "khadijaa@gmail.com",
            password: "123456",
            Age: 20,
            Gender: "female",
            Address: "Nazimabad, Karachi"
        });
        console.log("User added");
    } catch (err) {
        console.log("Error adding user:", err.message);
    }
};

// Add data in Room collection
let add_room = async function () {
    try {
        await room.create({
            title: "Deluxe Room",
            price: 3500,
            description: "Spacious deluxe room with sea view and king-size bed",
            image: "uploads/sample.jpg"  // Make sure this file exists or upload logic handles it
        });
        console.log("Room added");
    } catch (err) {
        console.log("Error adding room:", err.message);
    }
};

db().then(() => {
    // Uncomment if you want to run once
    // add_user();
    // add_room();

    application.listen(Port, () => {
        console.log(`Server Started at http://localhost:${Port}/Web/`);
    });
}).catch((e) => {
    console.log("Database connection error:", e.message);
});
