
import React from 'react'
import { Link } from 'react-router'

const NavLink = ({to, txt}) => (
    <div className="section nav">
        <div className="row">
            <Link to={to}>{txt}</Link>
        </div>
    </div>
)

export default NavLink
