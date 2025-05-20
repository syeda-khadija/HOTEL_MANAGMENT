let Room = require("../Models/Room");
let nodemailer = require("nodemailer");
require("dotenv").config();


let roomController = {
    home: async function(req, res) {
        res.send("Room Home Page");
        res.end();
    },

    create_room: async function(req, res) {
        try {
          let { room_type, description, room_number,floor_no, no_of_bed, price, is_available } = req.body;
      
          let check_room = await Room.findOne({ room_number });
          if (check_room) {
            return res.status(409).json({ msg: "Room number already exists" });
          }
      
          // image path or filename from multer
          const image = req.file ? req.file.filename : null; 
          if (!image) {
            console.log("image is required")
            return res.status(400).json({ msg: "Image is required" });
          }
      
          let room_data = new Room({
            room_type,
            description,
            room_number,
            floor_no,
            no_of_bed,
            price,
            is_available,
            image // now it's a string (filename)
          });
      
          await room_data.save();
          res.status(200).json({ msg: "Room created successfully" });
      
          let Email_body = {
            to: process.env.EMAIL,
            from: process.env.EMAIL,
            subject: "New Room Created",
            html: `<h3>New Room Added</h3><p>Room Number: ${room_number}<br/>Type: ${room_type}</p>`
          };
      
          email_info.sendMail(Email_body, function(error, info) {
            if (error) {
              console.log(error.message);
            } else {
              console.log("Notification email sent");
            }
          });
        } catch (error) {
            console.log(error.message);
          res.status(501).json({ msg: error.message });
        }
      },
      

    get_rooms: async function(req, res) {
        try {
            let rooms = await Room.find().sort({ created_at: -1 });
            res.status(200).json(rooms);
        } catch (error) {
            res.status(501).json({ msg: error.message });
        }
    },

    delete_room: async function(req, res) {
        try {
            let { id } = req.params;
            let room = await Room.findById(id);

            if (room) {
                await Room.findByIdAndDelete(id);
                res.status(200).json({ msg: "Room deleted successfully" });
            } else {
                res.status(404).json({ msg: "Room not found" });
            }
        } catch (error) {
            res.status(501).json({ msg: error.message });
        }
    },

    update_room: async function(req, res) {
        try {
            let { id } = req.params;
            let { room_type, description, room_number, no_of_bed, price, image, is_available } = req.body;

            let room = await Room.findById(id);
            if (room) {
                await Room.findByIdAndUpdate(id, {
                    room_type,
                    description,
                    room_number,
                    no_of_bed,
                    price,
                    image,
                    is_available
                });
                res.status(200).json({ msg: "Room updated successfully" });
            } else {
                res.status(404).json({ msg: "Room not found" });
            }
        } catch (error) {
            res.status(501).json({ msg: error.message });
        }
    }
};

module.exports = roomController;
