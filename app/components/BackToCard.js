
import React from 'react'
import { Link } from 'react-router'

const BackToCard = ({cardId}) => (
    <div className="section">
        <Link to={`/cards/${cardId}`}>{`Back to Card`}</Link>
    </div>
)

export default BackToCard
