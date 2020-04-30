import React, { FunctionComponent } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'native-base';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

const CardContainer: FunctionComponent = () => {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: 'https://picsum.photos/200' }} />
                    <Body>
                        <Text>Dummy Title</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image
                    source={{ uri: 'https://picsum.photos/200' }}
                    style={styles.profileImage}
                />
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent>
                        <Ionicons style={styles.icon} name="ios-heart" size={30} />
                    </Button>
                    <Button transparent>
                        <Ionicons style={styles.icon} name="ios-text" size={30} />
                    </Button>
                    <Button transparent>
                        <Ionicons style={styles.icon} name="ios-share" size={30} />
                    </Button>
                </Left>
                <Right>
                    <Button transparent>
                        <Ionicons style={styles.icon} name="ios-bookmark" size={30} />
                    </Button>
                </Right>
            </CardItem>
            <CardItem>
                <Left>
                    <Text>55321 views</Text>
                </Left>
            </CardItem>
            <CardItem>
                <Left>
                    <Text>Dummy poster comment :-)</Text>
                </Left>
            </CardItem>
            <CardItem>
                <Left>
                    <Text note>Vieew All 95 comments</Text>
                </Left>
            </CardItem>
        </Card >
    );
}

const styles = StyleSheet.create({
    container: {

    },
    header: {

    },
    body: {

    },
    footer: {

    },
    profileImage: {
        width: Dimensions.get('window').width - 5,
        height: 200,
    },
    icon: {
        paddingLeft: 10,
    }
});

export default CardContainer;
