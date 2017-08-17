import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {

  componentWillMount() {
    // boilerplate code for initializing datasource for the ListView
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    // we're taking the datasource obj (ds) and telling it to take 
    //  the list of libraries from this.props.libraries
    // Just a fancy wrapper for data we want to display
    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }
  
  renderRow(library) {
    return <ListItem library={library} />
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

// here's how we use the connect() helper 
// state exists in the redux store
const mapStateToProps = state => {
  return { libraries: state.libraries }
}


export default connect(mapStateToProps)(LibraryList)