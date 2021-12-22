import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MEALS } from '../../../assets/data/MEALS';
import CustomButton from '../../common/CustomButton';
import theme from '../../theme/default';
import MealButton from '../../common/MealsList/MealButton';
import MealsList from '../../common/MealsList';

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

const CategoryMealsScreen = ({ navigation }) => {
    const title = navigation.getParam('title');
    const catId = navigation.getParam('catId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Category - {title}</Text>
            <MealsList data={displayedMeals} navigation={navigation} />
            <View style={styles.buttons}>
                <CustomButton title='Go Back' onPress={() => navigation.goBack()} />
            </View>
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