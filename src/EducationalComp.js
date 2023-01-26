import React from "react";

const EducationalComp = (props) => {
    const { data } = props

    return (
        <div className='educationalComp'>
            <div className='educationalHeader'>Education</div>
            <div className='schoolContainer'>
                <div className='study'></div>
                <div className='school'>{data.educational.school}</div>
                <div className="dates">{`${data.educational.start} - ${data.educational.end}`}</div>
            </div>
        </div>
    )
}

export default EducationalComp