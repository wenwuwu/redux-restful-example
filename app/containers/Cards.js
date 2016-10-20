
import React from 'react'
import { connect } from 'react-redux'
import Cards from '../components/Cards'

export default connect(
    state => ({cards: state.cards})
)(Cards)
