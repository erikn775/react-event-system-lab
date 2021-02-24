// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

    handleFocus = (event) => {
        debugger
    }

    render(){
        return(
            <button onFocus={(event) => {
                console.log('Good!')
            }} onBlur={(event) => {
                console.log('Hey! Eyes on me!')
            } }></button>
        )
    }
}

export default EyesOnMe