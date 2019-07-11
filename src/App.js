import React, { Component } from 'react';
import './App.css';

const Test = () => <div>Testing </div>;
class App extends Component {
  state={
    on:false,
    input: ''
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>
            Edit <code>src/App.js</code> and save to reload.
          </h1>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        <ul className='naser'>
          <li>1</li>
          <li>2</li>
          <li>3333</li>
        </ul>
        <Test />
        <p className='button-state'>{this.state.on? 'yes':'No!'}</p>
        <button onClick={()=>this.setState({on:true})}>click here!</button>
        <h2>{this.state.input}</h2>
        <input type="text" onChange={(e)=> this.setState({
          input: e.currentTarget.value
        })}/>
      </div>
    );
  }
}
export class Link extends Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>;
  }
}

export default App;
