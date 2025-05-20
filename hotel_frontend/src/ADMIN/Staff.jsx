import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Adminnavbar from './Adminnavbar';

export default function Staff() {
   
  return (
<div> <Adminnavbar/>
    <div className="container mt-4">
    <div className="card shadow p-4">
      <h3 className="text-danger mb-3">Add Staff Form</h3>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Staff Name</label>
          <input
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Staff Email</label>
          <input
            type="email"
            className="form-control"  />
        </div>

        <div className="col-md-6 mb-3">
          <label>Age</label>
          <input
            type="number"
            className="form-control"  />
        </div>

        <div className="col-md-6 mb-3">
          <label>Gender</label>
          <select
            className="form-select">
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label>Phone no</label>
          <input
            type="number"
            className="form-control"  />
        </div>

        <div className="col-md-12 mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control" />
        </div>

           <label>Role</label>
          <select
            className="form-select">
            <option value="">Select Role</option>
            <option value="Male">house keeping </option>
            <option value="Female">Receptionist</option>
            <option value="Other">Other</option>
          </select>
            
          <label>Staff_shift_Timing</label>
          <select
            className="form-select">
            <option value="">Select timming</option>
            <option value="Morrning">Morrning  9:00 to 5:00 </option>
            <option value="Evening">Evening 5:00 to 1:00</option>
            <option value="Night">Night 1:00 to 9:00</option>
          </select>&nbsp; &nbsp;
       
        <div className="col-md-12">
          <button className="btn btn-danger w-100">
          Add staff
          </button>
        </div>
      </div>
    </div>
    <ToastContainer />
  </div>
  </div>
  )
}
