import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import InfoBox from './components/InfoBox/InfoBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      blueCount: 0,
      redCount: 0,
    }
  }

  componentDidMount() {
    console.warn('I will run when page is loaded');
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.type !== prevState.type) {
      console.warn('The text has been updated!')
    }
  }

  componentWillUnmount() {
   console.warn('I will run when component is removed from the DOM') 
  }

  setText(type) {
    let redCount = this.state.redCount;
    let blueCount = this.state.blueCount;
    
    if(type === 'blue') {
      blueCount = blueCount + 1; 
    }
    if(type === 'red') {
      redCount = redCount + 1;
    }
    this.setState({
      type: type,
      blueCount: blueCount,
      redCount: redCount,
    });
  }

  getInfobox() {
    if (this.state.type === 'blue') {
      return <InfoBox text='I am blue' count={this.state.blueCount} />
    }
    if (this.state.type === 'red') {
      return <InfoBox text='I am red' count={this.state.redCount} />
    }
    return '';
  }

  render() {
    return (
    <div className="App">
      <div className="button-container">
        <Button label="Click me" text="blue" handleClick={(text) => this.setText(text)}/>
        <Button label="No, click me" text="red" handleClick={(text) => this.setText(text)}/>
      </div>
      {this.getInfobox()}
    </div>
  );}
}

export default App;
