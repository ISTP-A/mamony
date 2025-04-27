import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/main.page';
import './global.css';
import AddExpendScreen from './screens/add-expend.page';

const Stack = createNativeStackNavigator()

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name='main' component={MainScreen} />
      <Stack.Screen name='add.expend' component={AddExpendScreen} />
    </Stack.Navigator>
  )
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <RootStack />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
