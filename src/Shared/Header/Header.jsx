import React from 'react';
import logo from '../../../public/logo.png'
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import moment from 'moment/moment';

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-4 mb-4'>
            <img src={logo} alt="" />
            </div>
            <p className='text-secondary text-center mb-4'>Journalism Without Fear and Fabour</p>
            <p className='text-center'>
                {moment().format('dddd, MMMM Do, YYYY')}
            </p>
            <Marquee className='mb-4 text-danger'><Button variant="danger" className='me-1'>Latest</Button> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        </Container>
    );
};

export default Header;