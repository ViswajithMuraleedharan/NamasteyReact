import { Component } from "react";
// import User from "./User"; //User is a functional component
import UserClass from "./UserClass";
// const About = () => {
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent Rendering");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is the about us page of about us.</h2>
        {/* <User name="Akshay Saini (function)" /> */}
        {/* <UserClass name="First" location="Dehradun class" /> */}
        <UserClass /> {/*Using API call here */}
      </div>
    );
  }
}
export default About;
