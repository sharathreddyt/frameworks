import React, { Component } from "react";

class Subscriptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: false,
      success: false
    };
  }
  clearMessages = () => {
    setTimeout(
      function() {
        this.setState({
          error: false,
          success: false
        });
      }.bind(this),
      3000
    );
  };
  saveSubscription = email => {
    const URL_EMAIL = "http://localhost:3004/subcriptions";
    fetch(URL_EMAIL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          email: "",
          success: true
        });
      });
  };
  handleSubmit = event => {
    event.preventDefault();
    let email = this.state.email;

    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email)) {
      this.saveSubscription(email);
    } else {
      this.setState({ error: true });
    }

    this.clearMessages();
  };

  onChangeInput = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    return (
      <div className="subscribe-panel">
        <h3>subscribe to us</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="your email@email.com"
              value={this.state.email}
              onChange={this.onChangeInput}
            />
            <div className={this.state.error ? "error show" : "error"}>
              Check your email
            </div>
            <div className={this.state.success ? "success show" : "success"}>
              Thank you
            </div>
          </form>
        </div>
        <small>
          lorem ipsum dolor sit
          amet.kjsdbkjdsabfjdsvbkjdjdsvsdjv,hdbfkhasdbsdkhj
        </small>
      </div>
    );
  }
}

export default Subscriptions;
