import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../../common/MenuButton';
import theme from '../../theme/default';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

    return (
        <View>
            <Text>Filters Screen</Text>
        </View>
    );
}

export default FiltersScreen;