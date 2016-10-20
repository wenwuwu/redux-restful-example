
import React from 'react'
import { Link } from 'react-router'
import Card from './Card'

const Cards = ({cards}) => (
    <div id="cards-wrapper">
        <div class="section">
            <Link to="/cards/new">New Card</Link>
        </div>

        <div class="section">
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
