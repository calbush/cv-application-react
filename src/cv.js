import React from "react";

const CV = (props) => {
    const { passin } = props
        return(
            <div>
                <div className="personalCV">
                    <div className="name">{`${passin.personal.firstName} ${passin.personal.lastName}`}</div>
                </div>
                <div className="educationalCV">

                </div>
                <div className="practicalCV">

                </div>
            </div>
        )
    }


export default CV


