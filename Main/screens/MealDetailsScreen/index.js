import colorAlpha from 'color-alpha';
import React, { useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../../../assets/data/MEALS';
import CustomButton from '../../common/CustomButton';
import MyHeaderButton from '../../common/HeaderButton';
import theme from '../../theme/default';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
    },
    text: {
        fontSize: 20,
        fontFamily: "Lato",
        color: '#fff',
        textShadowColor: colorAlpha(theme.light, 0.5),
        textShadowRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: colorAlpha(theme.dark, 0.4),
    },
    details: {
        fontSize: 14,
        fontFamily: "Lato",
        color: theme.dark,
        textShadowColor: theme.light,
        textShadowRadius: 1,
        margin: 0,
        textAlignVertical: 'center',
    },
    basicInfo: {
        padding: 0,
        margin: 0,
        height: 350,
        width: '100%',
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        flex: 10,
        backgroundColor: theme.dark,
    },
    mealDetail: {
        flex: 2,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    bgImage: {
        width: '100%',
        height: '100%',
    },
    section: {
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        margin: 15,
    },
    information: {
        fontSize: 15,
        fontFamily: 'Lato',
        marginLeft: 20,
        marginVertical: 10,
    },
    informationAnswer: {
        fontFamily: 'Lato-Bold',
    }
});

const rightElement = () => {
    return (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
            <Item title='Add to Favorites' iconName='ios-star-outline' onPress={() => console.log("Added to Favs")} />
        </HeaderButtons>
    );
}

const MealDetailsScreen = ({ navigation, route }) => {
    const { id, color } = route.params;
    const mealData = MEALS.find(meal => meal.id === id);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: mealData.title,
            headerTintColor: theme.dark,
            headerStyle: {
                backgroundColor: color,
            },
            headerRight: rightElement,
        });
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={{ ...styles.basicInfo, backgroundColor: color }}>
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground style={{ ...styles.bgImage }} source={{ uri: mealData.imageUrl }} >
                        <Text style={styles.text}>
                            {mealData.title}
                        </Text>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                    <Text style={styles.details}>
                        {mealData.complexity.toUpperCase()}
                    </Text>
                    <Text style={styles.details}>
                        {mealData.affordability.toUpperCase()}
                    </Text>
                    <Text style={styles.details}>
                        [{mealData.duration} MIN]
                    </Text>
                </View>
            </View>
            <View>
                <Text style={styles.section}>Ingredients: </Text>
                {mealData.ingredients.map((ingredient, index) => {
                    return <Text style={styles.information} key={index}>‣ {ingredient}</Text>
                })}

                <Text style={styles.section}>Steps: </Text>
                {mealData.steps.map((step, index) => {
                    return <Text style={styles.information} key={index}>{index + 1}. {step}</Text>
                })}

                <Text style={styles.section}>Additional Information: </Text>
                <Text style={styles.information}>Gluten Free: <Text style={styles.informationAnswer}>{mealData.isGlutenFree ? "YES" : "NO"}</Text></Text>
                <Text style={styles.information}>Vegan: <Text style={styles.informationAnswer}>{mealData.isVegan ? "YES" : "NO"}</Text></Text>
                <Text style={styles.information}>Vegetarian: <Text style={styles.informationAnswer}>{mealData.isVegetarian ? "YES" : "NO"}</Text></Text>
                <Text style={styles.information}>LactoseFree: <Text style={styles.informationAnswer}>{mealData.isLactoseFree ? "YES" : "NO"}</Text></Text>
            </View>

            <CustomButton
                title='Back'
                onPress={() =>
                    navigation.pop()}
                style={{
                    backgroundColor: color,
                }}
                textStyle={{
                    color: theme.dark,
                    textShadowColor: theme.dark,
                    textShadowRadius: 1,
                }}
            />
        </ScrollView>
    );
}

export default MealDetailsScreen;