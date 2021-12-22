import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import theme from '../theme/default';
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// import { createDrawerNavigator } from '@react-navigation/drawer';

const MealsStackNavigator = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

const iconGenerator = (props, icon) => {
    return (
        <Ionicons name={icon} size={25} color={props.color} />
    );
}

const navigatorsOptions = {
    headerMode: "screen",
    defaultNavigationOptions: {
        cardShadowEnabled: true,
    },
    headerTintColor: theme.header.tint,
    headerStyle: {
        backgroundColor: theme.header.background,
    },
}

const MealsNavigator = () => {
    return (
        <MealsStackNavigator.Navigator initialRouteName="Categories">
            <MealsStackNavigator.Screen name="Categories" component={CategoriesScreen} options={navigatorsOptions} />
            <MealsStackNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen} options={navigatorsOptions} />
            <MealsStackNavigator.Screen name="MealDetails" component={MealDetailsScreen} options={navigatorsOptions} />
        </MealsStackNavigator.Navigator>
    );
}

const MealsFavNavigator = () => {
    return (
        <Tabs.Navigator
            initialRouteName="Meals"
            activeColor={theme.light}
            inactiveColor="#898989"
            shifting={true}
        >
            <Tabs.Screen
                name="Meals"
                component={MealsNavigator}
                options={{
                    ...navigatorsOptions,
                    headerShown: false,
                    tabBarIcon: (tabInfo) => iconGenerator(tabInfo, 'ios-restaurant'),
                    tabBarLabel: 'Meals',
                    tabBarColor: theme.primary,
                }} />
            <Tabs.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    ...navigatorsOptions,
                    tabBarIcon: (tabInfo) => iconGenerator(tabInfo, 'ios-star'),
                    tabBarLabel: 'Your Favorites',
                    tabBarColor: theme.accent,
                }}
            />
        </Tabs.Navigator>
    );
}

/*

const FavoritesNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
    },
    MealDetails: {
        screen: MealDetailsScreen,
    },
}, stackNavigatorsParams);



const MealsFavTabNavigator = createMaterialBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => iconGenerator(tabInfo, 'ios-restaurant'),
            tabBarColor: theme.primary,
        },
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => iconGenerator(tabInfo, 'ios-star'),
            tabBarColor: theme.accent,
        },
    }
}, {
    activeColor: theme.light,
    shifting: true,
    barStyle: {
        backgroundColor: theme.primary,
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen,
});

const MainNavigator =  createDrawerNavigator({
    MealFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator,
});

*/

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <MealsFavNavigator />
        </NavigationContainer>
    );
}

export default MainNavigator;