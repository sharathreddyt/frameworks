import React, { Component } from "react";

class Lifecycle extends Component {
  //1 Get Default State
  constructor(props) {
    super(props);
    //2 SET INITIAL STATE

    this.state = {
      title: "pulp fiction in cinemas",
      body: "some useless text"
    };
  }
  // this is not gonna execute when component starts it will only execute if the component
  // receives props after its started. the props can be new or same(reload)
  componentWillReceiveProps() {
    console.log("Before Receiving props");
  }
  //3 BEFORE GETS CREATED
  componentWillMount() {
    console.log("Before component gets created or Rendered");
  }
  //When ever we update the state(using this .setState() method)
  // 1 componentWillUpdate() is executed first
  // 2 then sets the state and
  // 3 then componentDidUpdate()
  componentWillUpdate() {
    console.log("BEFORE UPDATE");
  }
  componentDidUpdate() {
    console.log("After UPDATE");
  }
  //when used shouldComponentUpdate() method should always return true for the next state or props to be updated.
  //if returned false component will  not be updated
  //it will compute the next state but the view is not changed.
  //   shouldComponentUpdate(nextProps, nextState) {
  //     // console.log(this.state.title);
  //     // console.log(nextState.title);
  //     // return true;
  //     if (nextState.title === "something else") {
  //       return false;
  //     }
  //     return true;
  //   }

  //4 RENDER
  render() {
    return (
      <div>
        <h4>{this.state.title}</h4>
        <div>{this.state.body}</div>
        <div onClick={() => this.setState({ title: "something else" })}>
          {" "}
          click to change
        </div>
      </div>
    );
  }

  //5 AFTER A COMPONENT IS MOUNTED
  componentDidMount() {
    console.log("after component is created or rendered");
    document.querySelector("h4").style.color = "red";
  }

  //This method is called whenever the component is exited
  componentWillUnmount() {
    console.log("lifecycle component unmounted");
  }
}

export default Lifecycle;
