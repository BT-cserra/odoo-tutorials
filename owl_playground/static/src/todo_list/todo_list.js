/** @odoo-module **/

import { Todo } from "../todo/todo"
import { Component, useState } from "@odoo/owl";


export class TodoList extends Component {
    static template = "owl_playground.TodoList";

    static components = { Todo };

    setup() {
        this.todoList = useState([
            {id: 1, description: "one", done: false},
            {id: 2, description: "two", done: true},
            {id: 3, description: "three", done: true},
        ]);
        this.nextId = this.todoList.length + 1;
    }

    addTodo(ev) {
        if (ev.keyCode === 13 && ev.target.value.length > 0) {
            this.todoList.push(
                {id: this.nextId++, description: ev.target.value, done: false}
            )
            ev.target.value = "";
        }
    }

}
