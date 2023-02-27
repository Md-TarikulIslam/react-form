import MainNavBar from "../MainNavBar/MainNavBar";
import './UserInfo.css'

const UserInfo = () => {
  const data = JSON.parse(localStorage.getItem("list"));
  const { uname, fname, address, phone, radio, dropdown } = data;

  return (
    <div>
      <MainNavBar></MainNavBar>
      <div className="details">
      <h1>Details from User</h1>
      <p>Username: {uname}</p>
      <p>Full Name: {fname}</p>
      <p>Address: {address}</p>
      <p>Phone Np.: : {phone}</p>
      <p>Gender: {radio}</p>
      <p>Degree: {dropdown}</p>
      </div>
    </div>
  );
};

export default UserInfo;
