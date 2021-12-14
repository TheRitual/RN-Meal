import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 20,
    },
    categoryText: {
        fontFamily: 'Lato-Bold',
    }
});

const CategoryButton = ({ text, backgroundColor, navigation }) => {
    return (
        <TouchableOpacity
            style={{ ...styles.gridItem, backgroundColor: backgroundColor }}
            onPress={() => navigation.navigate({routeName: 'CategoryMeals', params : params})}>
            <Text style={styles.categoryText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default CategoryButton;