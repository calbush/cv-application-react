import React from 'react'
import Personal from './personal'
import Educational from './educational'
import Practical from './practical'
import Submit from './submit'
import PersonalComp from './Render-Personal'


class App extends React.Component {
    constructor(){
        super();

        this.state = {
            personal : {
                firstName : '',
                lastName : '',
            }
        }
    }

    onSubmitBtnClicked = (e) => {
        e.preventDefault()
        let firstName = document.getElementById('firstName').value
        let lastName = document.getElementById('lastName').value
        let email = document.getElementById('email').value
        let phone = document.getElementById('phoneNum').value

        let school = document.getElementById('school').value
        let study = document.getElementById('titleOfStudy').value
        let start = document.getElementById('startDate').value
        let end = document.getElementById('endDate').value

        let company = document.getElementById('company').value
        let position = document.getElementById('position').value
        let jobStart = document.getElementById('jobStartDate').value
        let jobEnd = document.getElementById('jobEndDate').value
        let duties = document.getElementById('duties').value

        this.setState({
            personal : {
                firstName,
                lastName,
                email,
                phone,
            },
            educational : {
                school,
                study,
                start,
                end,
            },
            practical : {
                company,
                position,
                jobStart,
                jobEnd,
                duties,
            }
            
        })
    }

    render(){
        return (
            <div className="App">
                <form onSubmit={this.onSubmitBtnClicked} className='form'>
                    <Personal />
                    <Educational />
                    <Practical />
                    <Submit />
                </form>
                <div className="cvTemplate">
                    <PersonalComp data={this.state}/>
                </div>
            </div>
        )
    }
}
export default App

/* Upon hitting the submit button App stores the result of the four form components in state?
...App re-renders while passing current state as an object (props) to <CV> component
*/