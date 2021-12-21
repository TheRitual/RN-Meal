import React from 'react';
import { Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../../../assets/data/MEALS';
import CustomButton from '../../common/CustomButton';
import MyHeaderButton from '../../common/HeaderButton';

const MealDetailsScreen = ({ navigation }) => {
    const mealId = navigation.getParam('id');
    const mealData = MEALS.find(meal => meal.id === mealId);

    return (
        <View>
            <Text> {mealData.title}</Text>
            <CustomButton title='Close' onPress={() => navigation.pop()} />
            <CustomButton title='Back To Top' onPress={() => navigation.popToTop()} />
        </View>
    );
}

const rightElement = () => {
    return (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
            <Item title='Add to Favorites' iconName='ios-star-outline' onPress={() => console.log("Added to Favs")}/>
        </HeaderButtons>
    );
}

MealDetailsScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('id');
    const mealData = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: mealData.title,
        headerRight: rightElement,
    }
};


export default MealDetailsScreen;