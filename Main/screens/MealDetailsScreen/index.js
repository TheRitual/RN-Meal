import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../../../assets/data/MEALS';
import CustomButton from '../../common/CustomButton';
import MyHeaderButton from '../../common/HeaderButton';
import theme from '../../theme/default';

const rightElement = () => {
    return (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
            <Item title='Add to Favorites' iconName='ios-star-outline' onPress={() => console.log("Added to Favs")} />
        </HeaderButtons>
    );
}

const MealDetailsScreen = ({ navigation, route }) => {
    const { id, color } = route.params;
    const mealData = MEALS.find(meal => meal.id === id);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: mealData.title,
            headerTintColor: theme.dark,
            headerStyle: {
                backgroundColor: color,
            },
            headerRight: rightElement,
        });
    }, []);

    

    return (
        <View>
            <Text> {mealData.title}</Text>
            <CustomButton title='Close' onPress={() => navigation.pop()} />
            <CustomButton title='Back To Top' onPress={() => navigation.popToTop()} />
        </View>
    );
}

export default MealDetailsScreen;