import {
  Button,
  TextField,
  Stack,
  AppBar,
  Switch,
  Hidden,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import classes from "./Auth.module.scss";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import useAuth from "../../hooks/UseAuth";
import SignIn from "./sing-in/SignIn";
import Login from "./login/Login";
import homeImage from "../../assets/home_image.jpg";

function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  const label = { inputProps: { "aria-label": "Switch demo" } };

  function handleChange() {
    setShowLogin((data) => !data);
  }

  return (
    <div className={classes["login-box"]}>
      <Hidden smDown>
        <div className={classes["login-box-left"]}>
          <img src={homeImage} alt="Opis slike" />
        </div>
      </Hidden>

      <div className={classes["login-box-right"]}>
        <h1 className={classes["login-box-right-header"]}>
          Welcome to Wethaed app! 👋
        </h1>
        {!showLogin ? <Login /> : <SignIn />}
        <div className={classes["login-box-switch"]}>
          <span>Login</span>
          <Switch onChange={handleChange} {...label} defaultChecked />
          <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
}
export default Auth;
