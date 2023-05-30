import React from 'react';
import teacher from '../../../images/teacher.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={teacher} alt=""/>
                    </div>  
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-primary text-uppercase ">Believe Us</h5>
                        <h1 className="my-5">Make an Appointment <br/> Today</h1>
                        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</h5>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;