import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/images/Vector.png';
import Home from './assets/images/Home.png';
import UpArrow from './assets/images/UpArrow.jpg'
const Navbar = () => {
  return (
    <div className="col-md-12 justify-content-center align-items-center"
      style={{ backgroundColor: "#1C2A3A" ,paddingLeft:"60px",paddingRight:"40px",paddingBottom:"30px"}}>
      <div className='d-flex justify-content-between'>
        <div className='justify-content-center align-items-center' style={{ height: "150px", width: "150px" }}>
          <img
            style={{paddingTop: "40px" }} src={logo} />
          <p className='text-white'
            style={{paddingTop: "8px", fontFamily: "Poppins", fontWeight: "400px" }}>HealthPal</p>
        </div>
        <div className='d-flex'
          style={{ marginLeft: "240px", marginTop: "30px" }}>
          <p className='p-4' style={{ backgroundColor: "#1C2A3A", color: "#88B7A4", fontFamily: "Inter", fontWeight: "700", fontSize: "24px" }}>Home</p>
          <p className='p-4' style={{ backgroundColor: "#1C2A3A", color: "#88B7A4", fontFamily: "Inter", fontWeight: "700", fontSize: "24px" }}>About</p>
          <p className='p-4' style={{ backgroundColor: "#1C2A3A", color: "#88B7A4", fontFamily: "Inter", fontWeight: "700", fontSize: "24px" }}>Services</p>
          <p className='p-4' style={{ backgroundColor: "#1C2A3A", color: "#88B7A4", fontFamily: "Inter", fontWeight: "700", fontSize: "24px" }}>Contacts</p>
        </div>
        <div>
          <button
            className="btn search-btn-sec"
            type="submit"
            style={{ height: "60px", width: "150px", marginTop: "40px", marginLeft: "250px", backgroundColor: "#88B7A4", color: "black", fontFamily: "Inter", fontSize: "24px", fontWeight: "500" }}
          >
            Download
          </button>
        </div>
      </div>
      <div className='d-flex justify-content-between'
        style={{ height: "600px" }}>
        <div>
          <h1 className='text-white' style={{ fontSize: "60px" }}>Meet Your Favorite </h1>
          <h1 className='text-white' style={{ fontSize: "60px" }}><span> Doctors</span> Online.</h1>
          <h1 className='text-white' style={{ fontSize: "32px" }}>With HealthPal app, you can easily and quickly </h1><h1 className='text-white' style={{ fontSize: "32px" }}>access the medical specialties and hospital services</h1> <h1 className='text-white' style={{ fontSize: "32px" }}>you need on all days of the week.</h1>
          <button
            className="btn search-btn-sec"
            type="submit"
            style={{ height: "60px", width: "150px", marginTop: "40px", backgroundColor: "#88B7A4", color: "black", fontFamily: "Inter", fontSize: "24px", fontWeight: "500" }}
          >
            Download
          </button>
          <span>
          </span>
        </div>
        <div>
          <img style={{ height: "600px", width: "300px" }} src={Home} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
