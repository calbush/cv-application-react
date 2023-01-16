import React from "react";

class Personal extends React.Component{

    render(){
        return (
            <div className="personal">
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input id="firstName"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input id="lastName"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="phoneNum">Phone:</label>
                    <input type="tel" id="phoneNum"/>
                </div>
            </div>
        )
    }
}

export default Personal

//name
//email
//phone
