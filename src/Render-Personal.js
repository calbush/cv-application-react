import React from "react";

const PersonalComp = (props) => {
    const { data } = props
    return (
        <div className='personalComp'>
            <div className='nameCV'>
                {`${data.personal.firstName} ${data.personal.lastName}`}
            </div>
            <div className='contactInfoContainer'>
                <div className='emailCV'>
                    {data.personal.email}
                </div>
                <div className='phoneCV'>
                    {data.personal.phone}
                </div>
            </div>
        </div>
    )
}

export default PersonalComp