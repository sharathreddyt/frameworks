import React from 'react';
//here we can replace props with {item}
//then we can use item.title instead of props.item.id
const NewsItem =(props) =>{
    return(
        <div className="news_item">
                <h3>
                    {props.item.title}
                </h3>
                <div>
                    {props.item.feed}
                </div>
            </div>
    );
}
export default NewsItem;