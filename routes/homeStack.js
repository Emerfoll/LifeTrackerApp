import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import singleLifeTotal from "../app/Screens/singleLifeTotal";
import homePage from "../app/Screens/homePage";
import twoPlayer from "../app/Screens/twoPlayer";
import threePlayer from "../app/Screens/threePlayer";
import fourPlayer from "../app/Screens/fourPlayer";

// Used for "Stack Navigation"
const screens = {
    Home : {
        screen : homePage,
    },
    Single: {
        screen : singleLifeTotal,
    },
    Two: {
        screen : twoPlayer,
    },
    Three: {
        screen : threePlayer,
    },
    Four: {
        screen : fourPlayer,
    }
};

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);