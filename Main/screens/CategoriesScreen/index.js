import React from 'react';
import { Button, Text, View } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
    return (
        <View>
            <Text>CategoriesScreen</Text>
            <Button title='Go to Meals' onPress={() => navigation.navigate('CategoryMeals')} />
        </View>
    );
}

export default CategoriesScreen;