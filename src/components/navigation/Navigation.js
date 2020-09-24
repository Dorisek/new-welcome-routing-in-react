import React from 'react'
import { link } from 'react-router-dom'

function Navigation(props) {
    return (
        <div className="Navigation">
            <ul>
                <li><link to="/">Home</link></li>
                <li><link to="/" clock>Clock</link></li>
                <li><link to="/" contact>Contact</link></li>
            </ul>

        </div>
    )
}
export default Navigation;