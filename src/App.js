import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Users from './Users'
import Products from './Products'
import Nav from './Nav'
import UserForm from './UserForm'

import store from './store'
import { gotUsersFromServer } from './store'

class App extends React.Component {
    constructor(){
        super()
        this.state = store.getState()
    }
    componentDidMount(){
        axios.get('api/users')
            .then(res => res.data)
            .then(users => {
                const action = gotUsersFromServer(users)
                store.dispatch(action)
            })
    }
    onCreate(user){
        axios.post('api/users', user)
            .then
    }
    render(){
        return (
        <Router>
            <div>
                <Nav />
                <Route path='/' component = { Users } />
                <Route path='/products' component = { Products }/>
                <Route path='/create' component = { UserForm } /> 
            </div>
        </Router>
    )}
}


export default App 