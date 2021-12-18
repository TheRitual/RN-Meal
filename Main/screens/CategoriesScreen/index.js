import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../../../assets/data/CATEGORIES'
import CategoryButton from './CategoryButton';
import theme from '../../theme/default';

const CategoriesScreen = ({ navigation }) => {

    return (
        <View>
            <FlatList
                data={CATEGORIES}
                numColumns={2}
                renderItem={({ item }) =>{
                    return <CategoryButton
                        text={item.title}
                        catId={item.id}
                        backgroundColor={item.color}
                        navigation={navigation} />}} />

        </View>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerTintColor: theme.header.tint,
    headerStyle: {
        backgroundColor: theme.header.background,
    },
};

export default CategoriesScreen;