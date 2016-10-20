import './main.scss'
import 'babel-polyfill'
import React    from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router'
import Cards from './containers/cards'
import Card from './containers/card'
import CardNew from './containers/cardNew'
import CardEdit from './containers/cardEdit'

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/cards" component={Cards} />
            <Route path="/cards/(:cardId)" component={Card} />
            <Route path="/cards/new" component={CardNew} />
            <Route path="/cards/(:cardId)/edit" component={CardEdit} />
        </Router>
    </Provider>,
    document.getElementById('everything')
)
