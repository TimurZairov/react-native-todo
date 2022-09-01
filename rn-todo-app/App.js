import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {useState} from "react";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
    const [todoOpen, setTodoOpen] = useState(null)
    const [todos, setTodos] = useState([
        {
            id: '123',
            title: 'Купить варенье'
        },
        {
            id: '321',
            title: 'Схавать варенье'
        }
    ])


    const openTodo = (id) => {
        setTodoOpen(todos.find(todo => todo.id === id))
    }

    const removeTodo = (id) => {
       setTodos( todos.filter(todo => {
           return todo.id !== id
       }))


    }

    const backHandler = () => {
        setTodoOpen(null)
    }

    return (
        <View>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                {!todoOpen ? <MainScreen todos={todos} setTodos={setTodos} openTodo={openTodo} removeTodo={removeTodo}/> :
                    <TodoScreen todoOpen={todoOpen} backHandler={backHandler}/>}

            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15
    }
});
