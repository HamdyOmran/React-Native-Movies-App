import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';

const navigator = createStackNavigator({
  Home : HomeScreen,
  MovieDetail: MovieDetailScreen
},
{
  initialRouteName : 'Home',
  defaultNavigationOption : {
    title : 'Movies'
  }
});

export default createAppContainer(navigator);

