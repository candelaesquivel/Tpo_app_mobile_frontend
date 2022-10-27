import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Text, Card, Icon} from '@rneui/themed';
import {colorPalette} from '../styles/colors';
import {SearchBar} from '@rneui/themed';
import {Input} from '@rneui/base';

export default function MySearchBar() {
  return (
    <View style={{alignItems: 'center', width: '100%', marginTop: 20}}>
      <Input
        leftIcon={<Icon name="search" color={colorPalette.White} />}
        rightIcon={<Icon name="filter-list" color={colorPalette.White} />}
        placeholderTextColor={colorPalette.White}
        placeholder={'Buscar'}
        inputContainerStyle={{
          backgroundColor: colorPalette.Cream,
          borderBottomColor: 'transparent',
          borderRadius: 5,
        }}
        leftIconContainerStyle={{
          paddingLeft: 10,
        }}
        rightIconContainerStyle={{
          paddingRight: 10,
        }}
        inputStyle={{
          color: colorPalette.White,
          borderBottomWidth: 0,
          borderColor: 'transparent',
          underlineColorAndroid: 'transparent',
          backgroundColor: 'transparent',
        }}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}
