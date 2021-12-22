import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../theme/default';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


const FiltersScreen = () => {
    return (
        <View>
            <Text>Filters Screen</Text>
        </View>
    );
}

FiltersScreen.navigationOptions = {
    headerTitle: 'Filters',
    headerTintColor: theme.header.tint,
    headerStyle: {
        backgroundColor: theme.primary,
    },
};


export default FiltersScreen;