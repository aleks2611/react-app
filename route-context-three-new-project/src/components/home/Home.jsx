import { useContext, useEffect } from "react";
import { Grid } from "@mui/material";
import classes from "./Home.module.scss";
import crateContext from "../../context/Provider";
import WeatherWidget from "./weather-widget/WeatherWidget";
import UseWeatherbit from "../../hooks/UseWeatherbit";

function Home() {
  const { state } = useContext(crateContext);
  const { getWeatherbitData } = UseWeatherbit();

  useEffect(() => {
    if (!state.weatherbit) {
      getWeatherbitData();
    }
  }, []);

  const gridWeatherItems = state.weatherbit?.data
    ?.map((data, index) => {
      return (
        <Grid item xs={12} md={2} key={index}>
          <WeatherWidget
            city={state.weatherbit.city_name}
            description={data.weather.description}
            icon={data.weather.icon}
            day={data.datetime}
            maxTemp={data.max_temp}
            minTemp={data.min_temp}
          />
        </Grid>
      );
    })
    .slice(1, 7);

  return (
    <>
      <Grid container padding={2}  justifyContent="center">
        <Grid item xs={12} md={4} >
          <WeatherWidget
            city={state.weatherbit?.city_name}
            description={state?.weatherbit?.data[0]?.weather?.description}
            icon={state?.weatherbit?.data[0]?.weather?.icon}
            day={state?.weatherbit?.data[0]?.datetime}
            maxTemp={state?.weatherbit?.data[0]?.max_temp}
            minTemp={state?.weatherbit?.data[0]?.min_temp}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} padding={3} >
        {gridWeatherItems}
      </Grid>
    </>
  );
}
export default Home;
