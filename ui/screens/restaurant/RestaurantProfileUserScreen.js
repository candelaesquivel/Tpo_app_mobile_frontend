import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../..';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import { RestaurantProfileUserScreenUI } from './RestaurantProfileUserScreenUI';
import { dishesWS, reviewWS } from '../../../networking/endpoints';
import {selectDish} from '../../../redux/slices/userReducer';
import Share from 'react-native-share';
import { CONSTANTS } from '../../../config';

function RestaurantProfileUserScreen({navigation, route, props}) {

  const restoData = {
    ...route.params,
    region : {
      latitude : route.params.coordinates.coordinates[0],
      longitude : route.params.coordinates.coordinates[1],
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }
  };

  const [showComments , setShowComments]= useState(false);
  const [showMap , setShowMap]= useState(false);
  const [showDishes , setShowDishes]= useState(false);

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const restoId = useSelector((state) => state.user.restaurantSelectedId);

  const onSentCommentPress = (event) => {
    navigation.navigate(ROUTES.USER_SENT_COMMENT );
  }

  const onSharePress = async (event) => {
    try {
      await Share.open({
        title : CONSTANTS.SCREEN_TEXTS.SHARE_LABEL,
        message : restoData.name
      })
    } catch (error) {

    }
  }

  const onDishPhotoPress = async (dishId) => {

    dispatch(selectDish(dishId));

    try {
      var dishInfo = await dishesWS.getDishData(restoId, dishId, dispatch);

      if (dishInfo){
        navigation.navigate(ROUTES.DISH_USER_VIEW_STACK, dishInfo);
      }
    } catch (error) {

    }
  }

  const onMapPress = (event) => {
    navigation.navigate(ROUTES.BUTTON_SCREEN, {
      showMap: true,
      showComments :false,
      showDishes :false,
      regionMap :restoData.region 
    });
  }
  const onCommentPress = async  (event) => {
      navigation.navigate(ROUTES.BUTTON_SCREEN, {
      showMap: false,
      showComments :true,
      showDishes :false,
      regionMap :""});
  }
  const onMenuPress = async (event) => {
    navigation.navigate(ROUTES.BUTTON_SCREEN, {
      showMap:false ,
      showComments :false,
      showDishes :true,
      regionMap :"",
      onDishPhotoPressHandler : onDishPhotoPress,
    });
  }

  return (
    <RestaurantProfileUserScreenUI
      name = {restoData.name}
      priceRange={restoData.priceRange}
      rating = {restoData.averageRating}
      region = {restoData.region}
      showComments={showComments}
      showMap={showMap}
      showDishes={showDishes}
      closeRest={restoData.isClosedOverwrite}
      //onSectionBtnPressHandler={onSectionBtnPress}
      onSentCommentPressHandler={onSentCommentPress}
      //onDishPhotoPressHandler={onDishPhotoPress}
      onSharePressHandler={onSharePress}
      onMapPressHandler={onMapPress}
      onCommentPressHandler={onCommentPress}
      onMenuPressHandler={onMenuPress}
      >
    </RestaurantProfileUserScreenUI>
  )
}

export default RestaurantProfileUserScreen;

