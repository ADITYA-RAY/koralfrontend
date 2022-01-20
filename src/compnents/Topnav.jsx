import React from "react";
import korallogo from "../assets/images/logo-koral.png";
import { BsSearch, BsCart2, BsFillGridFill } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";

export const Topnav = () => {
  const showMenu = () => {
    document.getElementById("momenu").style.opacity = "1";
    document.getElementById("momenu").style.zIndex = "1000";
  };
  const closeMenu = () => {
    document.getElementById("momenu").style.opacity = "0";
    document.getElementById("momenu").style.zIndex = "-1";
  };
  return (
    <div>
      <div className="momenu" id="momenu">
        <div
          className="closebtn"
          onClick={() => {
            closeMenu();
          }}
        >
          <FaWindowClose />
        </div>
        <div className="mo_link">home</div>
        <div className="mo_link">pages</div>
        <div className="mo_link">portfolio</div>
        <div className="mo_link">headers</div>
        <div className="mo_link">elements</div>
        <div className="mo_link">blog</div>
      </div>
      <div className="topnav" id="topnav">
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
          <div
            className="icons"
            onClick={() => {
              showMenu();
            }}
          >
            <BsFillGridFill />
          </div>
        </div>
      </div>
    </div>
  );
};
