import React from 'react';
import { Text, View } from 'react-native';
import theme from '../../theme/default';

const FavoritesScreen = () => {
    return (
        <View>
            <Text>FavoritesScreen</Text>
        </View>
    );
}

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites',
    headerTintColor: theme.header.tint,
    headerStyle: {
        backgroundColor: theme.accent,
    },
};

export default FavoritesScreen;