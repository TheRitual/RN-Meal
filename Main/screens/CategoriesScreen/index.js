import React, { useEffect } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../../../assets/data/CATEGORIES'
import CategoryButton from './CategoryButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../../common/HeaderButton';
import theme from '../../theme/default';

const leftElement = () => {
    return (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
            <Item title='Add to Favorites' iconName='ios-menu' onPress={() => console.log("Otwiera Menu")} />
        </HeaderButtons>
    );
}

const CategoriesScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerTintColor: theme.light,
            headerTitle: 'Meal Categories',
            headerLeft: leftElement,
        });
    }, []);
    return (
        <View>
            <FlatList
                data={CATEGORIES}
                numColumns={2}
                renderItem={({ item }) => {
                    return <CategoryButton
                        text={item.title}
                        catId={item.id}
                        backgroundColor={item.color}
                        navigation={navigation} />
                }} />
        </View>
    );
};

export default CategoriesScreen;