/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Todo extends Component {
    static template = "owl_playground.Todo";

    static props = {
        id: {type: Number},
        description: {type: String},
        done: {type: Boolean},
    }
}
