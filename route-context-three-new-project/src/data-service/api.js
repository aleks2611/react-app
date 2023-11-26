import axios from "axios";

export async function weatherbitForecast() {
  try {
    const response = await axios.get(
      "https://api.weatherbit.io/v2.0/forecast/daily?lat=44.0165&lon=20.9240&key=65032f446d904b3eac2696cc08526a8d"
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}
