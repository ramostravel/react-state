
import './App.css';
import React, { Component } from 'react'
import imageSrc from './image.jpg'

 class App extends Component {
   constructor(props){
     super(props);
     this.state=
     {
    person:{
      fullname:"ramzi",
      bio:"acteur", 
      profession:"dev",
      imgSrc:imageSrc
    },
    
     show:"false",
     count: 0 ,
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick=()=>this.setState({show:!this.state.show});
     
  
  componentDidMount() {
      this.setState(
        {
          intervall: setInterval(
            ()=>{this.setState({count: this.state.count + 1})
            ;},1000
        )
    })}
      handleShowPerson = () => {
        this.setState({
          ...this.state,
          show: !this.state.show
        });
      };
      
      componentWillUnmount() {
        
      }
    
  render() {
    return (
      <div className='App-header'>
        <div className={this.state.show ? "active" : ""}>
<h1>hello my name is {this.state.fullname} , 
<p>my bio is {this.state.bio}</p> ,
my profession is {this.state.profession}<br/>
</h1>
<img src={this.state.person.imgSrc} alt="profile"/>
</div>
<button onClick={this.handleClick}>clic me</button>
{this.state.count}
</div>
    )
  }
}

export default App