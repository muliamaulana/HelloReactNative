import React from 'react';
import { Text } from 'react-native';
import CardView from './CardView';
import CardSection from './CardSection';

const AlbumDetail = (props) => {

    return (
        <CardView>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </CardView>
    );
};

export default AlbumDetail;
