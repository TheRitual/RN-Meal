import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealButton from './MealButton';

const styles= StyleSheet.create({
    list: {
        flex: 8,
    },
});

const MealsList = ({ data, navigation }) => {
    return (
        <View style={styles.list}>
            <FlatList data={data} renderItem={({ item }) => <MealButton data={item} navigation={navigation} color={navigation.getParam('color')} />} />
        </View>
    );
}

export default MealsList;