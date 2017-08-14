import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import { Header } from './components/common'

const App = () => {
  return (
    // <Provider /> tag serves as "glue" to our react and redux side. Can only have 1 child component.
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Tech Stack" />
      </View>
    </Provider>
  )
}

export default App