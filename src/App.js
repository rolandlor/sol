import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import examples from './examples';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      showAutoComplete: false
      
    };
    
    this.filterChange = this.filterChange.bind(this);
    this.showAutoCompleteTrue = this.showAutoCompleteTrue.bind(this);
    this.showAutoCompleteFalse = this.showAutoCompleteFalse.bind(this);
    
  }
  
  filterChange(text) {
    this.setState({
      filter: text,
      showAutoComplete: true
      
    });
  }
  showAutoCompleteTrue(text) {
    this.setState({
      showAutoComplete: true
      
    });
  }
  showAutoCompleteFalse(text) {
    this.setState({
      showAutoComplete: false
      
    });
  }
  render() {
    return (
      <div>
        <Search changeText={this.filterChange} text={this.state.filter}
         showAutoComplete={this.state.showAutoComplete}
        showAutoCompleteTrue={this.showAutoCompleteTrue}
        showAutoCompleteFalse={this.showAutoCompleteFalse}/>
      </div>
    );
  }
}

export default App;
