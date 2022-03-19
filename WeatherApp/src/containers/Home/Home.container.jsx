import SearchBarContainer from "../SearchBar/SearchBar.container";
import WeatherResultContainer from "../WeatherResult/WeatherResult.container";

import { useSelector } from "react-redux";

const HomeContainer = () => {

    const weather = useSelector(state => state.weather.weather);

    return (
        <>
            <SearchBarContainer />
            <WeatherResultContainer weatherData={weather} />
        </>
    );
};

export default HomeContainer;