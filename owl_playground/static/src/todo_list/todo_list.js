/** @odoo-module **/

import { Todo } from "../todo/todo"
import { useAutofocus } from "../utils"
import { Component, useState, useRef, onMounted } from "@odoo/owl";


export class TodoList extends Component {
    static template = "owl_playground.TodoList";

    static components = { Todo };

    setup() {
        this.todoList = useState([]);
        this.nextId = this.todoList.length + 1;

        useAutofocus("input");
    }

    addTodo(ev) {
        if (ev.keyCode === 13 && ev.target.value.length > 0) {
            this.todoList.push(
                {id: this.nextId++, description: ev.target.value, done: false}
            )
            ev.target.value = "";
        }
    }

    toggleTodo(todoId) {
        const todo = this.todoList.find(e => e.id === todoId);
        todo.done = !todo.done;
    }

}
