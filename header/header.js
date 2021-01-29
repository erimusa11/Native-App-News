import React from 'react'
import { Header, Left, Button } from "native-base";
import { StyleSheet } from "react-native";
import { Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { StatusBar } from 'react-native';
const header = ({ navigation, route }) => {

    return (

        <Header style={ { backgroundColor: '#0575E6' } } >
            <StatusBar backgroundColor="#0575E6" />

            <Left style={ { flex: 1 } }>
                <Button style={ styles.buttonCol } onPress={ () => navigation.openDrawer() }  >
                    <FontAwesomeIcon style={ styles.toggleCol } icon={ faBars } />
                </Button>
            </Left>

            <Image source={ { uri: 'https://www.cruscottodicontrollo.it/wp-content/uploads/2018/06/logo-300x99.jpg' } } style={ { height: "90%", width: "40%", flex: 1, alignSelf: "flex-start", flexDirection: 'row', marginRight: 120 } } />

        </Header>

    )
}

export default header;

const styles = StyleSheet.create({
    buttonCol: {
        backgroundColor: '#0575E6',
    },
    toggleCol: {
        color: "#fff",

    },
})