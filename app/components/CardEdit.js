
import React from 'react'
import BackToCard from './BackToCard'
import CardFormWrapper from '../containers/CardForm'

const CardEdit = ({params}) => (
    <div id="edit-card-wrapper">
        <BackToCard cardId={params.id} />
        <CardFormWrapper cardId={params.id} />
    </div>
)

export default CardEdit
