import React, { FunctionComponent } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { Text, Container, Content } from 'native-base';
import Card from './shared/Card';

const Home: FunctionComponent = () => {
    return (
        <Container>
            <Content>
                <Card />
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({

});

export default Home;
