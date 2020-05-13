import React from 'react';
const Results = props =>{

    const {firstName, lastName, email, password, confirmpassword} = props.data;
    return(
        <div>
            <h1>Results</h1>
            <p>First Name: {firstName} </p>
            <p>Last Name: {lastName} </p>
            <p>email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm Password: {confirmpassword} </p>
        </div>
    );

};

export default Results;
