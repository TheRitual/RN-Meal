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
import { createDrawerNavigator } from '@react-navigation/drawer';

const MealsNav = createStackNavigator();
const FavoritesNav = createStackNavigator();
const TabsNav = createMaterialBottomTabNavigator();
//const DrawerTab = createMaterialBottomTabNavigator();

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
        <MealsNav.Navigator initialRouteName="Categories">
            <MealsNav.Screen name="Categories" component={CategoriesScreen} options={navigatorsOptions} />
            <MealsNav.Screen name="CategoryMeals" component={CategoryMealsScreen} options={navigatorsOptions} />
            <MealsNav.Screen name="MealDetails" component={MealDetailsScreen} options={navigatorsOptions} />
        </MealsNav.Navigator>
    );
}

const FavoritesNavigator = () => {
    return (
        <FavoritesNav.Navigator initialRouteName="Categories">
            <FavoritesNav.Screen name="Favorites" component={FavoritesScreen} options={navigatorsOptions} />
            <FavoritesNav.Screen name="MealDetails" component={MealDetailsScreen} options={navigatorsOptions} />
        </FavoritesNav.Navigator>
    );
}

const MealsFavNavigator = () => {
    return (
        <TabsNav.Navigator
            initialRouteName="Meals"
            activeColor={theme.light}
            inactiveColor="#898989"
            shifting={true}
        >
            <TabsNav.Screen
                name="Meals"
                component={MealsNavigator}
                options={{
                    ...navigatorsOptions,
                    headerShown: false,
                    tabBarIcon: (tabInfo) => iconGenerator(tabInfo, 'ios-restaurant'),
                    tabBarLabel: 'Meals',
                    tabBarColor: theme.primary,
                }} />
            <TabsNav.Screen
                name="YourFavorites"
                component={FavoritesNavigator}
                options={{
                    ...navigatorsOptions,
                    tabBarIcon: (tabInfo) => iconGenerator(tabInfo, 'ios-star'),
                    tabBarLabel: 'Your Favorites',
                    tabBarColor: theme.accent,
                }}
            />
        </TabsNav.Navigator>
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