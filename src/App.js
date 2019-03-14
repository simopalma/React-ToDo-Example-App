import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            currentItem: { text: '', key: '' },
        }

        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    handleInput(e) {
        const currentItem = { text: e.target.value, key: Date.now() }
        this.setState({currentItem});
    }
    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== '') {
            const items = [ ...this.state.items, newItem ];
            this.setState({
                items,
                currentItem: { text: '', key: '' },
            });
        }
    }
    deleteItem(key) {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        })
        this.setState({
            items: filteredItems,
        })
    }
    render() {
        return (
            <div className="App">
                <TodoList addItem={this.addItem} handleInput={this.handleInput} currentItem={this.state.currentItem} />
                <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
            </div>
        )
    }
}

export default App