import React from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Details = () => {

    const { serviceKey } = useParams();
    return (
        <div>
            <Header></Header>
            This is details : {serviceKey}
            <Footer></Footer>
        </div>
    );
};

export default Details;