import React from "react";

const EducationalComp = (props) => {
    const { data } = props

    return (
        <div className='educationalComp'>
            <div className='header'>Education</div>
            <div className='schoolContainer'>
                <div className='study'>{data.educational.study}</div>
                <div className='schoolName'>{data.educational.school}</div>
                <div className="dates">{`${data.educational.start} - ${data.educational.end}`}</div>
            </div>
        </div>
    )
}

export default EducationalComp