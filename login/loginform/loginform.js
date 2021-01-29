import React from 'react'
import { Content, Form, Item, Input, Label, Text, Button } from 'native-base';
import { StyleSheet, View } from "react-native";
const loginform = ({ navigation }) => {

    return (
        <Form>
            <Item floatingLabel>

                <Label style={ { color: "#fff" } }>Username</Label>
                <Input style={ { color: "#fff" } } />
            </Item>
            <Item floatingLabel last>
                <Label style={ { color: "#fff" } } >Password</Label>
                <Input secureTextEntry={ true } style={ { color: "#fff" } } />
            </Item>
            <Content style={ styles.marginbtn }>
                <Button block style={ { backgroundColor: '#0575E6' } } onPress={ () => navigation.navigate('Novita') } >
                    <Text>Accedi</Text>
                </Button>
            </Content>
            <View style={ styles.container }>


                <Text style={ { color: "#fff" } }>Non hai un accound? <Text onPress={ () => navigation.navigate('Registrati') } style={ styles.labelstyle }> Registrati Ora!</Text></Text>
            </View>

        </Form>
    )
}

export default loginform;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    marginbtn: {
        marginTop: 16,
    },
    labelstyle: {

        color: "#1fb1f4",

    }
});
