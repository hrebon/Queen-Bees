import React from 'react';
import { Link } from 'react-router-dom';
import QUEEN from '../../../images/QUEEN.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Career <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quos quod quae?</p>
                <Link to="/appointment"><button className="btn btn-primary">GET YOUR SKILL</button></Link>
            </div>
            <div className="col-md-6">
                <img src={QUEEN} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;