import { StyleSheet,View } from "react-native";

import ButtonComponent from "../../components/Button/Button.component";
import TextInputComponent from "../../components/TextInput/TextInput.component";

const SearchBarContainer = () => {
    return (
        <View style={styles.parent}>

            <View style={styles.twoThird}>
                <TextInputComponent />
            </View>

            <View style={styles.oneThird}>
                <ButtonComponent title='Search' onPressTrigged={() => {}} />
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