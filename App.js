import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNav from "./stacknavi/stacknavi";

const App = () => {
  return (

    <NavigationContainer >
      <MainStackNav />
    </NavigationContainer>
  );
}
export default App;