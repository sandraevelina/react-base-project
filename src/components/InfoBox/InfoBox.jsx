import React from 'react';
import './infoBox.css';

class InfoBox extends React.Component {
  componentDidMount() {
    console.warn('I will run when I am added to DOM');
  }

  componentDidUpdate(prevProps) {
    if (this.props.count !== prevProps.count) {
      console.warn('The count has been updated!')
    }
  }

  componentWillUnmount() {
   console.warn('I will run when component is removed from the DOM') 
  }

  render() {
    return (
    <div className="info-box">
      <div className="info-box-text">{this.props.text}</div>
      <div className="info-box-count">{this.props.count}</div>
    </div>
  );}
}

export default InfoBox;
