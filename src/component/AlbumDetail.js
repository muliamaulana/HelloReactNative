import React from 'react';
import { View, Text } from 'react-native';
import CardView from './CardView';
import CardSection from './CardSection';

const AlbumDetail = (props) => {

    return (
        <CardView>
            <CardSection>
                <View></View>
                <View styles={styles.headerContentStyle}>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
        </CardView>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};

export default AlbumDetail;
