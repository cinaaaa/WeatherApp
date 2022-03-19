import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LazyImage from "../LazyImage/LazyImage.component";

const RowComponent = ({
  title,
  desc,
  imageURL
}) => {
  return (
    <View style={styles.parent}>

        <View style={styles.halfStart}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text>
                {desc}
            </Text>
        </View>

        <View style={styles.halfEnd}>
            <LazyImage imageURL={imageURL} />
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
        padding: 10,
    },
    halfEnd: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    halfStart: {
        width: '50%',
        justifyContent: 'center',
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold'
    }
});

export default RowComponent;