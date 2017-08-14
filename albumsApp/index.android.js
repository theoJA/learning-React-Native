// import a lib to help create a component
import React from 'react'
import { View, AppRegistry } from 'react-native'

import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// Create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  )
}

// Render it to the device
// The string 'albums' must match the app name (the folder containing the android/ios file)
// For every reactNative app we must register at least ONE comp
AppRegistry.registerComponent('albumsApp', () => App)