import React from 'react'
import { Container } from "native-base";
import Listpost from "./listpost/listpost";
import OnePostDisplay from "./listpost/onepostdisplay";
const list = ({ navigation, route }) => {

    return (
        <Container>
            { route.name === "displaypost" ? <OnePostDisplay /> : <Listpost navigation={ navigation } /> }
        </Container>
    )
}

export default list;