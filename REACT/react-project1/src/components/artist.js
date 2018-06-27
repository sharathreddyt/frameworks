import React, {Component} from'react'
import Header from './header'

const REQ_URL = `http://localhost:3004/artists`

class Artist extends Component{
    constructor(props){
        super(props);
        this.state={
            artist:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.artist);
        // fetch(REQ_URL)
    }
render(){
    return(
        <div>
            <Header></Header>
        </div>
    );
}

}

export default Artist;