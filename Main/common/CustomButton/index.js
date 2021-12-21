import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const CustomButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={{ ...styles.button, ...props.style }}>
                <Text {...props} style={{ ...styles.text, ...props.textStyle }} >
                    {props.title || props.children || "?"}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default CustomButton;