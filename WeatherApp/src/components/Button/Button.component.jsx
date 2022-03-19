import { StyleSheet,Text,Pressable,ActivityIndicator } from "react-native";

const ButtonComponent = ({
    onPressTrigged,
    title,
    loading,
    disabled,
}) => (
    <Pressable disabled={disabled} style={disabled ? styles.buttonDisabled : styles.button} onPress={onPressTrigged}>
        { loading &&
            <ActivityIndicator color='white' />
        }
        { !loading &&
            <Text style={styles.text}>
                {title}
            </Text>
        }
    </Pressable>
);

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    buttonDisabled: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        opacity: 0.5
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default ButtonComponent;