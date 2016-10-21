
import React from 'react'
import { Link } from 'react-router'
import Card from './Card'

const Cards = ({cards}) => (
    <div id="cards-wrapper">
        <div className="section nav">
            <Link to="/cards/new">New Card</Link>
        </div>

        <div className="section">
            {
                cards.map(card => (
                    <Card 
                        key={card.id}
                        {...card}
                    />
                ))
            }
        </div>
    </div>
)

export default Cards
