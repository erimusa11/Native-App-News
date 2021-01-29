import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { Tab, Tabs, ScrollableTab } from 'native-base';
import { StyleSheet } from "react-native";
import Cart from "./cart/cart";

const body = () => {
    return (
        <Tabs renderTabBar={ () => <ScrollableTab style={ { backgroundColor: "#2583e2" } } /> }>
            <Tab activeTabStyle={ styles.tabColoActive } tabStyle={ styles.tabColor } style={ styles.underCart } heading="Crusscotto">
                <SafeAreaView>
                    <ScrollView>
                        <Cart />
                        <Cart />
                        <Cart />
                        <Cart />
                    </ScrollView>
                </SafeAreaView>
            </Tab>
            <Tab activeTabStyle={ styles.tabColoActive } tabStyle={ styles.tabColor } style={ styles.underCart } heading="Mappa Strategica">
                <SafeAreaView>
                    <ScrollView>
                        <Cart />
                        <Cart />

                    </ScrollView>
                </SafeAreaView>
            </Tab>
            <Tab activeTabStyle={ styles.tabColoActive } tabStyle={ styles.tabColor } style={ styles.underCart } heading="Adeguati asseti">
                <SafeAreaView>
                    <ScrollView>
                        <Cart />


                    </ScrollView>
                </SafeAreaView>

            </Tab>
        </Tabs>

    );

}
export default body;

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