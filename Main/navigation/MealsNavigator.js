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

const StackNav = createStackNavigator();
const TabsNav = createMaterialBottomTabNavigator();

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
        <StackNav.Navigator initialRouteName="Categories">
            <StackNav.Screen name="Categories" component={CategoriesScreen} options={navigatorsOptions} />
            <StackNav.Screen name="CategoryMeals" component={CategoryMealsScreen} options={navigatorsOptions} />
            <StackNav.Screen name="MealDetails" component={MealDetailsScreen} options={navigatorsOptions} />
        </StackNav.Navigator>
    );
}

const FavoritesNavigator = () => {
    return (
        <StackNav.Navigator initialRouteName="Favorites">
            <StackNav.Screen name="Favorites" component={FavoritesScreen} options={navigatorsOptions} />
            <StackNav.Screen name="MealDetails" component={MealDetailsScreen} options={navigatorsOptions} />
        </StackNav.Navigator>
    );
}

const FiltersNavigator = () => {
    return (
        <StackNav.Navigator initialRouteName="Filters">
            <StackNav.Screen name="Filters" component={FiltersScreen} options={navigatorsOptions} />
        </StackNav.Navigator>
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


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Meals"
                component={MealsFavNavigator}
                options={{
                    ...navigatorsOptions,
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Filters"
                component={FiltersNavigator}
                options={{
                    ...navigatorsOptions,
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    );
}

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

export default MainNavigator;