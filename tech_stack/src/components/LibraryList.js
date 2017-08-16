import React, { Component } from 'react'
import { connect } from 'react-redux'

class LibraryList extends Component {
  render() {
    console.log(this.props)
    return
  }
}

// here's how we use the connect() helper 
// state exists in the redux store
const mapStateToProps = state => {
  return { libraries: state.libraries }
}


export default connect(mapStateToProps)(LibraryList)