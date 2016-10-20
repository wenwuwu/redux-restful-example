
import React from 'react'
import Back from './Back'
import CardForm from '../containers/CardForm'

const CardEdit = ({params}) => (
    <div id="edit-card-wrapper">
        <Back />
        <CardForm isNew={false} cardId={} />
    </div>
)

export default CardEdit
