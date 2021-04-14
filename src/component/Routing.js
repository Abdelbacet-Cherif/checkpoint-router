import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import Description from './Description'

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}></Route>
                <Route exact path="/description/:id" component={Description}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routing
