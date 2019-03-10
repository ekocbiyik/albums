import React from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
/* static tanımlama yöntemi, tavsiye edilmiyor.
const AlbumList = () => {
    return (
        <View>
            <Text>AlbumList</Text>
        </View>
    );
};
export default AlbumList;
*/

/** dynamic tanımlama yontemi */
class AlbumList extends React.Component {

    state = { albums: [] };

    componentWillMount() {
        /**console.log('componentWillMount in Albumlist!');
        debugger;*/
        axios.get('https://react-dersleri.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    };

    renderAlbums() {
        return this.state.albums.map(
            //album => <Text key={album.title}>{album.title}</Text>
            album => <AlbumDetail key={album.title} album={album} />
        );
    };

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    };
};

export default AlbumList;
