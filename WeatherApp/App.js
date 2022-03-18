import React from 'react';
import { 
  SafeAreaView,
  StyleSheet,
  StatusBar 
} from 'react-native';

// Redux
import { store } from './src/context/store';
import { Provider } from 'react-redux';

// Containers
import HomeContainer from "./src/containers/Home/Home.container";


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <HomeContainer />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight
  },
});