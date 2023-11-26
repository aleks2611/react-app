import { useContext } from "react";
import { weatherbitForecast } from "../data-service/api";
import crateContext, {
  ACTION_SET_LOADER,
  ACTION_SET_WEATHERBIT,
} from "../context/Provider";

function UseWeatherbit() {
  const { dispatch } = useContext(crateContext);

  async function getWeatherbitData() {
    try {
      dispatch({
        type: ACTION_SET_LOADER,
        payload: true,
      });

      const res = await weatherbitForecast();

      dispatch({
        type: ACTION_SET_WEATHERBIT,
        payload: JSON.parse(JSON.stringify(res.data)),
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

  return { getWeatherbitData };
}

export default UseWeatherbit;
