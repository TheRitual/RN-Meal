import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../../../theme/default';

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: theme.dark,
        borderRadius: 20,
        flexDirection: 'row',
        padding: 12,
        minWidth: 200,
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
    checkBox: {
        flex: 2,
        justifyContent: 'center',
        alignContent: 'center',
    },
    textBox: {
        flex: 8,
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonText: {
        fontFamily: 'Lato',
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

const FilterCheckButton = (props) => {
    const { isChecked } = props;

    return (
        <TouchableOpacity style={{ ...styles.container, ...props.style }} onPress={props.onPress}>
            <View style={styles.textBox}>
                <Text style={{ ...styles.buttonText, ...props.textStyle }}>
                    {props.text || props.children || ""}
                </Text>
            </View>
            <View style={styles.checkBox}>
                <Ionicons name={isChecked ? "ios-checkmark-circle-sharp" : "ellipse-outline"} size={24} color={isChecked ? theme.accent : theme.dark} />
            </View>
        </TouchableOpacity>
    );
}

export default FilterCheckButton;