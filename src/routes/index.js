import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../Pages/Welcome'
import SignIn from '../Pages/SignIn'
import Tasks from '../Pages/Tasks'


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    <Stack.Navigator>
        <Stack.Screen
        name = "Welcome"  
        component={Welcome}
        options={{headerShown: false}}
        />

        <Stack.Screen
        name = "SignIn"  
        component={SignIn}
        options={{headerShown: false}}
        />

        <Stack.Screen
        name = "Tasks"
        component={Tasks}
        options={{headerShown:false}}
        />

        
    </Stack.Navigator>
    )
    }
