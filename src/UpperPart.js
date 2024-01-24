import React from 'react';
import circle from './assets/images/circle.png';
import headphone from './assets/images/headphone.jpg';
import clock from './assets/images/clock.jpg';
import hospital from './assets/images/hospitals.png'
import doctorfind from './assets/images/doctorfind.png'
import hospitals2 from './assets/images/hospitals2.png'
const UpperPart = () => {
    return (
        <>
            <section className="col-md-12 justify-content-center align-items-center"
            style={{paddingRight:"40px"}}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 text-center" style={{ color: "#1C2A3A", fontSize: "48px", fontFamily: "Inte", fontWeight: "700" }}>
                            Features
                        </div>
                        <div className="col-md-12 d-flex justify-content-between align-items-center">
                            <div style={{ width: '260px', height: '358px', boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                    <div style={{ height: '150px', width: '150px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                                        <img style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', marginTop: '80px' }} src={circle} alt="Circular Image" />
                                    </div>
                                    <div style={{ marginTop: '10px' }}>
                                        <h3 style={{ textAlign: 'center', fontSize: "24px", fontWeight: "700", fontFamily: "Inter" }}>Easy Use</h3>
                                        <p style={{ textAlign: 'center', fontFamily: "Inter", fontSize: "20px", fontWeight: "400" }}>Using this application is very simple for all people at any ages.</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: '260px', height: '358px', boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                    <div style={{ height: '150px', width: '150px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                                        <img style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', marginTop: '80px' }} src={headphone} alt="Circular Image" />
                                    </div>
                                    <div style={{ marginTop: '10px' }}>
                                        <h3 style={{ textAlign: 'center', fontSize: "24px", fontWeight: "700", fontFamily: "Inter" }}>24/7 Support</h3>
                                        <p style={{ textAlign: 'center', fontFamily: "Inter", fontSize: "20px", fontWeight: "400" }}>Access to support services on all days of the week at all hours.</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '260px', height: '358px', boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                    <div style={{ height: '150px', width: '150px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                                        <img style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', marginTop: '80px' }} src={clock} alt="Circular Image" />
                                    </div>
                                    <div style={{ marginTop: '10px' }}>
                                        <h3 style={{ textAlign: 'center', fontSize: "24px", fontWeight: "700", fontFamily: "Inter" }}>Quick Access</h3>
                                        <p style={{ textAlign: 'center', fontFamily: "Inter", fontSize: "20px", fontWeight: "400" }}>Quick access to the doctors and medical services you want..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="col-md-12 justify-content-center align-items-center"
                style={{ paddingTop: "45px" ,paddingRight:"40px"}}>
                <div className='d-flex'
                    style={{ height: "696px" }}>
                    <div>
                        <img style={{ height: "600px", width: "300px", marginLeft: "100px" }} src={hospital} />
                    </div>
                    <div style={{ width: '450px', height: '600px', boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)', position: 'relative', marginLeft: "200px" }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                            <div style={{ height: '150px', width: '150px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                                {/* <img style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', marginTop: '80px' }} src={circle} alt="Circular Image" /> */}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <h3 style={{ textAlign: 'center', fontSize: "48px", fontWeight: "700", fontFamily: "Inter" }}>Quick access to the services you need</h3>
                                <p style={{ textAlign: 'center', fontFamily: "Inter", fontSize: "32px", fontWeight: "400", color: "#47535F" }}>Easily find the doctors and medical centers you need, on the map.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="col-md-12 justify-content-center align-items-center"
                style={{ paddingTop: "45px",paddingRight:"40px" }}>
                <div className='d-flex'
                    style={{ height: "696px" }}>
                    <div style={{ width: '650px', height: '600px', boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)', position: 'relative', marginLeft: "80px" }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                            <div style={{ height: '150px', width: '150px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                                {/* <img style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', marginTop: '80px' }} src={circle} alt="Circular Image" /> */}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <h3 style={{ textAlign: 'left', fontSize: "48px", fontWeight: "700", fontFamily: "Inter" }}>Access to specialist doctors</h3>
                                <p style={{ textAlign: 'left', fontFamily: "Inter", fontSize: "32px", fontWeight: "400", color: "#47535F" }}>You have easy access to various medical specialties and doctors.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img style={{ height: "600px", width: "300px", marginLeft: "100px" }} src={doctorfind} />
                    </div>
                </div>
            </section>
            <section className="col-md-12 justify-content-center align-items-center"
                style={{ paddingTop: "45px",paddingRight:"40px" }}>
                <div className='d-flex'
                    style={{ height: "696px" }}>
                    <div>
                        <img style={{ height: "600px", width: "300px", marginLeft: "100px" }} src={hospitals2} />
                    </div>
                    <div style={{ width: '650px', height: '600px', boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)', position: 'relative', marginLeft: "200px" }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                            <div style={{ marginTop: '10px' }}>
                                <h3 style={{ textAlign: 'center', fontSize: "48px", fontWeight: "700", fontFamily: "Inter",marginTop:"10px"}}>About</h3>
                                <p style={{ textAlign: 'left', fontFamily: "Inter", fontSize: "32px", fontWeight: "400", color: "#47535F" }}>Our platform connects you with qualified doctors who can provide medical consultations from the convenience of your own home. With our user-friendly interface, you can book appointments, chat with doctors via video call, and even receive e-prescriptions.</p>
                                <p style={{ textAlign: 'left', fontFamily: "Inter", fontSize: "32px", fontWeight: "400", color: "#47535F",marginTop:"8px" }}>Read More..</p>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default UpperPart;