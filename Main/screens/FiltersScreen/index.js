import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../../common/MenuButton';
import theme from '../../theme/default';
import FilterCheckButton from './FilterCheckButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontFamily: 'Lato-Bold',
        margin: 20,
    }
});


const FiltersScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Filters',
            headerTintColor: theme.light,
            headerStyle: {
                backgroundColor: theme.primary,
            },
            headerLeft: () => MenuButton(navigation),
        });
    }, []);

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Filters</Text>
            <FilterCheckButton isChecked={isGlutenFree} text="Gluten Free" onPress={() => setIsGlutenFree(!isGlutenFree)} />
            <FilterCheckButton isChecked={isVegetarian} text="Vegetarian" onPress={() => setIsVegetarian(!isVegetarian)} />
            <FilterCheckButton isChecked={isVegan} text="Vegan" onPress={() => setIsVegan(!isVegan)} />
            <FilterCheckButton isChecked={isLactoseFree} text="Lactose Free" onPress={() => setIsLactoseFree(!isLactoseFree)} />
        </View>
    );
}

export default FiltersScreen;