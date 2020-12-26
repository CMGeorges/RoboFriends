import React from 'react'
import './Scroll.css'

//Scroll component
 function Scroll(props) {
    return (
        <div className="scroll">
            {props.children}
        </div>
    )
}

export default Scroll
