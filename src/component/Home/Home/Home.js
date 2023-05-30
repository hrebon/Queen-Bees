import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blog from '../Blogs/Blog';
import Contact from '../Contact/Contact';
import FeatureService from '../FeaturedService/FeatureService';

import Header from '../Header/Header';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blog></Blog>  
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;