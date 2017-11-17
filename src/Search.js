import React from 'react';
import examples from './examples';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''      
    };    
    this.textChange = this.textChange.bind(this);
    this.showAutoCompleteFalse = this.showAutoCompleteFalse.bind(this);
  }  
  textChange(e){
    this.props.changeText(e.target.value);
    if(e.target.value==''){
        this.props.showAutoCompleteFalse();
    }
    else {
        this.props.showAutoCompleteTrue();
    }
  }
  showAutoCompleteFalse(){
        this.props.showAutoCompleteFalse();
    }
  render() {
    return (
      <div>
        <form>
            <input type="text" onChange={this.textChange} showAutoComplete={this.state.showAutoComplete}
            onBlur={this.showAutoCompleteFalse}/>
            </form>
            <table style={{display: this.props.showAutoComplete ? 'block': 'none'}}>
            <thead></thead><tbody>{examples.map((example, index)=>{
                if(example.indexOf(this.props.text)!=-1){       
return (
  <tr>
  <td>{example}</td>  
  </tr>
  );
}
  })}</tbody></table>
      </div>
    );
  }
}

export default Search;