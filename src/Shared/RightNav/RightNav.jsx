import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qzone1 from "../../../public/qZone1.png";
import qzone2 from "../../../public/qZone2.png";
import qzone3 from "../../../public/qZone3.png";
import bg1 from "../../../public/bg1.png";

const RightNav = () => {
  return (
    <div>
      <h5>Login With</h5>
      <Button className="mb-2 mt-2" variant="outline-primary">
        <FaGoogle /> Login With Google
      </Button>
      <Button variant="outline-dark">
        <FaGithub /> Login With Github
      </Button>

      <div>
        <h6 className="mt-4 mb-2">Find Us On</h6>

        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="bg-dark-subtle mt-4">
        <h6>Q-Zone</h6>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
      <div
        className="py-5 px-4 mt-3 text-white text-center"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundRepeat: "no-repeat",
          width: "250px",
          height: "full",
        }}
      >
        <h1>Create an Amazing Newspaper</h1>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger">Learn More</Button>
      </div>
    </div>
  );
};

export default RightNav;
