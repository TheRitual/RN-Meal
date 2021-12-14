import React from 'react';
import { Button, Text, View } from 'react-native';

const CategoryMealsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Category Meals Screen</Text>
            <Button title='Go to Meal Details' onPress={() => navigation.navigate('MealDetails')} />
        </View>
    );
}

export default CategoryMealsScreen;