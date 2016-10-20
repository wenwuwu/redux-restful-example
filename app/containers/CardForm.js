
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CardForm from '../components/CardForm'
import * as ActionCreators from '../actions'
import _ from 'underscore'

function mapStateToProps (state, ownProps) {
    console.log(ownProps)
    console.log('begin')
    const card = _.find(state.cards, {id: ownProps.cardId})
    console.log(card)
    return card ? card : {}
}
const CardFormWrapper = connect(
    mapStateToProps,
    dispatch => bindActionCreators(ActionCreators, dispatch)
)(CardForm)

export default CardFormWrapper
