
import React from 'react'
import { Link } from 'react-router'

const Card = ({id, name}) => (
    <div className="row">
        <Link to={`/cards/${id}`} >
            <div className="card">
                {name}
            </div>
        </Link>
    </div>
)
