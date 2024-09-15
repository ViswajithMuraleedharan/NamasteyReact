import { Component } from "react";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";
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
        <div>
          <userContext.Consumer>
            {/* {(loggedInUser) => console.log(loggedInUser)} */}
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold"> {loggedInUser}</h1>
            )}
          </userContext.Consumer>
        </div>
        <h2>This is the about us page of about us.</h2>
        {/* <User name="Akshay Saini (function)" /> */}
        {/* <UserClass name="First" location="Dehradun class" /> */}
        <UserClass /> {/*Using API call here */}
      </div>
    );
  }
}
export default About;
