import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MEALS } from '../../../assets/data/MEALS';
import CustomButton from '../../common/CustomButton';
import theme from '../../theme/default';
import MealButton from './MealButton';

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: 'Lato-Bold',
        padding: 20,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const CategoryMealsScreen = ({ navigation }) => {
    const title = navigation.getParam('title');
    const catId = navigation.getParam('catId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Category - {title}</Text>
            <FlatList data={displayedMeals} renderItem={({ item }) => <MealButton data={item} color={navigation.getParam('color')} />} />
            <CustomButton title='Go to Meal Details' onPress={() => navigation.navigate('MealDetails')} style={styles.button} />
            <CustomButton title='Go Back' onPress={() => navigation.goBack()} style={styles.button} />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const title = navigationData.navigation.getParam('title');
    const color = navigationData.navigation.getParam('color');
    return {
        headerTitle: title,
        headerTintColor: theme.dark,
        headerStyle: {
            backgroundColor: color,
        },
    }
};

export default CategoryMealsScreen;