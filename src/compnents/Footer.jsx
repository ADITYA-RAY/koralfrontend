import React from "react";
import korallogo from "../assets/images/logo-koral.png";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsDribbble,
} from "react-icons/bs";
export const Footer = () => {
  return (
    <div>
      <br />
      <br />
      <div className="foot_out">
        <p>
          Something went wrong. Please re-authorize Instagram on Appearance &gt;
          Koral Options &gt; Social Networks &gt; Instagram and clicking on
          Authorize Instagram.
        </p>
        <br />

        <br />
        <img src={korallogo} alt="logo" />
        <br />
        <div className="icon_cont">
          <div className="pinkhover">
            <BsFacebook />
          </div>
          <div className="pinkhover">
            <BsTwitter />
          </div>
          <div className="pinkhover">
            <BsInstagram />
          </div>
          <div className="pinkhover">
            <BsPinterest />
          </div>
          <div className="pinkhover">
            <BsDribbble />
          </div>
        </div>

        <p>Koral © 2021 by Upper</p>
        <br />
        <br />
      </div>
    </div>
  );
};
