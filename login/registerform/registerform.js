import React from 'react'
import { Content, Form, Item, Input, Label, Text, Button } from 'native-base';
import { StyleSheet, View } from "react-native";

const registerform = ({ navigation }) => {
    return (
        <Form >
            <View style={ styles.rowinp }>
                <Item style={ { width: "50%" } } floatingLabel>
                    <Label style={ styles.light }>Nome</Label>
                    <Input style={ styles.light } />
                </Item>

                <Item style={ { width: "50%" } } floatingLabel last>
                    <Label style={ styles.light } >Cognome</Label>
                    <Input style={ styles.light } />
                </Item>

            </View>

            <Item style={ { width: "100%" } } floatingLabel last>
                <Label style={ styles.light } >Email</Label>
                <Input style={ styles.light } />
            </Item>

            <Item style={ { width: "100%" } } floatingLabel last>
                <Label style={ styles.light } >Ragione sociale</Label>
                <Input style={ styles.light } />
            </Item>

            <View style={ styles.rowinp }>
                <Item style={ { width: "40%" } } floatingLabel>
                    <Label style={ styles.light }>Password</Label>
                    <Input style={ styles.light } />
                </Item>
                <Item style={ { width: "60%" } } floatingLabel last>
                    <Label style={ styles.light } >Conferma Password</Label>
                    <Input style={ styles.light } />
                </Item>
            </View>

            <Content style={ { width: "100%" } } style={ styles.marginbtn }>
                <Button block style={ { backgroundColor: '#0575E6' } } >
                    <Text>Registrati</Text>
                </Button>
            </Content>

            <View style={ styles.container }>
                <Text style={ styles.light }> Hai un accound? <Text onPress={ () => navigation.navigate('Login') } style={ styles.labelstyle }> Accedi Ora!</Text></Text>
            </View>

        </Form>
    )
}

export default registerform;

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

    },
    rowinp: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    light: {
        color: "#fff"
    }

});
