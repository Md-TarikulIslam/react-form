import React, { useEffect, useState } from "react";
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

const initialValuesError = {
  uname: "",
  fname: "",
  phone: "",
  address: "",
  radio: "",
  dropdown: "",
};

const Form = () => {
  const [values, setValues] = useState(initialValues);
  const [list, setList] = useState(getListFromStorage);
  const [error, setError] = useState(initialValuesError);

  const handleField = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const checkValidation = () => {
    if (!values.uname) {
      setError((prev) => ({ ...prev, uname: "this field is required" }));
    }
    if (!values.fname) {
      setError((prev) => ({ ...prev, fname: "this field is required" }));
    }
    if (!values.phone) {
      setError((prev) => ({ ...prev, phone: "this field is required" }));
    }
    if (!values.address) {
      setError((prev) => ({ ...prev, address: "this field is required" }));
    }
    if (!values.radio) {
      setError((prev) => ({ ...prev, radio: "this field is required" }));
    }
    if (!values.dropdown) {
      setError((prev) => ({
        ...prev,
        dropdown: "this field is required",
      }));
    }
  };
  const handleClick = () => {
    checkValidation();
    const { uname, phone, address, fname, dropdown, radio } = values;

    if (uname && phone && address && fname && dropdown && radio) {
      setList(values);
    }
  };

  const handleRefresh = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  // console.log("error===>", error);

  return (
    <div>
      <MainNavBar></MainNavBar>
      <form action="" onSubmit={handleRefresh}>
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
            {error?.uname ? (
              <label className="error-msg" htmlFor="">
                {error?.uname}
              </label>
            ) : (
              ""
            )}
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
            {error.fname ? (
              <label className="error-msg" htmlFor="">
                {error.fname}
              </label>
            ) : (
              ""
            )}
            <span className="text">Phone No.:</span>
            <input
              className="input"
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleField}
              id=""
              placeholder="Enter Your Phone No.:"
            />
            {error.phone ? (
              <label className="error-msg" htmlFor="">
                {error.phone}
              </label>
            ) : (
              ""
            )}
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
            {error.address ? (
              <label className="error-msg" htmlFor="">
                {error.address}
              </label>
            ) : (
              ""
            )}
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
            {error.radio ? (
              <label className="error-msg" htmlFor="">
                {error.radio}
              </label>
            ) : (
              ""
            )}
            <label className="text mt">Choose Your Degree</label>
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
            {error.dropdown ? (
              <label className="error-msg" htmlFor="">
                {error.dropdown}
              </label>
            ) : (
              ""
            )}
            <button
              style={{
                backgroundColor: "skyBlue",
                fontSize: "20px",
                fontWeight: "700",
              }}
              className="btn"
              type="submit"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  function getListFromStorage() {
    const list = JSON.parse(localStorage.getItem("list"));
    if (list) {
      return list;
    } else {
      return [];
    }
  }
};

export default Form;
