import { StyleSheet, Text, View } from "react-native";

const ErrorComponent = ({
  condition
}) => {

    if (Boolean(condition)) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>
                  {condition}
                </Text>
            </View>
        );
    } else {
       return <></>
    };

};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 20,
        marginTop: 15,
        alignSelf: 'center'
    }
});

export default ErrorComponent;