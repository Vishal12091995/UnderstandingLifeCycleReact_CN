import React from 'react';
class ComponentA extends React.Component{
    constructor(){
        super();
        this.state={
            name:"ComponentA",
            data:[]
        }
        console.log("Cobstructor A Called");
    }
    static getDerivedStateFromProps(props,state){
        console.log("ComponentA get DeriverdStateFromProps get called");
        return null;
    }
    componentDidMount(){
        console.log("ComponentA mounted");
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data=>this.setState({data}))
    }
    
    render(){
        console.log("ComponentA rendred");
        return(
           <>
                <h1>{this.state.name}</h1>
                <ul>
                    {this.state.data.map((d)=>{
                        <li>{d.username}</li>
                    })}
                    <li></li>
                </ul>
           
           
           </>
            
        )
    }
}
export default ComponentA;