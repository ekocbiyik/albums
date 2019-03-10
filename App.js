import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

/*
const App = () => (
  <Header />
);
// only the root component use registry!
AppRegistry.registerComponent('albums', () => App);
export default App;
*/
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  };
};


/** section:9, lecture:55 */



