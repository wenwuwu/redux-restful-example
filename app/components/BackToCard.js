
import React from 'react'

const BackToCard = ({cardId}) => (
    <div class="section">
        <Link to={`/cards/${cardId}`}>{`Back to Card ${cardId}`}</Link>
    </div>
)

export default BackToCard
