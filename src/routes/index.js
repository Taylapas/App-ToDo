import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../Pages/Welcome'
import SignIn from '../Pages/SignIn'
import Tasks from '../Pages/Tasks'
import { Header } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    <Stack.Navigator>
        <Stack.Screen
        nome = "Welcome"  
        component={Welcome}
        options={{headerShown: false}}
        />

        <Stack.Screen
        nome = "SignIn"  
        component={SignIn}
        options={{headerShown: false}}
        />
    /</Stack.Navigator>
    )
    }