import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import singleLifeTotal from "../app/Screens/singleLifeTotal";
import homePage from "../app/Screens/homePage";

// Used for "Stack Navigation"
const screens = {
    Home : {
        screen : homePage,
    },
    Single: {
        screen : singleLifeTotal,
    },
};

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);