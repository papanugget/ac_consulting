import React from 'react';
import 'flexboxgrid';
import './css/style.css';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default App;