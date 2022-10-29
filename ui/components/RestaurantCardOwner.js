import React from 'react';
import { View , StyleSheet , Dimensions} from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import I18n from "../../assets/localization/I18n";
import Images from '../../assets/images/index';
import { Theme } from '../styles/Theme';
function RestaurantCardOwner({name = 'Rodizio', 

address = 'Honduras 5500', score = 5, onMenuPressed = {}, onPhotoPress = {},
props}) {

  return (
    <View style={{width:'100%' , height : "100%"}} >
      <Card>
        <View style={styles.global}>

         <Images.logo
          onPress={onPhotoPress} 
          width={"30%"}
          height={"90%"}
          ></Images.logo>

          <View width={"60%"}  style={styles.globalTwo} >

            <Text style={styles.title} >{name}</Text>
            <Text style={styles.address}>{address}</Text>

          <View style={styles.globalThree}>
            <Text marginBottom={30}>{score} </Text>
            <Icon name="star" color={colorPalette.Orange} size={20}></Icon>
          </View>

          <View style={styles.globalFour} >
            <Text  onPress={onMenuPressed} style={styles.menu} >{I18n.t('menu')}</Text>
          </View>

         </View>
      
        </View>
      </Card>
    
 </View>
  )
}

export default RestaurantCardOwner;

const styles = StyleSheet.create({
  global : {
    flexDirection: 'row', 
    justifyContent : 'space-between' , 
    width : "90%"
  },
  globalTwo : {
    justifyContent : 'space-evenly',
    marginLeft : "10%"
  },
  globalThree : {
    flexDirection: 'row',
    lignItems: 'center'
  },
  globalFour :{
    direction: 'RLT',
    alignItems: 'flex-end',
    
  },
  title :{
    fontSize: Theme.font.MEDIUM,
    color: colorPalette.Black, 
    fontWeight: 'bold', 
   
},
address :{
  fontSize: Theme.font.SMALL,
  color: colorPalette.Black, 
 
},
menu :{
  fontWeight: 'bold', 
  fontSize: Theme.font.MEDIUM
 },
});
