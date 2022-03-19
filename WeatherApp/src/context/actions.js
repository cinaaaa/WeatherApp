import { get_coordinates,get_weathers } from "../api";

import { changeLoading, setWeatherData } from "./weatherSlice";


export const fetch_weather = (city) => async dispatch => {

    // show loading
    dispatch(changeLoading(true));
    // remove last data
    dispatch(setWeatherData([]));


    // fetch the city coords first
    // then if we have coords we can fetch
    // the weather data too
    let coords = await get_coordinates(city);
    // check for valid response
    if (coords?.data?.[0]) {
        const {lat, lon} = coords.data[0];
        let weather_data = await get_weathers(lat, lon);

        // check for valid weather data
        if (weather_data?.data?.daily) {
            // dispatch our data
            dispatch(setWeatherData(weather_data.data.daily.slice(0, 4)));
            // hide loading
            dispatch(changeLoading(false));
        };

    };
};