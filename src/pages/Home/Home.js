import React from 'react';
import BillingAddress from '../Address/BillingAddress/BillingAddress';
import ShippingAddress from '../Address/ShippingAddress/ShippingAddress';
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <BillingAddress></BillingAddress>
            <ShippingAddress></ShippingAddress>
        </div>
    );
};

export default Home;