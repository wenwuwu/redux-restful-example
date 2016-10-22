
import React from 'react'
import Card from './Card'
import NavLink from './NavLink'

const Cards = ({cards}) => (
    <div id="cards-wrapper">
        <NavLink to='/cards/new' txt='New Card' />

        <div className="section cards">
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
