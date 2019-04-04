import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css';
import Container from "./components/Container"
import contactData from "./components/reducers"

const store = createStore(contactData);


class App extends Component {


  render() {
    return (
      <Provider store={store} >
        <Container/>
      </Provider>
    );
  }
}

export default App;
