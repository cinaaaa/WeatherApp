// Api key
import axios from "axios";

const GEO_URL = "http://api.openweathermap.org/geo/1.0/direct";
const DATA_URL = "https://api.openweathermap.org/data/2.5/onecall"
const token = "aef6920af18107facf4fa4214b1114cb";

export const get_coordinates = async (city) => {
    // get the city lat & lng by its name
    try {
        const response = await axios.get(`${GEO_URL}?q=${city}&appid=${token}`);
        return response;
    } catch (error) {
        console.error(error);
    };
};

export const get_weathers = async (lat, lon) => {
    // get the lat & lng current weather condition
    try {
        const response = await axios.get(`${DATA_URL}?lat=${lat}&lon=${lon}&appid=${token}`);
        console.log(response)
        return response;
    } catch (error) {
        console.error(error);
    };
};