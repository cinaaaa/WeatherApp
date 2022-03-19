import SearchBarContainer from "../SearchBar/SearchBar.container";
import WeatherResultContainer from "../WeatherResult/WeatherResult.container";
import ErrorComponent from "../../components/Errors/Errors.component";

import { useSelector } from "react-redux";

const HomeContainer = () => {

    const weather = useSelector(state => state.weather);

    return (
        <>
            <SearchBarContainer />

            <ErrorComponent condition={weather.error} />

            <WeatherResultContainer weatherData={weather.weather} />
        </>
    );
};

export default HomeContainer;