import {v4 as uuidv4} from 'uuid'
import { writable } from 'svelte/store'
import { browser } from '$app/environment';

const data = browser ? JSON.parse(window.localStorage.getItem('st-todo-list')) ?? [] : [];

export const todo = writable(data);

todo.subscribe((value) => {
    if(browser) {
        localStorage.setItem('st-todo-list', JSON.stringify(value))
    }
})

export const addTodo = () => {
    todo.update((currentTodo) => {
        return [...currentTodo, {id: uuidv4(), text: '', complete: false}];
    })
}

export const deleteTodo = (id) => {
    todo.update((currentTodo) => {
        return currentTodo.filter((todo) => todo.id !== id);
    })
}

export const toggleComplete = (id) => {
    todo.update((currentTodo) => {
        return currentTodo.map((todo) => {
            if (todo.id === id){
                return { ...todo, complete: !todo.complete}
            }
            return todo;

        })
    })
}

export const editTodo = (id, text) => {
    todo.update((currentTodo) => {
        return currentTodo.map((todo) => {
            if (todo.id === id){
                return { ...todo, text}
            }
            return todo;
            
        })
    })
}