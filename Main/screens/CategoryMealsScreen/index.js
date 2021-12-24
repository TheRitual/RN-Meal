import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../common/CustomButton';
import theme from '../../theme/default';
import MealsList from '../../common/MealsList';
import { useSelector } from 'react-redux';
import { selectFilteredMeals } from '../../store/reducers/mealsSlice';

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Lato-Bold',
        padding: 0,
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const CategoryMealsScreen = ({ route, navigation }) => {
    const { title, catId, color } = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: title,
            headerTintColor: theme.dark,
            headerStyle: {
                backgroundColor: color,
            },
        });
    }, []);

    const MEALS = useSelector(selectFilteredMeals);

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Category - {title}</Text>
            <MealsList data={displayedMeals} color={color} navigation={navigation} />
            <View style={styles.buttons}>
                <CustomButton title='Go Back' style={{ backgroundColor: color }} textStyle={{ color: theme.dark }} onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
}

export default CategoryMealsScreen;