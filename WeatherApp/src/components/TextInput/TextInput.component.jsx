import React, {useState} from "react";
import { StyleSheet, TextInput } from "react-native";

const TextInputComponent = () => {
  const [city, onChangeCity] = useState(null);

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCity}
        value={city}
        placeholder="Search for a city..."
        keyboardType="numeric"
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
});

export default TextInputComponent;