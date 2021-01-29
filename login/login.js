import React from 'react'
import { Container, Content } from 'native-base';
import { Image, StyleSheet, View, ImageBackground, StatusBar } from "react-native";
import Loginform from "./loginform/loginform";
import Registerform from "./registerform/registerform";

const login = ({ navigation, route }) => {

    return (
        <Container>
            <StatusBar backgroundColor="black" />
            <ImageBackground
                style={ { flex: 1 } }
                source={ {
                    uri:
                        'https://images.pexels.com/photos/4107337/pexels-photo-4107337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                } }>
                <View style={ styles.container }>
                    <Image source={ { uri: 'https://www.cruscottodicontrollo.it/wp-content/uploads/2018/06/logo-300x99.jpg' } } style={ { height: "35%", width: "60%" } } />
                </View>
                <Content >
                    {

                        route.name === "Login" || route.name == "Logout" ?
                            <Loginform navigation={ navigation } /> : <Registerform navigation={ navigation } />
                    }

                </Content>
            </ImageBackground>
        </Container>
    )
}

export default login;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 400,
    },
    marginbtn: {
        marginTop: 16,
    },
    labelstyle: {

        color: "#1fb1f4",

    }
});