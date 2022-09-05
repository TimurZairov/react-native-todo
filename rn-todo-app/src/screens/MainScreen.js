import React from "react";
import {AddTodo} from "../components/AddTodo";
import {FlatList, Image, StyleSheet, View} from "react-native";
import {Todo} from "../components/Todo";


export const MainScreen = ({todos, openTodo, removeTodo}) => {

    let content = <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({item}) => {
            return <Todo todo={item} openTodo={openTodo} removeTodo={removeTodo}/>
        }}/>

    if (todos.length === 0) {
        content = <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/not-contetn.jpg')}/>
        </View>
    }

    return (
        <>
            <AddTodo todos={todos}/>
            {content}
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    }
})