import React, { useState } from "react";
import MainNavBar from "../MainNavBar/MainNavBar";
import "./Form.css";

const initialValues = {
  uname: "",
  fname: "",
  phone: "",
  address: "",
  radio: "",
  dropdown: "",
};

const Form = () => {
  const [values, setValues] = useState(initialValues);

  const handleField = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  // console.log(values)

  const handleClick = () => {
    setValues(values);
  };
  console.log(values);

  return (
    <div>
      <MainNavBar></MainNavBar>
      <div className="full-form">
        <div className="child">
          <span className="text">Username</span>
          <input
            className="input"
            type="text"
            name="uname"
            id=""
            value={values.uname}
            placeholder="Enter a username"
            onChange={handleField}
          />
          <span className="text">Full Name</span>
          <input
            className="input"
            type="text"
            name="fname"
            value={values.fname}
            onChange={handleField}
            id=""
            placeholder="Enter Your Full Name"
          />
          <span className="text">Phone No</span>
          <input
            className="input"
            type="number"
            name="phone"
            value={values.phone}
            onChange={handleField}
            id=""
            placeholder="Enter Your Phone No.:"
          />
          <span className="text">Address</span>{" "}
          <input
            className="input"
            type="text"
            name="address"
            value={values.address}
            onChange={handleField}
            id=""
            placeholder="Enter Your Address"
          />
          <span className="text">Gender</span>
          <div className="flex">
            <input
              type="radio"
              name="radio"
              value="Male"
              onChange={handleField}
              id=""
              placeholder="male"
            />{" "}
            <span>Male</span>
            <input
              type="radio"
              name="radio"
              value="Female"
              onChange={handleField}
              id=""
              placeholder="female"
            />{" "}
            <span>Female</span>
          </div>
          <label className="text">Choose Your Degree</label>
          <select
            className="options"
            name="dropdown"
            onChange={handleField}
            id=""
          >
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="BSC">BSC</option>
          </select>
          <button className="btn" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
