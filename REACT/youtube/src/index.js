import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Layout from "./layout/layout.js"
import Header from "./layout/header.js"

class Start extends React.Component{
    constructor(){
        super();
        this.state={
            name:"sharath"
        }
    
}
    render(){
        
    setTimeout(()=>{this.setState({name:"sharath theegulla"})},1000)
        
    
        return (
    <div>
            {this.state.name}
            <Header />
            <Layout />
        </div>
           
        );
    }
}

ReactDOM.render(<Start />, document.getElementById('root'));
