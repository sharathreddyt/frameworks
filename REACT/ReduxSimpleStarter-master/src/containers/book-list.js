import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //state is redux state
  //whatever is returned will show up as props inside BookList

  return {
    books: state.books
  };
}
//anything returned from this function will end up as props on the booklist container.
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all of our reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote BookList from  a component to container- it  needs to know
// about this new dispatch method, SelectBook.make it available
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
