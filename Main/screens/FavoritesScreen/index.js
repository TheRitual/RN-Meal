import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme/default';
import MealsList from '../../common/MealsList';
import MenuButton from '../../common/MenuButton';
import { useSelector } from 'react-redux';
import { selectFilteredMeals } from '../../store/reducers/mealsSlice';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


const FavoritesScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Your Favorites',
            headerTintColor: theme.light,
            headerStyle: {
                backgroundColor: theme.accent,
            },
            headerLeft: () => MenuButton(navigation),
        });
    }, []);
    const MEALS = useSelector(selectFilteredMeals);

    const displayedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <View style={styles.container}>
            <MealsList data={displayedMeals} navigation={navigation} color={theme.accent} />
        </View>
    );
}

export default FavoritesScreen;