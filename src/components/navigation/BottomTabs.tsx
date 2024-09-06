import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '@assets/icons/bottom-tabs/Home.svg';
import SearchClick from '@assets/icons/bottom-tabs/SearchClick.svg';
import SearchNonClick from '@assets/icons/bottom-tabs/SearchNonClick.svg';
import InformationClick from '@assets/icons/bottom-tabs/InformationClick.svg';
import InformationNonClick from '@assets/icons/bottom-tabs/InformationNonClick.svg';
import FavoritesClick from '@assets/icons/bottom-tabs/FavoritesClick.svg';
import FavoritesNonClick from '@assets/icons/bottom-tabs/FavoritesNonClick.svg';
import Logo from '@assets/icons/home/Header.svg';
import Home from '@screens/Home.tsx';
import Search from '@screens/Search.tsx';

const Tab = createBottomTabNavigator();

function HeaderLogo() {
  return (
    <View style={styles.headerContainer}>
      <Logo height={40} />
    </View>
  );
}

function getTabBarIcon(routeName: string, focused: boolean) {
  switch (routeName) {
    case '홈':
      return focused ? (
        <HomeIcon width={32} height={34} />
      ) : (
        <HomeIcon width={32} height={34} />
      );
    case '모양찾기':
      return focused ? (
        <SearchClick width={20} height={20} />
      ) : (
        <SearchNonClick width={20} height={20} />
      );
    case '의약정보':
      return focused ? (
        <InformationClick width={20} height={20} />
      ) : (
        <InformationNonClick width={20} height={20} />
      );
    case '즐겨찾기':
      return focused ? (
        <FavoritesClick width={19} height={20} />
      ) : (
        <FavoritesNonClick width={19} height={20} />
      );
    default:
      return null;
  }
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#6ECEC9',
        tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBar,
        headerStyle: styles.headerStyle,
      })}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          unmountOnBlur: true,
          headerTitle: () => <HeaderLogo />,
        }}
      />
      <Tab.Screen
        name="모양찾기"
        component={Search}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="의약정보"
        component={Home}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="즐겨찾기"
        component={Home}
        options={{unmountOnBlur: true}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {height: 45},
  tabBar: {
    height: 60,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
  tabBarLabel: {
    bottom: 5,
  },
});

export default BottomTabs;
