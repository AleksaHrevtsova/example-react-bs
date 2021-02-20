import React, { Component, createContext } from "react";
import userApi from "../services/user-api";

const Context = createContext();
// console.log(AuthContext);

export default class AuthContext extends Component {
  static Consumer = Context.Consumer;

  login = () => {
    userApi.fetchUser().then((user) => this.setState({ user }));
  };
  logout = () => {
    this.setState({ user: null });
  };
  state = {
    user: null,
    onLogin: this.login,
    onLogout: this.logout,
  };

  render() {
    return (
      <>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </>
    );
  }
}
