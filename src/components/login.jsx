import React, { Component } from "react";

// 1- we have data in state , any update in state => rerender componenet
// 2- <input> read value from state
// 3- Handel onChange function
// 4- any change in <input> in UI , setChange in state handelOnChange()
class Login extends Component {
  state = {
    username: "",
    password: "",
    // 1- Create empty error obj
    errors: {},
  };

  // each time we hit submit btn , recoces reloading , 'hit server to reload resorces'
  // so we need to block this behaviour using PreverntDefult();
  handelSubmit = (e) => {
    e.preventDefault();

    // check errors using validate()
    const errors = this.validate();
    if (errors) return;
    // else Call Backend
    console.log("Submit");
  };

  // create validate function
  validate = () => {
    // we need to colne state errors obj , but cause of this obj is empty
    // Like we clone state
    const errors = {};
    // update errors
    if (this.state.username.trim() === "")
      errors.username = "username is requried";
    if (this.state.password.trim() === "")
      errors.password = "password is requried";
    // setState
    this.setState({ errors });

    // we need return statement from this fun
    // this line will check if obj is null or not using key()
    return Object.keys(errors).length === 0 ? null : errors;
  };

  //   handelOnChange = (e) => {
  //     // update state
  //     // 1- Clone state
  //     let username = { ...this.state.username };
  //     // 2-  update state
  //     username = e.currentTarget.value;
  //     // 3- set state
  //     this.setState({ username });
  //   };

  // we Need to use generic fun for both username & password
  // add name attr for <input> to <يخصص> which <input> need to update

  handelOnChange = (e) => {
    // update state
    // 1- Clone state
    let state = { ...this.state };
    // console.log(state[e.currentTarget.name]);
    // 2-  update state
    state[e.currentTarget.name] = e.currentTarget.value;
    // 3- set state
    this.setState(state);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login Form</h1>
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email address</label>
            <input
              autoFocus
              name="username"
              value={this.state.username}
              onChange={this.handelOnChange}
              type="text"
              className="form-control m-2"
              id="username"
            />
            {this.state.errors.username && (
              <div className="alert alert-danger">
                {this.state.errors.username}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handelOnChange}
              type="text"
              className="form-control m-2"
              id="password"
            />
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
