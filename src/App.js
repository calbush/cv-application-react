import React from 'react'
import Personal from './personal'
import Educational from './educational'
import Practical from './practical'
import Submit from './submit'
import CV from './cv'


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
        this.setState({
            personal : {
                firstName : firstName,
                lastName : lastName,
            }
            
        })
    }

    render(){
        return (
            <div className="App">
                <form onSubmit={this.onSubmitBtnClicked}>
                    <Personal />
                    <Educational />
                    <Practical />
                    <Submit />
                </form>
                <CV passin={this.state}/>
            </div>
        )
    }
}
export default App

/* Upon hitting the submit button App stores the result of the four form components in state?
...App re-renders while passing current state as an object (props) to <CV> component
*/