import React from "react";
import MainNavBar from "../MainNavBar/MainNavBar";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <MainNavBar></MainNavBar>
      <div className="full-form">
        <div className="child">
          <span className="text">Username</span>
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Enter a username"
          />
          <span className="text">Full Name</span>
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Enter Your Full Name"
          />
          <span className="text">Phone No</span>
          <input
            className="input"
            type="number"
            name=""
            id=""
            placeholder="Enter Your Phone No.:"
          />
          <span className="text">Address</span>{" "}
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Enter Your Address"
          />
          <span className="text">Gender</span>
          <div className="flex">
            <input type="radio" name="" id="" placeholder="male" />{" "}
            <span>Male</span>
            <input type="radio" name="" id="" placeholder="female" />{" "}
            <span>Female</span>
          </div>
          <label className="text">Choose Your Degree</label>
          <select className="options" name="" id="">
            <option value="">SSC</option>
            <option value="">HSC</option>
            <option value="">BSC</option>
          </select>
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
