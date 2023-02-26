import React, { useEffect, useState } from "react";
import MainNavBar from "../MainNavBar/MainNavBar";
import "./Form.css";

const Form = () => {
  const initialValues = {
    uname: "",
    fname: "",
    phone: "",
    address: "",
    radio: "",
    dropdown: "",
  };
  const [values, setValues] = useState(initialValues);
  const [list, setList] = useState(getListFromStorage);
  const [error, setError] = useState(false);

  const handleField = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (values.length === 0) {
      setError(true);
    }
  };

  const handleClick = () => {
    setList(values);
    console.log(values);
  };

  const handleRefresh = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  // useEffect(() => {
  //   const list = JSON.parse(localStorage.getItem('list'));
  //   if (list) {
  //    setList(list);
  //   }
  // }, []);

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
            {error ? <label htmlFor="">Can't be empty</label> : ""}
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
            {error ? <label htmlFor="">Can't be empty</label> : ""}
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
            {error ? <label htmlFor="">Can't be empty</label> : ""}
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
            {error ? <label htmlFor="">Can't be empty</label> : ""}
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
            {error ? <label htmlFor="">Can't be empty</label> : ""}
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
            {error ? <label htmlFor="">Can't be empty</label> : ""}
            {/* onClick={(e) => handleClick(e)} */}
            <button className="btn" type="submit" onClick={handleClick}>
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
