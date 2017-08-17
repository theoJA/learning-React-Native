import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {

  renderDescription() {
    const { library, selectedLibrary } = this.props

    if (library.id === selectedLibrary) {
      return (
        <Text>{library.description}</Text>
      )
    }
  }

  render() {
    const { titleStyle } = styles 
    const { id, title } = this.props.library
    
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
} 

const mapStateToProps = state => {
  return { selectedLibrary: state.selectedLibraryId}
}

// first argument is explicitly for mapStateToProps
// We use mapStateToProps when we want all the data from the state
export default connect(mapStateToProps, actions)(ListItem)
// Now the second argument, actions, does two things:
//  - dispatches the action creators to the redux store and makes them interact with the reducers
//  - after that pass the returned actions obj as props in the component 