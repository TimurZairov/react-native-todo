import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, View, Alert} from 'react-native';
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


    const removeTodo = (id, title) => {
        Alert.alert(
            "Удаление",
            `Вы дествильено хотите удалить элемент "${title}"?`,
            [
                {
                    text: "Cancel",
                    style: "positive"
                },
                {
                    text: "Удалить", onPress: () => {
                        setTodos(todos.filter(todo => {
                            return todo.id !== id
                        }))
                    },
                    style: "negative"
                }
            ]
        );
        setTodoOpen(null)
    }

    const backHandler = () => {
        setTodoOpen(null)
    }

    return (
        <View>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                {!todoOpen ?
                    <MainScreen todos={todos} setTodos={setTodos} openTodo={openTodo} removeTodo={removeTodo}/> :
                    <TodoScreen todoOpen={todoOpen} backHandler={backHandler} removeTodo={removeTodo}/>}

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
