import React from "react";
import NavbarMenu from "../NavbarMenu";
import "../../App.css";
import "./ChangePassword.css"

var avatar = require("../../assets/avatar.png");
const ChangePassword = () => {
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <div className="body_change_psw">
        <div className="login-wrapper">
          <form className="form" id="login_psw">
            <img src={avatar} alt="icon" />
            <h2>Change Password</h2>
            <div className="input-group_psw">
              <input
                name="old_password"
                id="old-password"
                type="password"
                required={true}
              />
              <label htmlFor="old-password">Old Password</label>
            </div>
            <div className="input-group_psw">
              <input
                type="password"
                name="new_password1"
                id="id_new_password1"
                required={true}
              />
              <label htmlFor="new-password">New Password</label>
            </div>
            <div className="input-group_psw">
              <input
                type="password"
                name="new_password2"
                id="id_new_password2"
                required={true}
              />
              <label htmlor="confirm-password">Confirm Password</label>
            </div>
            <button className="btn_psw">Submit</button>

          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
