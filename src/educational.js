import React from "react";

class Educational extends React.Component{

    render(){
        return(
            <div className="educational">
                <div>
                    <label htmlFor="school">School:</label>
                    <input id="school"/>
                </div>
                <div>
                    <label htmlFor="titleOfStudy">Title Of Study:</label>
                    <input id="titleOfStudy"/>
                </div>
                <div>
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" id="startDate"/>
                </div>
                <div>
                    <label htmlFor="endDate">End Date:</label>
                    <input type="date" id="endDate"/>
                </div>

            </div>
        )
    }
}

export default Educational

//School name
//Degree name
//dates of study