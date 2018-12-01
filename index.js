// Import a library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/component/Header';
import AlbumList from './src/component/AlbumList';


// Create a component
const App = () => (
    <View>
    <Header headerText={'Albums'} />
    <AlbumList />
    </View>
);


// Render it to device
AppRegistry.registerComponent('HelloReactNative', () => App);
