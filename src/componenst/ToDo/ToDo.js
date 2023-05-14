import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './ToDo.Styles'
const ToDo = ({ todos, isDone, deleteTodo }) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.isDone ? styles.doneTodo : styles.todo}
                onPress={() => isDone(todos.id)}
                onLongPress={() => deleteTodo(todos.id)}
            >
                <Text style={todos.isDone ? styles.doneTodoText : styles.todoText}>{todos.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToDo