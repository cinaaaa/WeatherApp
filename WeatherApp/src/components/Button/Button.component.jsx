import { StyleSheet,Text,Pressable } from "react-native";

const ButtonComponent = ({
    onPressTrigged,
    title,
    loading
}) => (
    <Pressable style={styles.button} onPress={onPressTrigged}>
        { loading &&
            <Text style={styles.text}>
                Loading...
            </Text>
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
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default ButtonComponent;