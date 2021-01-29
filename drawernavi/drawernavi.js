import React from 'react'
import Homescreen from "../body/homescreen";
import List from "../body/list/list";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faNewspaper, faRss, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Logout from "../login/login";

const Drawer = createDrawerNavigator();
const drawernavi = () => {
    return (
        <Drawer.Navigator initialRouteName="Novita">
            <Drawer.Screen name="Novita" component={ Homescreen } options={ {
                drawerIcon: config => <FontAwesomeIcon icon={ faNewspaper } />
            } } />

            <Drawer.Screen name="Altro menu" component={ List } options={ {
                drawerIcon: config => <FontAwesomeIcon icon={ faRss } />
            } } />
            <Drawer.Screen name="Logout" component={ Logout } options={ {
                drawerIcon: config => <FontAwesomeIcon icon={ faSignOutAlt } />
            } } />
        </Drawer.Navigator>
    )
}

export default drawernavi;
