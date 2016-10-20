
import React from 'react'
import { Link } from 'react-router'

const Card = ({id, name}) => (
    <div class="row">
        <Link to={`/cards/${id}`} >
            <div class="card">
                {name}
            </div>
        </Link>
    </div>
)
