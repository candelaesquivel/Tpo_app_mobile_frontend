import { View } from "react-native";
import { Logo } from "../components/Logo";
import { colorPalette } from "../styles/colors";
import { Text } from "@rneui/themed";
import { MyButton } from "../components/button";
import I18n from '../../assets/localization/I18n'
import { useEffect } from "react";
import { ROUTES } from "..";

function LoginUserScreen({navigation, props}){

    useEffect(() => {
        navigation.setOptions({
            title : I18n.t('logIn')
        })
    })

    const onLoginPressed = (event) => {
        console.log("On Login Pressed");
        navigation.navigate(ROUTES.HOME_NORMAL_USER_SCREEN);
    }

    return (
        <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 23}}>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <Logo></Logo>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <Text h2 h2Style={{color : colorPalette.Orange}}> {I18n.t('logIn')} </Text>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <MyButton title = 'Placeholder Google Sign In' onPress={onLoginPressed}></MyButton>
        </View>
    )
}

export default LoginUserScreen;