import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import theme from '../theme/default';
import { Ionicons } from "@expo/vector-icons";

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetails: {
        screen: MealDetailsScreen,
    },
}, {
    headerMode: "screen",
});

const iconGenerator = (props, icon) => {
    return (
        <Ionicons name={icon} size={25} color={props.tintColor} />
    );
}

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => iconGenerator(tabInfo, 'ios-restaurant'),
        },
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => iconGenerator(tabInfo, 'ios-star'),
        },
    }
}, {
    tabBarOptions: {
        activeTintColor: theme.light,
        activeBackgroundColor: theme.primary,
        labelPosition: "below-icon",
        
        labelStyle: {
            fontSize: 20,
            fontFamily: 'Lato-Bold',
        },
    }
});

export default createAppContainer(MealsFavTabNavigator);