
import React from 'react'
import { Link } from 'react-router'
import BackLink from './BackLink'

const BackToCard = ({cardId}) => (
    <BackLink src={`/cards/${cardId}`} txt='Back to Card' />
)

export default BackToCard
