import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/
export class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggleOn:true};
            this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState=>({
        isToggleOn:!prevState.isToggleOn
    }))
    };
render(){
    return(
    <button onClick={this.handleClick}>{this.state.isToggleOn?'ON':'OFF'}</button>
    );
}

}
export const RandomValue=()=><div>
      {Math.floor(Math.random()*100)}
</div>;

