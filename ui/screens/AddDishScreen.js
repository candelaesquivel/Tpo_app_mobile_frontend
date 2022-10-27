import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Icon, Switch} from '@rneui/base';
import {colorPalette} from '../styles/colors';
import I18n from '../../assets/localization/I18n';
import {InputText} from '../components/InputText';
import {MyButton} from '../components/button';

function AddDishScreen() {
  const [dishName, setDishName] = useState('');
  return (
    <View
      style={{flexDirection: 'column', alignItems: 'center', marginTop: 23}}>
      <View style={{width: '85%', alignItems: 'flex-start'}}>
        <Text style={{fontSize: 20, color: colorPalette.Black}}>
          {I18n.t('name')}
        </Text>
        <InputText color={colorPalette.White} />

        <Text style={{fontSize: 20, color: colorPalette.Black}}>
          {I18n.t('price')}
        </Text>
        <InputText color={colorPalette.White} />

        <Text style={{fontSize: 20, color: colorPalette.Black}}>
          {I18n.t('ingredients')}
        </Text>
        <InputText color={colorPalette.White} />

        <Text style={{fontSize: 20, color: colorPalette.Black}}>
          {I18n.t('discount')}
        </Text>
        <InputText color={colorPalette.White} />

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20, color: colorPalette.Black, width: '45%'}}>
            {I18n.t('vegan')}
          </Text>
          <Switch />
        </View>
        <View style={{height: '3%'}} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20, color: colorPalette.Black, width: '45%'}}>
            {I18n.t('celiac')}
          </Text>
          <Switch />
        </View>
        <View style={{height: '3%'}} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20, color: colorPalette.Black, width: '45%'}}>
            {I18n.t('addPicture')}
          </Text>
          <Icon
            name="add-photo-alternate"
            Type="material-community"
            size={30}
            color={colorPalette.Orange}
          />
        </View>

        <Text style={{fontSize: 20, color: colorPalette.Black}}>
          {I18n.t('category')}
        </Text>
        <View style={{flexDirection: 'row', height: '30%'}}>
          <MyButton title={I18n.t('chose')} width="30%" height="30%" />

          <MyButton title={I18n.t('addNewCategory')} width="30%" height="30%" />
        </View>
      </View>
    </View>
  );
}

export default AddDishScreen;
