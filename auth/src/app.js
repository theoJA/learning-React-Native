import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, CardSection, Spinner } from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component{
  state = { loggedIn: null }

  componentWillMount() {
    // firebase config obj. Tells Firebase that we want to connect to a very specific project that we have created
    firebase.initializeApp({
      apiKey: 'AIzaSyDHJsAkVFr_FTqjAmXI1cdhrVAbdWEe9x8',
      authDomain: 'auth-44bb0.firebaseapp.com',
      databaseURL: 'https://auth-44bb0.firebaseio.com',
      projectId: 'auth-44bb0',
      storageBucket: 'auth-44bb0.appspot.com',
      messagingSenderId: '675803603210'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false})
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <View style={{ flex: 1, alignSelf: 'center' }}>
            <Spinner />
          </View>
      )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
