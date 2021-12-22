import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import theme from '../theme/default';
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

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
    defaultNavigationOptions: {
        cardShadowEnabled: true,
        
    }
});

const iconGenerator = (props, icon) => {
    return (
        <Ionicons name={icon} size={25} color={props.tintColor} />
    );
}

const MealsFavTabNavigator = createMaterialBottomTabNavigator({
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
    activeColor: theme.light,
    barStyle: {
        backgroundColor: theme.primary,
    }
});

export default createAppContainer(MealsFavTabNavigator);