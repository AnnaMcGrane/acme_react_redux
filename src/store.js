import { createStore, combineReducers } from 'redux'

const GOT_USERS_FROM_SERVER = 'GOT_USERS_FROM_SERVER'
const CREATE_USER = 'CREATE_USER'

export function gotUsersFromServer(users) {
    return {
      type: GOT_USERS_FROM_SERVER,
      users
    }
}


export function createUser(inputContent){
    return {
      type: CREATE_USER,
      createNewUser: inputContent
    }
}

const usersReducer = (state = [], action) => {
    switch(action.type){
        case 'GOT_USERS_FROM_SERVER': 
            state = action.users
            break
    }
    return state

}
const productsReducer = (state = [], action) => {
    return state
}

const reducer = combineReducers({
    users: usersReducer,
    products: productsReducer
})

const store = createStore(reducer)

export default store

