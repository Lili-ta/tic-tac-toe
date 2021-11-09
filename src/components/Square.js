import React from 'react'

export default function Square(props) {
    return (
        <div>
            {/* squares will come here */}
            <button onClick={props.Onclick} className="square">
                {props.value}
            </button>
        </div>
    )
}
