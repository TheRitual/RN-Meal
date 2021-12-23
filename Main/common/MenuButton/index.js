import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../../common/HeaderButton';

const MenuButton = (navigation) => {
    return (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
            <Item title='Add to Favorites' iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>
    );
}

export default MenuButton;