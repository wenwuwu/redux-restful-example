
import React from 'react'
import { Link } from 'react-router'

const Card = ({id, name}) => (
    <div className="row">
        <div className="card">
            <Link to={`/cards/${id}`} >
                <div className="inner">
                    {name}
                </div>
            </Link>
        </div>
    </div>
)

export default Card
