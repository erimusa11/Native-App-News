import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../login/login"
import PostDisplay from "../body/list/list";
import MainDrawerNav from "../drawernavi/drawernavi";
const Stack = createStackNavigator();
const stacknavi = () => {
  return (
    <Stack.Navigator options={ {
      headerStyle: {
        backgroundColor: '#0575E6',
      },
    } } screenOptions={ {

      headerShown: false
    } }>
      <Stack.Screen name="Home" component={ MainDrawerNav } />
      <Stack.Screen name="Login" component={ Login } />
      <Stack.Screen name="Registrati" component={ Login } />
      <Stack.Screen
        options={ {
          title: 'Torna indietro',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0575E6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          },

        } } name="displaypost" component={ PostDisplay } />

    </Stack.Navigator>
  )
}

export default stacknavi;
