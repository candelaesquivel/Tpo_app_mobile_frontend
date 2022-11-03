import { View, Text , ScrollView , StyleSheet , Dimensions} from 'react-native'
import React, { useState } from 'react'
import { colorPalette } from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { InputText } from '../components/InputText'
import { MyButton } from '../components/button'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Carousal from '../components/carousal';
import Mapa from '../components/mapa';
import MyWeekButtons from '../components/WeekButton';
import MyTimePicker from '../components/TimePicker';
import { Theme } from '../styles/Theme';
import CloseComponent from '../components/closeComponent';
import { FoodTypesDropDown } from '../components/FoodTypesDropdown';
import { PriceRangesDropdown } from '../components/PriceRangeDropdown';

function EditRestaurantScreen({navigation, props}) {

  
  const [openingHour,setOpeningHour] = useState(false);
  const [closingHour,setClosingHour] = useState(false);

  const onCreateRestaurantPressed = (event) => {
    console.log('On Restaurant Create Press');
    navigation.navigate(ROUTES.OWNER_HOME_DRAWER);
  }

  return (
    <ScrollView>
     <Carousal></Carousal>
      <View style={{flexDirection:"row-reverse"}}>
        <Icon name = 'add' size={30} style={{marginRight: 10 , marginTop : "5%" }}></Icon>
       </View>
        <View style={styles.global}>

                <View style={styles.globalTwo}>

                    <Text style={styles.words}>
                        {I18n.t('name')}    
                    </Text>
                    <InputText 
                    placeholder="Mudra"
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                    ></InputText>

                    <Text style={styles.words}>
                        {I18n.t('address')}    
                    </Text>
                    <InputText 
                    placeholder="Honduras 500"
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                    ></InputText>

                    <Text  style={styles.words} >
                     {I18n.t('neighborhood')}    
                    </Text>
                    <InputText 
                    placeholder="Palermo"
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                    ></InputText>

                    <Text style={styles.words}  >
                    {I18n.t('location')}    
                    </Text>
                    <InputText 
                    placeholder="CABA"
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                    ></InputText>
                    
                    <Text style={styles.words}
                    >
                     {I18n.t('zipCode')}    
                    </Text>
                    <InputText 
                    placeholder="1345"
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                    ></InputText>

                  <Text style={styles.words}>
                    {I18n.t('hour')} 
                    </Text>

                </View>
          <View style={styles.hour}>
          
                < MyButton
                title= {I18n.t('opening')} 
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                onPress={() =>{ setOpeningHour(!openingHour)}}
                ></MyButton>

                < MyButton
                title= {I18n.t('closing')} 
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                onPress={() => {setClosingHour(!closingHour)}}
                ></MyButton>
              
                  {
                      openingHour && <MyTimePicker></MyTimePicker>
                  }
                  
                  {
                      closingHour &&  <MyTimePicker></MyTimePicker>
                  }
                  
                </View>
               
          <Mapa></Mapa>
          <CloseComponent>s</CloseComponent>

          <View style ={styles.dropdownContainer}>
            <FoodTypesDropDown></FoodTypesDropDown>
          </View>
          <View style ={styles.dropdownContainer}>
              <PriceRangesDropdown></PriceRangesDropdown>
          </View>
          
          <MyWeekButtons></MyWeekButtons>
          
          <View style={{flexDirection: 'column' , width : "100%",height : "60%", alignItems : "center" }}>
            < MyButton
                title= {I18n.t('save')} 
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                ></MyButton>

                 < MyButton
                title= {I18n.t('deleteRestaurant')} 
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                ></MyButton>

           </View>
       
      </View>

      
</ScrollView>
  )
}


export default EditRestaurantScreen;

const styles = StyleSheet.create({
  globalTwo:{
    width:'90%', 
    alignItems:'flex-start'
  },
  global:{
    flexDirection : 'column',
    alignItems : 'center'
  },
  words :{
    fontSize: Theme.font.MEDIUM,
    color: colorPalette.Black, 
    marginLeft : "4%" , 
    marginBottom : "3%"
},
hour : {
  flexDirection : "column" , 
  alignSelf : "center" ,
  marginBottom :"5%"
}
,
dropdownContainer: {
  width : "90%" , 
  marginBottom : 10  
 
},
container: {
  backgroundColor: colorPalette.White,
  padding: 10,
  width : "80%"
},
dropdown: {
  height: 50,
  borderColor: colorPalette.Orange,
  borderRadius: 5,
  paddingHorizontal: 10, borderWidth:1,
},
 
placeholderStyle: {
  fontSize: Theme.font.MEDIUM,
  color : colorPalette.Black
},

});
