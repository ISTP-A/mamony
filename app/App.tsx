import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import './global.css';
import {BottomCTA} from './components/ui/button';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View className="bg">
        <Text className="">ㅎㅇㅎㅇ</Text>
      </View>
      <BottomCTA>
        <Text className="text-white">저장하기</Text>
      </BottomCTA>
    </SafeAreaView>
  );
}

export default App;
