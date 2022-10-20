
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTES } from '../ui';
import { OwnerHome} from '../ui/screens';
import DrawerOptionsOwner from './DrawerOptionsOwner';

const Drawer = createDrawerNavigator();

function DrawerOwnerNavigator(props){
    return (
        <Drawer.Navigator 
          useLegacyImplementation 
          initialRouteName={ROUTES.OWNER_HOME_DRAWER}
          drawerContent={(props) => <DrawerOptionsOwner {...props}></DrawerOptionsOwner>}
          >
            <Drawer.Screen name = {ROUTES.OWNER_HOME_DRAWER} component = {OwnerHome}
            options={{
              title : 'Mis Restaurantes',
            }}
            ></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerOwnerNavigator;