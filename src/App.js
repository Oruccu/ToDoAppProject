import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AddToDo from "./componenst/AddToDo";
import ToDo from "./componenst/ToDo";

const App = () => {
  const [text, setText] = useState(([]));
  const [todos, setTodos] = useState('');
  const activeTodos = todos.filter(todo => !todo.isDone);

  const renderTodo = ({item}) => (
    <ToDo todos={item} isDone={isDone} deleteTodo={deleteTodo}/>
  );
  
  const addTodos = () => {
    console.log('addTodo: ' + text);

    setTodos([...todos,{
      id: Date.now() + Math.random(),
      name: text,
      isDone: false
    }]);

    setText('');
  };

  const isDone = id =>{
    const newTodoList = todos.map(todo => {
      if(todo.id == id){
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodoList);
  };
  const deleteTodo = id =>{
    const newTodoList =todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>{activeTodos.length}</Text>
      </View>
      <View style={styles.inner_container}>
        <FlatList
          data={todos}
          renderItem={renderTodo} />
      </View>
      <AddToDo text={text} setText={setText} addTodos={addTodos} />

    </SafeAreaView>
  )
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    padding: 20,
    justifyContent:'space-between',
  },
  inner_container:{
    flex:1,
    margin:10,
  },
  heading_container:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  title:{
    fontSize:30,
    color:'#ffa500',
  }



})