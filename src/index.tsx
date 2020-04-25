import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import MovingDots from './MovingDots'

ReactDOM.render(
    <React.StrictMode>
        <MovingDots
            width={window.innerWidth}
            height={window.innerHeight}
            background={'#3e253c'}
            cuantity={250}
        />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
