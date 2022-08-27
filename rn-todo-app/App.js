
import { StatusBar } from 'expo-status-bar';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {useState} from "react";
import {Todo} from "./src/Todo";

export default function App() {
    const [todos, setTodos] = useState([])



  return (
    <View >
      <Navbar title='Todo App'/>
        <View style={styles.container}>
            <AddTodo setTodos={setTodos} todos={todos}/>
            <FlatList
                keyExtractor={item => item.id}
                data={todos}
                renderItem={({item}) => {
                    return <Todo todo={item}/>
                }} />
        </View>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 15,
      paddingVertical: 15
  }
});
