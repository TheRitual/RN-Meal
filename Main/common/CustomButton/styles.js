import { StyleSheet } from "react-native";
import theme from '../../theme/default';

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 7,
        elevation: 1,
        backgroundColor: theme.primary,
        minWidth: 160,
        margin: 10,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'Lato',
      },
});

export default styles;