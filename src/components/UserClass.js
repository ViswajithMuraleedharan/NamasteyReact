// import React from "react";
// class UserClass extends React.Component {
//this can also be written as
import { Component } from "react";
class UserClass extends Component {
  constructor(props) {
    // Super() function is to call the constructor of the parent class. It is used when we need to access a few variables in the parent class. It returns an object which represents the parent class. The right way to use it is when the child class and parent class are from the same field.
    super(props);
    //creating state variable in class based components
    this.state = {
      // count: 0,
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "",
      },
    };
  }
  //api calls from componentDidMount
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/ViswajithMuraleedharan"
    );
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user_card">
        {/* <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            // this.state.count++; // Never do this, as it may cause in consistancy in project and donot reflect the value
            this.setState({
              count: this.state.count + 1, // dont do this.state.count++
            });
          }}
        >
          Count Increase
        </button> */}
        {/* <h1>Count2: {this.state.count2}</h1> */}
        <img src={avatar_url} height="200px" width="200px" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @Akshay</h4>
      </div>
    );
  }
}

export default UserClass;
