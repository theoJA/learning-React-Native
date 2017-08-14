import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component{
  state = { 
    email: '',
    password: '',
    error: '',
    loading: false 
  } 

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this)) // 1st success case
      .catch(() => {  // 1st fail case
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this)) // 2nd success case
          .catch(this.onLoginFail.bind(this))  // 2nd fail case
      })
  }

  onLoginFail() {
   this.setState({ error: 'Authentication Failed', loading: false })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    )
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input 
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        
        <CardSection>
          <Input 
            secureTextEntry // default boolean value is always true so we can omit the value
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm