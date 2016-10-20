import './main.scss'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router'
import Cards from './containers/Cards'
import CardView from './containers/CardView'
import CardNew from './components/CardNew'
import CardEdit from './components/CardEdit'

const store = configureStore()

const Index = ({children}) => (
    <div> {children} </div>
)

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Index} >
                <Route path="cards" component={Cards} />
                <Route path="cards/new" component={CardNew} />
                <Route path="cards/(:cardId)" component={CardView} />
                <Route path="cards/(:cardId)/edit" component={CardEdit} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('everything')
)
