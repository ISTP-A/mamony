import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './global.css';
import PageMain from './screens/main.page';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <PageMain />
    </GestureHandlerRootView>
  );
}

export default App;
