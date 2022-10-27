import {View} from 'react-native';
import {Logo} from '../components/Logo';
import {NavBar} from '../components/navBar';
import {colorPalette} from '../styles/colors';
import {Text} from '@rneui/themed';
import {MyButton} from '../components/button';

function RestaurantOwnerProfileScreen({navigation, props}) {
  return (
    <View
      style={{flexDirection: 'column', alignItems: 'center', marginTop: 23}}>
      <View style={{height: 40, backgroundColor: colorPalette.White}} />
      <Text h2 h2Style={{color: colorPalette.Orange}}>
        {' '}
        {'Pantalla de Perfil de Restaurante - Vista Owner'}{' '}
      </Text>
      <View style={{height: 40, backgroundColor: colorPalette.White}} />
      <MyButton title="Guardar PH" />
      <MyButton title="Eliminar PH" />
    </View>
  );
}

export default RestaurantOwnerProfileScreen;
