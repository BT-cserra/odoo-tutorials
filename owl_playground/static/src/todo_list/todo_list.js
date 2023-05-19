/** @odoo-module **/

import { Todo } from "../todo/todo"
import { Component } from "@odoo/owl";


export class TodoList extends Component {
    static template = "owl_playground.TodoList";

    static components = { Todo };

    setup() {
        this.todoList = [
            {id: 1, description: "one", done: false},
            {id: 2, description: "two", done: true},
            {id: 3, description: "three", done: true},
        ];
    }
}
