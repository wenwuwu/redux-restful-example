
import React from 'react'
import Back from './Back'
import CardForm from '../containers/CardForm'

const CardNew = () => (
    <div id="new-card-wrapper">
        <Back />
        <CardForm isNew={true} />
    </div>
)

export default CardNew
