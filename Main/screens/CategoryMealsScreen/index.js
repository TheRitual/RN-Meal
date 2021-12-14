import React from 'react';
import { Button, Text, View } from 'react-native';

const CategoryMealsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Category Meals Screen</Text>
            <Button title='Go to Meal Details' onPress={() => navigation.navigate('MealDetails')} />
            <Button title='Go Back' onPress={() => navigation.goBack()} />
        </View>
    );
}

export default CategoryMealsScreen;