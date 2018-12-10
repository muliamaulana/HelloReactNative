import React from 'react';
import { Text } from 'react-native';
import CardView from './CardView';

const AlbumDetail = (props) => {

    return (
        <CardView>
            <Text>{props.album.title}</Text>
        </CardView>
    );
};

export default AlbumDetail;
