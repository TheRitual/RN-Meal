import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: "Lato",
        color: '#fff',
    },
    container: {
        padding: 20,
        margin: 15,
        borderRadius: 20,
        backgroundColor: '#000',
        
    }
});

const MealButton = ({ data }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>
                {data.title}
            </Text>
        </TouchableOpacity>
    );
}

export default MealButton;