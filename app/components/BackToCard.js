
import React from 'react'
import { Link } from 'react-router'

const BackToCard = ({cardId}) => (
    <div class="section">
        <Link to={`/cards/${cardId}`}>{`Back to Card ${cardId}`}</Link>
    </div>
)

export default BackToCard
