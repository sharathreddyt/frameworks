import React, {Component} from 'react';
// The bleow component is functional component. it is a simple component which
// returns a tag to other components where it is imported. const Header = () =>
// {     return <div>Header</div> } Class Component binding Header to React by
// extending React.Component
class Header extends Component {
    constructor(props){
        super(props);

        this.state={
            keywords:''
        }

    }
inputChange(event){
    this.setState({keywords:event.target.value});
    this.props.newsSearch(event.target.value);
}
    render() {

        return (
            <header>
                <div className='logo' onClick= {() =>console.log('clicked')}>Logo</div>
                <input onChange = {this.inputChange.bind(this)}/>
                
            </header>
        );
    }

}
// This sytax lets other components use Header component by importing it.
export default Header;

//onChange does the corresponding action when there is a change in the action it applied on.
//onClick does the corresponding action when there is a click event it applied on.