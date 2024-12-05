import React from "react";
import UserProfile from "./Question3";
function FavoriteColor()
{
  const favColor='Red';
    return (
    <div>
       <p  style={{ marginLeft: '10px' }} > My Favorite Color is{"  "}
        <span 
        style={{color:favColor}}>
          {favColor}           
        </span>
       </p>
       <hr></hr>
       <UserProfile name="Mounika"/>
    </div>
  );
};
export default FavoriteColor;