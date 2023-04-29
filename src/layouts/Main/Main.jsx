/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Shared/LeftNav/LeftNav';
import RightNav from '../../Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <Container>
      <Row>
        <Col lg={3}>
          <LeftNav />
        </Col>
        <Col lg={6}>
          <Outlet />
        </Col>

        <Col lg={3}>
          <RightNav />
        </Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;