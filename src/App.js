import React from 'react'
import Personal from './personal'
import Educational from './educational'
import Practical from './practical'
import Submit from './submit'


class App extends React.Component {

    render(){
        return (
            <div className="App">
                <Personal />
                <Educational />
                <Practical />
                <Submit />
            </div>
        )
    }
}
export default App