import { useContext } from "react";
import { loginApi, signUpApi, updateUserApi } from "../data-service/auth.js";
import crateContext, {
  ACTION_SET_LOADER,
  ACTION_SET_USER,
} from "../context/Provider.jsx";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const { state, dispatch } = useContext(crateContext);
  const navigate = useNavigate();

  async function login(payload) {
    try {
      dispatch({
        type: ACTION_SET_LOADER,
        payload: true,
      });

      const res = await loginApi(payload);

      localStorage.setItem("user", JSON.stringify(res.data));

      dispatch({
        type: ACTION_SET_USER,
        payload: JSON.parse(JSON.stringify(res.data)),
      });

      navigate("/home");
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      dispatch({
        type: ACTION_SET_LOADER,
        payload: false,
      });
    }
  }

  async function signUp(payload) {
    try {
      dispatch({
        type: ACTION_SET_LOADER,
        payload: true,
      });

      const res = await signUpApi(payload);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      dispatch({
        type: ACTION_SET_LOADER,
        payload: false,
      });
    }
  }

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("darkMode");

    dispatch({ type: ACTION_SET_USER, payload: null });
    navigate("/login");
  }

  async function updateUser(payload, id) {
    try {
      dispatch({
        type: ACTION_SET_LOADER,
        payload: true,
      });

      const res = await updateUserApi(payload, id);

      const userData = JSON.parse(localStorage.getItem("user")) || {};

      userData.firstName = payload.firstName;
      userData.lastName = payload.lastName;

      localStorage.setItem("user", JSON.stringify(userData));

      dispatch({
        type: ACTION_SET_USER,
        payload: userData,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      dispatch({
        type: ACTION_SET_LOADER,
        payload: false,
      });
    }
  }

  function isLogin() {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (state.user || userData) {
      return true;
    }

    return false;
  }

  return { user: state.user, login, logout, isLogin, signUp, updateUser };
}

export default useAuth;
