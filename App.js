import React, { useState } from 'react';
import Main from './Main';
import AppLoading from 'expo-app-loading';
import fetchFonts from './utils/fetchFonts';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import store from './Main/store';

enableScreens();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <Provider store={store}>
      {
        fontsLoaded ?
          <Main />
          :
          <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontsLoaded(true)}
            onError={error => console.log("ERROR: ", error)} />
      }
    </Provider>
  );
}

export default App;