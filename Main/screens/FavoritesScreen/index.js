import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme/default';
import { MEALS } from '../../../assets/data/MEALS';
import MealsList from '../../common/MealsList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


const FavoritesScreen = ({ navigation }) => {

    const displayedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <View style={styles.container}>
            <MealsList data={displayedMeals} navigation={navigation} color={theme.accent} />
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