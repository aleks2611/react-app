import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Switch,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Hidden from "@mui/material/Hidden";
import { useState } from "react";
import classes from "./NavBar.module.scss";
import useAuth from "../../../hooks/UseAuth";

function NavBar({ children }) {
  const [showHamburgerMenu, setShowHamburgerMany] = useState(false);
  const { logout, isLogin } = useAuth();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const navigate = useNavigate();

  function handleClickLink(url) {
    navigate(url);
    handleHamburgerClick();
  }

  function handleChangeMod() {}

  function handleHamburgerClick() {
    setShowHamburgerMany((data) => !data);
  }
  const buttons = (
    <>
      {isLogin() && (
        <Button
          color="inherit"
          onClick={() => {
            handleClickLink("/about");
          }}
        >
          About
        </Button>
      )}
      {isLogin() && (
        <Button
          color="inherit"
          onClick={() => {
            handleClickLink("/home");
          }}
        >
          Home
        </Button>
      )}

      {isLogin() && (
        <Button
          color="inherit"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Button>
      )}
      {children}
    </>
  );
  return (
    <AppBar position="fixed">
      <Toolbar className={classes["nav-bar"]}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
          }}
        >
          <span>Weather App</span>
        </Typography>
        <Hidden smDown>
          <Stack direction="row" spacing={2}>
            {buttons}
          </Stack>
        </Hidden>
        <Hidden smUp>
          <div
            className={classes["nav-bar-hamburger"]}
            onClick={handleHamburgerClick}
          >
            <span className={classes["nav-bar-hamburger-menu"]}></span>
          </div>
        </Hidden>
      </Toolbar>
      <Hidden smUp>
        <div
          className={classes["nav-bar-links"]}
          style={{
            opacity: !showHamburgerMenu ? "0" : "1",
            height: !showHamburgerMenu ? 0 : "100vh",
          }}
        >
          {buttons}
        </div>
      </Hidden>
    </AppBar>
  );
}

export default NavBar;
