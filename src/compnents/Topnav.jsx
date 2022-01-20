import React from "react";
import korallogo from "../assets/images/logo-koral.png";
import { BsSearch, BsCart2, BsFillGridFill } from "react-icons/bs";
export const Topnav = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div>
      <div className="topnav">
        <div className="left">
          <img src={korallogo} alt="logo" />
        </div>
        <div className="center">
          <div className="link">home</div>
          <div className="link">pages</div>
          <div className="link">portfolios</div>
          <div className="link">headers</div>
          <div className="link">elements</div>
          <div className="link">blog</div>
        </div>
        <div className="right">
          <div className="icons">
            <BsSearch />
          </div>
          <div className="icons">
            <BsCart2 />
          </div>
          <div className="icons">
            <BsFillGridFill />
          </div>
        </div>
      </div>
    </div>
  );
};
