import React from 'react';
import { Text, View, Button } from 'react-native';

const MealDetailsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>MealDetailScreen</Text>
            <Button title='Close' onPress={() => navigation.pop()} />
            <Button title='Back To Top' onPress={() => navigation.popToTop()} />
        </View>
    );
}

export default MealDetailsScreen;