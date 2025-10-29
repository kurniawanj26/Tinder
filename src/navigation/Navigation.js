import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet } from 'react-native';
import { TAB_BAR_DEFAULT } from '../utils/constants';
import images from '../../assets/images';

import HomeScreen from '../screens/HomeScreen';
import LikedOpponentListScreen from '../screens/LikedOpponentListScreen';
import SplashScreen from '../screens/SplashScreen';
import NotImplementedScreen from '../screens/NotImplementedScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ff5864',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          height: TAB_BAR_DEFAULT,
          borderTopWidth: 0,
        },
        tabBarIconStyle: { width: 40, height: 40 },
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === 'Home') {
            icon = images.flame;
          } else if (route.name === 'Liked') {
            icon = images.pinkStar;
          } else if (route.name === 'Search') {
            icon = images.grid;
          } else if (route.name === 'Profile') {
            icon = images.profile;
          } else if (route.name === 'Chat') {
            icon = images.chat;
          }
          return (
            <Image
              source={icon}
              style={[styles.icon, { tintColor: !focused && '#999' }]}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Liked" component={LikedOpponentListScreen} />
      <Tab.Screen name="Search" component={NotImplementedScreen} />
      <Tab.Screen name="Chat" component={NotImplementedScreen} />
      <Tab.Screen name="Profile" component={NotImplementedScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
