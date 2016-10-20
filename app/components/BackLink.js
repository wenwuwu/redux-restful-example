
import React from 'react'
import { Link } from 'react-router'

const BackLink = ({src, txt}) => (
    <div className="section">
        <Link to={src}>txt</Link>
    </div>
)

export default BackLink
