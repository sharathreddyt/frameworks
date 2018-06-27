import React from 'react';



const PostsItem  = ({match}) =>{
    return <div>{match.params.id}</div>
}

//OR


// class PostsItem extends Component{

//     constructor(props){
//         super(props);

//     }
//     render(){
//         console.log(this.props);
//         return (
//             <div>{this.props.match.params.id}</div>
//         );
//     }
// }
export default PostsItem;