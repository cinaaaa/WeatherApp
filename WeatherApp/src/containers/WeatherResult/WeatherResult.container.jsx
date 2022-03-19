import { SectionList, StyleSheet, Text, View } from 'react-native';

import RowComponent from "../../components/Row/Row.component";

const ICON_URL = 'http://openweathermap.org/img/wn/';

const WeatherResultContainer = ({
    weatherData
}) => {
    return (
      <View style={styles.container}>
        <SectionList
            sections={weatherData.map((i) => {
                return {
                   title: new Date(i.dt).toLocaleString().split(' ').slice(0, 3).join(' '),
                   data: [...i.weather]
                }
            })}
            renderItem={({item}) => {
                return <RowComponent title={item.main} desc={item.description} imageURL={`${ICON_URL}${item.icon}@2x.png`} />
            }}
            renderSectionHeader={ ({section}) => {
                return (
                    <Text style={styles.sectionHeader}>
                        {section.title}
                    </Text>
                )
            }}
            keyExtractor={(_, index) => index}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 5,
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'black',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })

export default WeatherResultContainer;