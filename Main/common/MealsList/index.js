import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import theme from '../../theme/default';
import MealButton from './MealButton';

const styles = StyleSheet.create({
    list: {
        flex: 8,
    },
});

const MealsList = ({ data, navigation, color }) => {
    const bgColor = color || theme.accent;

    return (
        <View style={styles.list}>
            <FlatList data={data} renderItem={({ item }) => <MealButton data={item} navigation={navigation} color={bgColor} />} />
        </View>
    );
}

export default MealsList;