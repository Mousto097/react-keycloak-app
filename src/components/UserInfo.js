import React, { Component } from "react";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: "",
      preferred_username: ""
    };
    this.props.keycloak.loadUserInfo().then(userInfo => {
      console.log(userInfo);
      this.setState({
        name: userInfo.name,
        email: userInfo.email,
        id: userInfo.sub,
        preferred_username: userInfo.preferred_username
      });
    });
  }

  render() {
    return (
      <div className="UserInfo">
        <h2>User profile</h2>
        {/* <p>Email: {this.state.email}</p>
        <p>Username: {this.state.preferred_username}</p>
        <p>Name: {this.state.name}</p>
        <p>ID: {this.state.id}</p> */}

        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Attribute</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Email</th>
              <td>{this.state.email}</td>
            </tr>
            <tr>
              <th scope="row">Username</th>
              <td>{this.state.preferred_username}</td>
            </tr>
            <tr>
              <th scope="row">Name</th>
              <td>{this.state.name}</td>
            </tr>
            <tr>
              <th scope="row">ID</th>
              <td>{this.state.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default UserInfo;
