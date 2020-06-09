import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Searchscreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: Searchscreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);