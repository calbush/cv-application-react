import React from 'react'
import Personal from './personal'
import Educational from './educational'
import Practical from './practical'


class App extends React.Component {

    render(){
        return (
            <div className="App">
                <Personal />
                <Educational />
                <Practical />
            </div>
        )
    }
}
export default App