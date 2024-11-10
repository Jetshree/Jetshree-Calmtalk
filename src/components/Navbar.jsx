import React from "react";
import { Link } from "react-router-dom";
import { getToken } from "../services/localStorageService";
import logo from "../images/logo.png";

export default function Navbar() {
    const {access_token} = getToken()
    function toggleNavbar(){
        if(document.getElementById('nav-icon').classList.contains('fa-bars')){
            console.log('bars -> close');
            document.getElementById('nav-icon').classList.add('fa-xmark')
            document.getElementById('nav-icon').classList.remove('fa-bars')
            document.getElementById('nav-menu').classList.remove('hidden')
        }else{
            document.getElementById('nav-icon').classList.add('fa-bars')
            document.getElementById('nav-icon').classList.remove('fa-xmark')
            document.getElementById('nav-menu').classList.add('hidden')
        }
    }
  return (
    <div>
        {/* <div className="navbar bg-[#dddbca] flex flex-row justify-between text-black text-md p-2 pt-2  w-full items-center"> */}
        {/* <div className="navbar fixed top-0 left-0 w-full flex flex-row justify-between text-black text-md p-2 pt-2 items-center bg-transparent"> */}
        <div className="navbar fixed top-0 left-0 w-full flex flex-row justify-between text-black text-md p-2 pt-2 items-center" style={{ backgroundColor: 'rgba(221, 219, 202, 0.7)' }}>
          <div className="flex flex-row items-center space-x-2">
          <img src={logo} alt="logo" className="lg:w-[2rem] lg:h-[2rem]" />
            <span className="lg:text-xl text-xl">CALMTALK</span>
          </div>
          <div className="lg:w-[55%] bg-transparent w-full lg:block  lg:static delay-300 absolute hidden left-0 top-[3.52rem] items-center" id="nav-menu">
            <ul className="flex justify-evenly lg:flex-row flex-col items-center">
            {/* <li className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:rounded-lg after:w-0 hover:after:w-full hover:text-[#CE6857] after:transition-all after:ease-in-out after:duration-300">
  <Link to="/">Home</Link>
</li> */}
<li className="relative hover:text-[#CE6857]">
  <Link to="/">Home</Link>
</li>
              <li className="relative hover:text-[#CE6857]">
                <Link to="/about">About</Link>
              </li>
              <li className="relative hover:text-[#CE6857]">
                {/* <Link to="/departments">DEPARTMENTS</Link> */}
                <Link to="/yoga">Yoga</Link>
              </li>
              <li className="relative hover:text-[#CE6857]">
                {/* <Link to="/doctors">DOCTORS</Link> */}
                <Link to="/meditation">Meditation</Link>
              </li>
              <li className="relative hover:text-[#CE6857]">
                {/* <Link to="/contact">Contact us</Link> */}
                <Link to="/wellness">Wellness</Link>
              </li>
              <li className="relative hover:text-[#CE6857]">
                {/* <Link to="/contact">Contact us</Link> */}
                <Link to="/journaling">journaling</Link>
              </li>
              <li className="relative hover:text-[#CE6857]">
                {/* <Link to="/contact">Contact us</Link> */}
                <Link to="/contact">Contact us</Link>
              </li>
              <li className="relative hover:text-[#CE6857]">
                <Link to="/">Help</Link>
              </li>
            </ul>
          </div>
          <div className="p-1">
            <ul className="flex items-center justify-between">
              <li>
                {
                  access_token ? (
                    <Link to="/user" className="border-2 border-[#dddbca] hover:border-[#fff] lg:text-[0.85rem] hover:border-2 text-xs bg-[#fff] lg:duration-100 px-3 py-2 rounded-full text-[#37AE96] font-bold hover:bg-[#37AE96] hover:text-[#fff]">
                    {access_token?"DASHBOARD":"LOGIN/SIGNUP"}
                  </Link>
                  ):(
                  <Link to="/login" className="border-2 border-[#dddbca] hover:border-[#fff] lg:text-[0.85rem] hover:border-2 text-xs bg-[#fff] lg:duration-100 px-3 py-2 rounded-full text-[#37AE96] font-bold hover:bg-[#37AE96] hover:text-[#fff]">
                  {access_token?"DASHBOARD":"LOGIN/SIGNUP"}
                </Link>)
                }
              </li>
              <li className="text-2xl lg:hidden mx-5" id="toggle" onClick={toggleNavbar}>
                <i className="fa-solid fa-bars" id="nav-icon"></i>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}
