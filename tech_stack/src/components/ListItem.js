import React, { Component } from 'react'
import { 
  Text, 
  TouchableWithoutFeedback, 
  View,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDescription() {
    const { library, expanded } = this.props
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descStyle}>
            {library.description}
          </Text>
        </CardSection>
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
  },
  descStyle: {
    paddingLeft: 25,
    paddingRight: 25,
    flex: 1
  }
} 

// mapStateToProps is actually called with state and ownProps
// ownProps are props that are passed to the component we're wrapping
// in short, ownProps === this.props in the component
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id
  return { expanded } //expanded is a bool
}

// first argument is explicitly for mapStateToProps
// We use mapStateToProps when we want all the data from the state
export default connect(mapStateToProps, actions)(ListItem)
// Now the second argument, actions, does two things:
//  - dispatches the action creators to the redux store and makes them interact with the reducers
//  - after that pass the returned actions obj as props in the component 