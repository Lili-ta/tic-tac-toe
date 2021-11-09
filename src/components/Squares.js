import React from 'react'

export default function Squares(props) {
    return (
        <div>
            {/* squares will come here */}
            <button onClick={props.Onclick} data-testid="squares-buttons">
                {props.value}
            </button>
        </div>
    )
}
