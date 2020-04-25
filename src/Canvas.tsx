import React from 'react'

function Canvas() {
    return (
        <div className="Canvas">
            <canvas
                id="stage"
                width={window.innerWidth}
                height={window.innerHeight}
            />
        </div>
    )
}

export default Canvas
