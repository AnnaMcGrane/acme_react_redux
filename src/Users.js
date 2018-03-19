import React from 'react'

import store from './store'

class Users extends React.Component{
    constructor(){
        super()
        this.state = {
            users: store.getState().users
        }
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=> {
            this.setState({ users: store.getState().users})
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
    render(){
        return (
            <div>Users {this.state.users.length}</div>
        )
    }
}


export default Users