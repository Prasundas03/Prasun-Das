import React from 'react';
import google from './assets/images/google (1).jpg';
import linkdin from './assets/images/google (2).jpg';
import facebook from './assets/images/google (3).jpg';
import apple from './assets/images/google (4).jpg';
import twitter from './assets/images/google (5).jpg';

const FooterPart = () => {
    return (
        <>
            <section className="col-md-12 justify-content-center align-items-center" style={{ backgroundColor: "#1C2A3A",paddingRight:"40px",paddingBottom:"30" }}>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h3 style={{ textAlign: 'center', fontSize: "48px", fontWeight: "700", fontFamily: "Inter", marginTop: "60px", marginLeft: "190px", color: "white" }}>Contact Us</h3>
                        <p style={{ textAlign: 'left', fontFamily: "Inter", fontSize: "24px", fontWeight: "400", marginTop: "20px", marginLeft: "190px", color: "#FDFDFD" }}>We are honored to receive your comments and </p>
                        <p style={{ textAlign: 'left', fontFamily: "Inter", fontSize: "24px", fontWeight: "400", color: "#FDFDFD", marginTop: "-20px", marginLeft: "190px", }}>suggestions. Please feel free to contact us :</p>
                        <div className='d-flex justify-content-between' style={{ marginLeft: "190px" }}>
                            <img src={apple} alt="Apple Logo" />
                            <img src={google} alt="Google Logo" />
                            <img src={linkdin} alt="LinkedIn Logo" />
                            <img src={twitter} alt="Twitter Logo" />
                            <img src={facebook} alt="Facebook Logo" />
                        </div>
                    </div>

                    {/* Input boxes in column format */}
                    <div>
                        <div className="column"
                            style={{ marginRight: "190px" }}>
                            <div className="col-md-12">
                                <h4 style={{ color: "white" }}>Name</h4>
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="col-md-12">
                                <h4 style={{ color: "white", marginTop: "20px" }}>Email</h4>
                                <input type="email" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="col-md-12">
                                <h4 style={{ color: "white", marginTop: "20px" }}>Message</h4>
                                <input type="text" className="form-control" placeholder="Your Message" />
                            </div>
                            <button
                                className="btn search-btn-sec"
                                type="submit"
                                style={{ height: "60px", width: "150px", marginTop: "40px", marginLeft: "250px", backgroundColor: "#88B7A4", color: "black", fontFamily: "Inter", fontSize: "24px", fontWeight: "500" }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <h1 className='d-flex justify-content-center'
                style={{color:"white",fontSize:"24px",fontWeight:"400px"}}>©2023, All rights reserved.</h1>
            </section>
        </>
    );
}

export default FooterPart;
