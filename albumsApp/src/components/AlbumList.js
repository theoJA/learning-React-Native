import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  
  // we can just set the class state as such, with a piece of state called albums
  state = { albums: [] }

  componentWillMount() {
    //ASYNC HTTP request to get albums from the API
    // IMPORTANT NOTE!! --> Whenever we make an http request, a promise is returned
    //  it returns a promise because making http request is inherently asynchronous
    //  So we deal with the data ONLY when we get it back
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
        .then((responseData) => this.setState({ albums: responseData }))
  }
  
  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />)
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }

} 

export default AlbumList