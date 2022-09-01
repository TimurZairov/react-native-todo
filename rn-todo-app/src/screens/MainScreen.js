import React from "react";
import {AddTodo} from "../components/AddTodo";
import {FlatList} from "react-native";
import {Todo} from "../components/Todo";


export const MainScreen = ({ todos, setTodos, openTodo, removeTodo }) => {
    return (
        <>
            <AddTodo setTodos={setTodos} todos={todos}/>
            <FlatList
                keyExtractor={item => item.id}
                data={todos}
                renderItem={({item}) => {
                    return <Todo todo={item} openTodo={openTodo} removeTodo={removeTodo}/>
                }}/>
        </>

    )
}