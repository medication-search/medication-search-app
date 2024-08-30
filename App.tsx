import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Text>홈 화면</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
