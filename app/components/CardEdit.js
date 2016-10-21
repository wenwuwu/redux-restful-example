
import React from 'react'
import BackToCard from './BackToCard'
import CardFormWrapper from '../containers/CardForm'

const CardEdit = ({params}) => (
    <div id="edit-card-wrapper">
        <BackToCard cardId={params.cardId} />
        <CardFormWrapper cardId={params.cardId} />
    </div>
)

export default CardEdit
