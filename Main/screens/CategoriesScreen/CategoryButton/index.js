import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 5,
        padding: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    categoryText: {
        fontFamily: 'Lato-Bold',
        fontSize: 21,
        textAlign: 'right',
    }
});

const CategoryButton = ({ text, backgroundColor, navigation, catId }) => {
    return (
        <TouchableOpacity
            style={{ ...styles.gridItem, backgroundColor: backgroundColor }}
            onPress={() => navigation.navigate({ routeName: 'CategoryMeals', params: { title: text, catId: catId, color: backgroundColor } })}>
            <Text style={styles.categoryText} numberOfLines={2}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default CategoryButton;