import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Header from './components/header';
// Here I imported the json file from my sourcr folder. The word JSON can be
// anything. below statement creates a variable of JSON and stores the info
// present in db.json in JSON variable.
import JSON from './db.json';
import NewsList from './components/news_list'

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            news:JSON,
            filtered:JSON
        }
    }

filterNews(keywords){
    let filtered = this.state.news.filter((item)=>{
        return item.title.indexOf(keywords) > -1;
    })
this.setState({filtered})
}


    render() {
        return (
            <div>
                <Header newsSearch={keywords=>this.filterNews(keywords)}/>
                <NewsList news = {this.state.filtered}/>
{/* here news variable can be anything this is just a new property
for NewsList tag. This property is received in news_list component as
props. */}
            </div>

        );
    }
}
ReactDOM.render(
    <App/>, document.getElementById('root'));