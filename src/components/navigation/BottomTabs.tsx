import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '@assets/icons/bottom-tabs/Home.svg';
import SearchClick from '@assets/icons/bottom-tabs/SearchClick.svg';
import SearchNonClick from '@assets/icons/bottom-tabs/SearchNonClick.svg';
import InformationClick from '@assets/icons/bottom-tabs/InformationClick.svg';
import InformationNonClick from '@assets/icons/bottom-tabs/InformationNonClick.svg';
import FavoritesClick from '@assets/icons/bottom-tabs/FavoritesClick.svg';
import FavoritesNonClick from '@assets/icons/bottom-tabs/FavoritesNonClick.svg';
import Home from '@screens/Home.tsx';
import Search from '@screens/Search.tsx';

const Tab = createBottomTabNavigator();

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
        tabBarStyle: {
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          height: 55,
        },
      })}>
      <Tab.Screen name="홈" component={Home} options={{unmountOnBlur: true}} />
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

export default BottomTabs;
