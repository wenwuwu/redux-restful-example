
import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

const BackToCard = ({cardId}) => (
    <NavLink to={`/cards/${cardId}`} txt='Back to Card' />
)

export default BackToCard
