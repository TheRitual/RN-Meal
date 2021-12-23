import React, { useEffect } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../../../assets/data/CATEGORIES'
import CategoryButton from './CategoryButton';
import theme from '../../theme/default';
import MenuButton from '../../common/MenuButton';

const CategoriesScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerTintColor: theme.light,
            headerTitle: 'Meal Categories',
            headerLeft: () => MenuButton(navigation),
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