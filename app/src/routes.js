import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';
import Register from './pages/Register';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'Search Dev'
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'Profile Github'
        }
      },
      Register: {
        screen: Register,
        navigationOptions: {
          title: 'Register Dev'
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#7D40E7'
        }
      }
    }
  )
);

export default Routes;
