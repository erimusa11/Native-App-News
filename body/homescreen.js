import React from 'react';
import { Container } from 'native-base';
import Body from "./body";
import Headernav from "../header/header";

const homescreen = ({ navigation }) => {
    return (
        <Container >
            <Headernav navigation={ navigation } />
            <Body />
        </Container>

    );
}

export default homescreen;


