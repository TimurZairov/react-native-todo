import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from './ types'

export const todoReducer = (state, action) => {
    console.log(state.todos)
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
    }
    return state
}