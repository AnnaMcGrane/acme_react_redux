import React from 'react'

import store from './store'
import { createUser } from './store'

class UserForm extends React.Component {
    constructor(){
        super()
        this.state = store.getState()
        this.handleChange = this.handleChange.bind(this)
    }
    componentWillMount(){
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
      }
    componentWillUnmount(){
        store.unsubscribe()
    }
    //the error message says store.unsubscribe is not a function, but I think it is (since it's define that way in WillMount)
    handleChange(evt){
        const action = createUser(evt.target.value)
        store.dispatch(action)
    }
    render(){
        return (
            <div>
            <form>
                <input 
                onChange = { this.handleChange }
                value = { this.state.UserForm }
                />
                <button> Add </button>
            </form>
            </div>
        )
    }
}

export default UserForm