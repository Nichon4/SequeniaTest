import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Container from "./components/Container"
import {reducer} from "./components/actions"
import {BrowserRouter, Route} from "react-router-dom";

const store = createStore(reducer);


const App = () => {


  return (
    <Provider store={store} >
      <BrowserRouter>
        <Route component={Container} />
      </BrowserRouter>
    </Provider>
  );
};


export default App;
