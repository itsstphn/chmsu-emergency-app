import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useUserDataContext } from "./useUserDataContext";

const WEATHER_API = "9678e8482a02eded0f2297e578b09299";

const useWeather = () => {
  const { location } = useUserDataContext();

  const [weather, setWeather] = useState(null);
  const [isWeatherPending, setIsWeatherPending] = useState(false);

  useEffect(() => {
    setIsWeatherPending(true);
    try {
      (async () => {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location?.latitude}&lon=${location?.longitude}&units=metric&appid=${WEATHER_API}`
        );
        setWeather({
          desc: _.startCase(res.data.weather[0].description),
          temp: res.data.main.temp + "°C",
        });
        setIsWeatherPending(false);
      })();
    } catch (err) {
      console.log(err);
      setIsWeatherPending(false);
    }
  }, [location]);

  return { weather };
};

export default useWeather;
