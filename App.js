import React, { useState } from 'react';
import Main from './Main';
import AppLoading from 'expo-app-loading';
import fetchFonts from './utils/fetchFonts';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return fontsLoaded ?
    <Main />
    :
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={error => console.log("ERROR: ", error)} />
}

export default App;