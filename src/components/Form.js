import React from 'react';

const Form = props=>{

    const{inputs, setInputs} = props;

    const onChange = e=>{

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        


    };
    return(
        <form>
            <h1>Form</h1>
        <div className="form-group">
            <label htmlfor="firstName">First Name</label>
            <input onChange={onChange} type="text" name="firstName"/>
        </div>
        <div className="form-group">
            <label htmlfor="lasttName">Last Name</label>
            <input onChange={onChange} type="text" name="lastName"/>
        </div>
        <div className="form-group">   
            <label htmlfor="email">Email</label>
            <input onChange={onChange} type="text" name="email"/>
        </div>
        <div className="form-group">
            <label htmlfor="password">Password</label>
            <input onChange={onChange} type="password" name="password"/>
        </div>
        <div className="form-group">
            <label htmlfor="confirmpassword">Confirm Password</label>
            <input onChange={onChange} type="password" name="confirmpassword"/>
        </div>
        </form>
        
    );

};
 export default Form;

