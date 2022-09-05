import React, {useReducer} from "react";
import {TodoContext} from './todoContext' // создать контекст ""импортировать и спотреть что там" для создания провайдера
import {todoReducer} from './todoReducer'
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "./ types"; // создать  редюсер "смотреть что в редюсере" и импортируем сюда


export const TodoState = ({children}) => {
//создаем стайт для todos если стэйт массив то пустой, для проверки они с объектами
    const initialState = {
        todos: []
    }
    // используем хук редюсер и передамем туда todoReducer котрый создали отдельно смотреть что внутри по импорту
    // будет принимать стэйт и диспатч
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const todoAdd = (title) => dispatch({
        type: ADD_TODO, title: title
    })

    const todoRemove = (id) => dispatch({type: REMOVE_TODO, id: id})

    const todoEdit = (id, title) => dispatch({type: UPDATE_TODO, id: id, title: title})


    // console.log(state)
    //импортрованный туду контекст создаем как jsx и обращаемся к провадйер
    return (
        <TodoContext.Provider value={{todos: state.todos, todoAdd, todoRemove, todoEdit}}>
            {children}
        </TodoContext.Provider>
    )
}