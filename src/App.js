import React, { Component } from 'react';
import './App.css';
class App extends Component {

  state ={
    multilpier : [1,2,3,4,5,6,7,8,9,10],
    multiNumber : 1,
    flag : false,
    showButton : false
}
handleNumber =(event) =>{
  console.log("Type Bhayo hai", event.target.value);
  this.setState({ 
    multiNumber : event.target.value,
    flag : false,
    showButton : true
    
  })
}

  submitHandling =(event) =>{
    this.setState({
     flag: true

    })
  }

render() {

return (
<div className="App">
  <label>Enter a number</label>
 <input name ="multilpier" type = "number" onChange ={this.handleNumber}/>
 {this.state.showButton && <button type = "submit" onClick = {this.submitHandling}>Generate</button>  }
 <p>
   {this.state.flag && 
    (this.state.multilpier.map((eachNumber, index) => (
   <li>{eachNumber} * {this.state.multiNumber} = {eachNumber * this.state.multiNumber}</li>
)) )
   }

</p>
 
</div>
);
}
}
export default App;