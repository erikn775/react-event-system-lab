// Code Keypad Component Here
import React from 'react';

class KeyPad extends React.Component {

    render(){
        return(
            <input type="password" onKeyUp={(event => {
                debugger
                console.log('Entering password...')
            })}></input>
        )
    }
}

export default KeyPad