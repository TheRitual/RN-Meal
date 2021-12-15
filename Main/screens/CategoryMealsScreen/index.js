import React from 'react';
import { Button, Text, View } from 'react-native';
import theme from '../../theme/default';

const CategoryMealsScreen = ({ navigation }) => {
    const title = navigation.getParam('title');
    return (
        <View>
            <Text>Category - {title}</Text>
            <Button title='Go to Meal Details' onPress={() => navigation.navigate('MealDetails')} />
            <Button title='Go Back' onPress={() => navigation.goBack()} />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const title = navigationData.navigation.getParam('title');
    const color = navigationData.navigation.getParam('color');
    return {
        headerTitle: title,
        headerTintColor: theme.dark,
        headerStyle: {
            backgroundColor: color,
        },
    }
};

export default CategoryMealsScreen;