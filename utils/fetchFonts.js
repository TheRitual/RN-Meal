import * as Font from 'expo-font';

const fetchFonts = () => {
    return Font.loadAsync({
        'lato' : require('../assets/fonts/Lato-Regular.ttf'),
        'lato-bold' : require('../assets/fonts/Lato-Bold.ttf'),
    });
}

export default fetchFonts;