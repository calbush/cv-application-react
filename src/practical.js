import React from "react";

class Practical extends React.Component{

    render(){
        return(
            <div>
                <div>
                    <label htmlFor="company">Company:</label>
                    <input id="company"/>
                </div>
                <div>
                    <label htmlFor="position">Position:</label>
                    <input id="position"/>
                </div>
                <div>
                    <label htmlFor="jobStartDate">Start Date:</label>
                    <input type="date" id="jobStartDate"/>
                </div>
                <div>
                    <label htmlFor="jobEndDate">End Date:</label>
                    <input type="date" id="jobEndDate"/>
                </div>
                <div>
                    <label htmlFor="duties">Duties:</label>
                    <textarea cols="50" rows="12"id="duties"/>
                </div>
            </div>
        )
    }
}

export default Practical