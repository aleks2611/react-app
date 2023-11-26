import React, { useContext, lazy, Suspense, useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Backdrop,
  CircularProgress,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import crateContext from "./context/Provider";
import NavBar from "./pages/core/nav-bar/NavBar";
import Footer from "./pages/core/footer/Footer";
import ProtectedRoute from "./hooks/UseProtectedRoute";
import classes from "./App.module.scss";
import useAuth from "./hooks/UseAuth";
import { darkTheme, lightTheme } from "./context/ThemeProvider";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotFound from "./pages/not-found/NotFound";

const Login = lazy(() => import("./pages/auth/Auth"));
const Home = lazy(() => import("./pages/home/Home"));
const SignIn = lazy(() => import("./pages/auth/sing-in/SignIn"));
const About = lazy(() => import("./pages/about/About"));

function App() {
  const { state } = useContext(crateContext);
  const { isLogin } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((data) => {
      localStorage.setItem("darkMode", JSON.stringify(!data));
      return !data;
    });
  };

  useEffect(() => {
    const mode = localStorage.getItem("darkMode");
    setDarkMode(mode);
  }, []);

  const containerStyle = {
    ...(isLogin() ? { marginTop: "70px" } : { height: "100vh" }),
    backgroundColor:
      darkMode && isLogin()
        ? darkTheme.palette.background.default
        : lightTheme.palette.background.default,
  };

  return (
    <ThemeProvider theme={state.darkMode ? darkTheme : lightTheme}>
      {isLogin() && (
        <NavBar>
          <IconButton onClick={toggleDarkMode} sx={{ ml: 1 }} color="inherit">
            <Brightness7Icon />
          </IconButton>
        </NavBar>
      )}
      <div className={classes["content"]} style={containerStyle}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route path="/signIn" element={<SignIn />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: 10 }}
        open={state.showLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {isLogin() && <Footer />}
    </ThemeProvider>
  );
}

export default App;
