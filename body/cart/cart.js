import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Left, Body, Text } from 'native-base';
const cart = () => {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Body>
                        <Text>NativeBase</Text>
                        <Text note>Ipsum anim laboris nisi ut. Amet et sit tempor amet veniam laboris voluptate duis dolor officia ex dolore enim non. Eiusmod ad ipsum nisi enim aliquip dolore eiusmod consectetur consequat adipisicing. Ullamco irure dolore pariatur nisi amet reprehenderit quis ad non labore ad.</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={ { uri: 'https://static.toiimg.com/photo/72975551.cms' } } style={ { height: 200, width: null, flex: 1 } } />
            </CardItem>
        </Card>

    );

}
export default cart;