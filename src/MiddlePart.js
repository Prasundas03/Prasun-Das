import React from 'react';
import middle from './assets/images/middle.jpg';
import details from './assets/images/details.png';
import details1 from './assets/images/details1.png';
import details2 from './assets/images/details2.png';
import photo from './assets/images/Rectangle.png'

const MiddlePart = () => {
    return (
        <>
            <section className="col-md-12 justify-content-center align-items-center">
                <img style={{height:"344px",width:"100%"}} src={middle}/>
                <div></div>
                </section>
                <section className="col-md-12 justify-content-center align-items-center"
            style={{paddingRight:"40px",paddingBottom:"30px"}}>
                <h3 style={{ textAlign: 'center', fontSize: "48px", fontWeight: "700", fontFamily: "Inter",marginTop:"60px" }}>Easily Book Your Appointment</h3>
                <div className='d-flex justify-content-between'
                style={{marginTop:"40px",marginLeft:"80px"}}>
                    <img style={{ height: "600px", width: "300px"}}  src={details}/>
                    <img style={{ height: "600px", width: "300px"}}  src={details1}/>
                    <img style={{ height: "600px", width: "300px"}}  src={details2}/>
                </div>
                <div>
                <h3 style={{ textAlign: 'center', fontSize: "48px", fontWeight: "700", fontFamily: "Inter",marginTop:"60px" }}>Our Customers’ Reviews</h3>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                    <img style={{ height: "252px", width: "226px",marginLeft:"250px",marginTop:"30px"}}  src={photo}/>
                    </div>
                    <div><p style={{ textAlign: 'left', fontFamily: "Inter", fontSize: "24px", fontWeight: "400", color: "#47535F",marginTop:"20px",marginLeft:"40px" }}>Using HealthPal has been a game-changer for me. As a busy working professional, finding time to visit a doctor was always a challenge. With this app, I can book appointments and receive medical consultations without the hassle of commuting and waiting rooms.</p></div>
                </div>

            </section>
        </>
    )
}
export default MiddlePart;