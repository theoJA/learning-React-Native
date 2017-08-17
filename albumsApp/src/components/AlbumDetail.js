import React, { Component } from 'react'
import { View, Text, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image 
            style={styles.thumbnailStyle} 
            source={{ uri: thumbnail_image }} />
        </View>

        <View style={styles.albumHeaderStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image 
          style={styles.imageStyle}
          source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  albumHeaderStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 550,
    flex: 1,
    width: null
  }
}

export default AlbumDetail