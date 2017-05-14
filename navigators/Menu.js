import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import BrandScreen from '../screens/BrandScreen';
import CaloriesScreen from '../screens/CaloriesScreen';

const Menu = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Brand: {
      screen: BrandScreen,
    },
    Calories: {
      screen: CaloriesScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default Menu;
