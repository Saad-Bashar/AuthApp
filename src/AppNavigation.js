import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingScreen from './screens/LandingScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';

const AppNavigator = createStackNavigator({
	Landing: {
		screen: LandingScreen,
	},
	SignUp: {
		screen: SignUpScreen,
	},
	SignInScreen: {
		screen: SignInScreen,
	},
});

export default createAppContainer(AppNavigator);
