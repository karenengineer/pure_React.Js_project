import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrower from'./components/SideDrower/SideDrower';
import BackDrop from './components/BackDrops/BackDrop';

class App extends Component {
  state = {
    sideDrowerOpen: false
  };

  drowerToggleClickHandler = () => {
      this.setState(prevState => {
        return { sideDrowerOpen: !prevState.sideDrowerOpen}
      })
  };

  backDropClickHandler = () => {
    this.setState({ sideDrowerOpen:false})
  }
  render() {
    let backdrop;
    if (this.state.sideDrowerOpen) {
      backdrop = <BackDrop click={this.backDropClickHandler}/>;
    }
    return (
      <div style={{ height: '100%' }}>
       <Toolbar drowerClickHandler={this.drowerToggleClickHandler}/>
        <SideDrower  show={this.state.sideDrowerOpen}/>  
        {backdrop}
       <main style={{marginTop: '64px'}}>
       <p>This the page content</p>
       </main>
       </div>
    );
  }
}

export default App;
