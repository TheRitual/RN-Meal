import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme/default';

const MyHeaderButton = (props) => {
    return (
        <HeaderButton {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={theme.light}
        />
    );
}

export default MyHeaderButton;