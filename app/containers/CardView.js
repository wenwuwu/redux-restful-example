
import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import BackToCardList from '../components/BackToCardList'
import _ from 'underscore'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../actions'
import { Link, withRouter } from 'react-router'

const CardView = ({id, name, deleteCard}) => (
    <div id="view-card-wrapper">
        <BackToCardList />
        <Card id={id} name={name} />

        <Link className="btn" to={`/cards/${id}/edit`}> Edit </Link>
        <button
            className="btn" 
            onClick={e => {
                deleteCard(id)
                this.props.router.push("/cards")
        }}> OK 
        </button>
    </div>
)

function mapStateToProps (state, ownProps) {
    const {cards} = state
    const idx = _.findIndex(cards, {id: ownProps.params.cardId})
    return cards[idx]
}

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(ActionCreators, dispatch)
)(withRouter(CardView))
