import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  useEffect(() => {
    console.log("UseEffect called");
    return () => {
      console.log("UseEffect Returned");
    };
  }, []);
  console.log("render");
  //Here, first "UseEffect called" will be logged and then "render" will be called.
  //"UseEffect Returned" will be called only at the componentDidUnmount face when a different component is called.
  return (
    <div className="user_card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @Akshay</h4>
    </div>
  );
};
export default User;
