import Welcome from './screens/Welcome/Welcome'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import ProdDetails from './screens/ProdDetails/ProdDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Cart from './screens/Cart/Cart';
import Wishlist from './screens/Wishlist/Wishlist';
import Notification from './screens/Notifications/Notification';
import Profile from './screens/Profile/Profile';
import Payment from './screens/Payment/Payment';



const HomeTab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <HomeTab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart-sharp' : 'cart-outline';
          } else if (route.name === 'Wishlist') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications-sharp' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff8727',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
        
      })}
    >
      <HomeTab.Screen name="Home" component={Home}  />
      <HomeTab.Screen name="Cart" component={Cart}  />
      <HomeTab.Screen name="Wishlist" component={Wishlist}  />
      <HomeTab.Screen name="Notification" component={Notification}  />
      <HomeTab.Screen name="Profile" component={Profile}  />




    </HomeTab.Navigator>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen component={Welcome} name='Welcome' />
        <Stack.Screen component={Login} name='Login' />
        <Stack.Screen component={HomeTabs} name='Home' />
        <Stack.Screen component={ProdDetails} name='ProdDetails' />
        <Stack.Screen component={Payment} name='Payment' />


      </Stack.Navigator>
    </NavigationContainer>

  );
}




