import React from 'react';
import 'flexboxgrid';
import './css/style.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Features from './components/Features';

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
          <Features/>
        </div>
      </div>
    );
  }
}

export default App;