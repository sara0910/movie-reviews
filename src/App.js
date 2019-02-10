import React, { Component } from 'react';
import Header from './components/Header';
import Movies from './components/Movies/Movies';
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  
  render() {
    const test = "test msg";
    return(
      <div>
        <Header />
        <Movies data={test}/>
        {/* <Footer /> */}
      </div>
    )
  }
}
export default App;