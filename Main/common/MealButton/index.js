import colorAlpha from 'color-alpha';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: "Lato",
        color: '#fff',
        textShadowColor: colorAlpha('#fff', 0.5),
        textShadowRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: colorAlpha('#000', 0.4),
    },
    details: {
        fontSize: 14,
        fontFamily: "Lato",
        color: '#111',
        textShadowColor: '#333',
        textShadowRadius: 1,
        margin: 0,
        textAlignVertical: 'center',
    },
    container: {
        padding: 0,
        margin: '2%',
        borderRadius: 20,
        height: 200,
        width: '96%',
        overflow: 'hidden',
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        flex: 10,
        backgroundColor: '#000',
    },
    mealDetail: {
        flex: 2,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    bgImage: {
        width: '100%',
        height: '100%',
    }
});

const MealButton = ({ data, color, navigation }) => {
    const backgroundColor = color || '#000';

    const onClickHandler = () => {
        navigation.navigate({ routeName: 'MealDetails', params: { id: data.id } });
    }

    return (
        <TouchableOpacity style={{...styles.container, backgroundColor: backgroundColor}} onPress={() => onClickHandler()}>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                <ImageBackground style={{ ...styles.bgImage }} source={{ uri: data.imageUrl }} >
                    <Text style={styles.text}>
                        {data.title}
                    </Text>
                </ImageBackground>
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                <Text style={styles.details}>
                    {data.complexity.toUpperCase()}
                </Text>
                <Text style={styles.details}>
                    {data.affordability.toUpperCase()}
                </Text>
                <Text style={styles.details}>
                    [{data.duration} MIN]
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default MealButton;