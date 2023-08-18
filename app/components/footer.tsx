import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-400 text-white py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <b>Foodish</b>
        <p>Continue Foodish 2023 all rights reserved</p>
        <br />
        <b>Follow Us On</b>
      </div>
      <div>
        <b>Menu</b>
        <p>Home</p>
        <p>Offers</p>
        <p>Service</p>
        <p>About us</p>
      </div>
      <div>
        <b>Information</b>
        <p>Menu</p>
        <p>Quality</p>
        <p>Make a choice</p>
        <p>Salad with vegetable</p>
        <p>Fast Delivery</p>
        <p>Subscribe</p>
      </div>
      <div>
        <b>Contact</b>
        <p>+123456789</p>
        <p>Explore</p>
        <p>Info@Foodish.Com</p>
        <p>1245, New York, USA</p>
      </div>
    </div>
  );
};

export default Footer;