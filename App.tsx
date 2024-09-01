import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

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
