import React from "react";
import './Welcome.css';

function Welcome() {
    const heading = {
        color:'red',
        border:'1px solid red'
    }
    return (
        <>
            <div className="container">
                <h1 style={heading}>Welcome To React Components</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, maxime!</p>

                <input type="text" placeholder="Enter Name" name="name"  />
                <img src="https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
            </div>

        </>

    )
}

export default Welcome;