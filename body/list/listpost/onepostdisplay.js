import React from 'react'
import { Container, Content, Tabs, Tab, ScrollableTab } from 'native-base';
import { StyleSheet } from "react-native";

import Cart from "../../cart/cart";

const onepostdisplay = () => {
    return (

        <Container>
            <Tabs renderTabBar={ () => <ScrollableTab style={ { backgroundColor: "#2583e2" } } /> }>
                <Tab activeTabStyle={ styles.tabColoActive } tabStyle={ styles.tabColor } style={ styles.underCart } heading="Crusscotto">
                    <Content>
                        <Cart />
                    </Content>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default onepostdisplay;

const styles = StyleSheet.create({
    tabColoActive: {
        backgroundColor: '#1271b5c2',
    },
    tabColor: {
        backgroundColor: '#0575E6',
    },
    underCart: {
        backgroundColor: '#d0d2d4',
    }

})