import React from 'react'

const Greetings = () => {
    let myDate = new Date();
    let hours= myDate.getHours();
    let greet;

    if (hours < 12)
        greet =  "morning";
    else if (hours >= 12 && hours <= 17)
        greet = "afternoon";
    else if (hours >= 17 && hours <= 24)
       greet = "evening";
    else
       greet = "night";
   
    return <span style={{ marginLeft: '10px' }} >Good {greet}</span>
}

export default Greetings 