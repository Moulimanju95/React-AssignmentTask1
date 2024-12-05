import React from "react";

function UserProfile(props) {
    return <h1  style={{ marginLeft: '10px' }} >My Name is { props.name }</h1>;
  }

  export default UserProfile;