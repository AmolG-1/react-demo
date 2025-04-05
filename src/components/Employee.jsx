import React from "react";

function Employee(props){
    const {name,city} = props;
    return (
        <>
            <h1>Employee Details</h1>
            <div className="container">
                <h1>Employee Name is {name}</h1>
                <h1>Employee City is {city}</h1>
            </div>

        </>
    )
}

export default Employee;