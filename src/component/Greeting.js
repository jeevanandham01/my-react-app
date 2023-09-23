import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./Guestgreeting";

function Greeting2(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }



  export default Greeting2;