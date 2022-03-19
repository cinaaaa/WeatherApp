import { useState } from "react";
import { StyleSheet,View } from "react-native";

import ButtonComponent from "../../components/Button/Button.component";
import TextInputComponent from "../../components/TextInput/TextInput.component";

import { fetch_weather } from "../../context/actions";
import { useDispatch, useSelector } from "react-redux";

const SearchBarContainer = () => {

    const [city, onChangeCity] = useState("");
    const loading = useSelector(state => state.weather.loading);
    const dispatch = useDispatch();

    return (
        <View style={styles.parent}>

            <View style={styles.twoThird}>
                <TextInputComponent 
                    city={city}
                    onChangeCity={onChangeCity}
                />
            </View>

            <View style={styles.oneThird}>
                <ButtonComponent 
                    title='Search' 
                    onPressTrigged={() => dispatch( fetch_weather(city) )}
                    loading={loading}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 12,
    },
    twoThird: {
        width: '70%',
        marginRight: 10,
    },
    oneThird: {
        width: '30%',
    }
});

export default SearchBarContainer;