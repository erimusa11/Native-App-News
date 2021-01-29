import React from 'react'
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Content, Tabs, Tab, ScrollableTab, Container } from 'native-base';
import { ScrollView, SafeAreaView } from 'react-native';
import Headernav from "../../../header/header";
import { StyleSheet } from "react-native";

const listpost = ({ navigation }) => {
    return (
        <Container >
            <Headernav navigation={ navigation } />
            <Tabs renderTabBar={ () => <ScrollableTab style={ { backgroundColor: "#2583e2" } } /> }>
                <Tab activeTabStyle={ styles.tabColoActive } tabStyle={ styles.tabColor } heading="Crusscotto">
                    <Content>
                        <SafeAreaView>
                            <ScrollView>
                                <List style={ { borderWidth: 0.4 } } >
                                    <ListItem thumbnail onPress={ () => navigation.navigate('displaypost') } >
                                        <Left>
                                            <Thumbnail square source={ { uri: 'https://static.toiimg.com/photo/72975551.cms' } } />
                                        </Left>
                                        <Body>
                                            <Text>Sankhadeep</Text>
                                            <Text note numberOfLines={ 1 }>Its time to build a difference . .</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent>
                                                <Text>Vizualiza</Text>
                                            </Button>
                                        </Right>
                                    </ListItem>
                                </List>

                            </ScrollView>
                        </SafeAreaView>
                    </Content>
                </Tab>
            </Tabs>

        </Container>

    )
}

export default listpost;

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