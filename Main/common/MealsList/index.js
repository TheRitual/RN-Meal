import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { color } from 'react-native-reanimated';
import MealButton from './MealButton';

const styles = StyleSheet.create({
    list: {
        flex: 8,
    },
});

const MealsList = ({ data, navigation, color }) => {
    const bgColor = color || navigation.getParam('color');
    return (
        <View style={styles.list}>
            <FlatList data={data} renderItem={({ item }) => <MealButton data={item} navigation={navigation} color={bgColor} />} />
        </View>
    );
}

export default MealsList;