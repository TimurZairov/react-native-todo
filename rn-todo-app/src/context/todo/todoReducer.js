import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from './ types'

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now().toString(),
                        title: action.title
                    }
                ]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(item => {
                    if(item.id === action.id){
                        item.title = action.title
                    }
                    return item
                })
            }
        default:
            return state
    }
}