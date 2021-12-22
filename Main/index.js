import React from 'react';
import { StatusBar } from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';

const Main = () => {
    return (
        <>
            <StatusBar barStyle="light-content" translucent={false} />
            <MealsNavigator />
        </>
    );
}

export default Main;