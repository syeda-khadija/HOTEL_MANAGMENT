import React, { useState } from 'react';
import Adminnavbar from './Adminnavbar';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export default function Hotelroom() {
  const [roomtype, setRtype] = useState('');
  const [description, setDes] = useState('');
  const [room_no, setRoom_no] = useState('');
  const [no_bed, setNo_bed] = useState(0);
  const [is_available, setIs_available] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null); // <-- image state

  function clearForm() {
    setRtype('');
    setDes('');
    setRoom_no('');
    setNo_bed(0);
    setIs_available('');
    setPrice(0);
    setImage(null);
  }

  async function addroom() {
    try {
      if (!roomtype || !description || !room_no || no_bed <= 0 || !is_available || !price || !image) {
        toast.error('All fields are required');
        return;
      }

      const formData = new FormData();
      formData.append('room_type', roomtype);
      formData.append('description', description);
      formData.append('room_number', room_no);
      formData.append('no_of_bed', no_bed);
      formData.append('is_available', is_available);
      formData.append('price', price);
      formData.append('image', image); // <-- attach image

      await axios.post('http://localhost:3007/Web/create', {
        room_type: roomtype,
        description: description,
        room_number: room_no,
        no_of_bed: no_bed,
        is_available: is_available,
        price:price,
        image:image
      });

      toast.success('Room added successfully!');
      clearForm();
    } catch (error) {
      toast.error('Network or server error');
      console.error(error);
    }
  }

  return (
    <div>
      <Adminnavbar />
      <div className="card shadow p-4">
        <h3 className="text-primary mb-3">Add Room</h3>
        <div className="row">
          {/* Other inputs (same as before)... */}
          <div className="col-md-6 mb-3">
            <label>Room Type</label>
            <input
              type="text"
              className="form-control"
              value={roomtype}
              onChange={(e) => setRtype(e.target.value)}
              placeholder="Enter room type"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDes(e.target.value)}
              placeholder="Enter description"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Room Number</label>
            <input
              type="text"
              className="form-control"
              value={room_no}
              onChange={(e) => setRoom_no(e.target.value)}
              placeholder="Enter room number"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>No. of Beds</label>
            <input
              type="number"
              className="form-control"
              value={no_bed}
              onChange={(e) => setNo_bed(Number(e.target.value))}
              placeholder="Enter number of beds"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Is Available</label>
            <input
              type="text"
              className="form-control"
              value={is_available}
              onChange={(e) => setIs_available(e.target.value)}
              placeholder="Yes / No"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Enter price"
            />
          </div>
          <div className="col-md-12 mb-4">
            <label>Room Image</label>
            <input
              type="file"
              className="form-control"
              
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary w-100" onClick={addroom}>
              Add Room
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}
