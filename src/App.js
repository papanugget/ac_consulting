import React from 'react';
// import './App.css';
import 'flexboxgrid';
import './css/style.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Features from './components/Features';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <Showcase />
        </div>
        <div className="container-fluid">
          <Features />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;