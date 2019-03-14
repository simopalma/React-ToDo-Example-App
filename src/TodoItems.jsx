import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoItems(props) {
    const todoEntries = props.entries;
    const listItems = todoEntries.map((item) => {
        return <TodoItem key={item.key} item={item} deleteItem={props.deleteItem} />
    });

    return <ul className="theList">{listItems}</ul>
}

TodoItems.propTypes = {
    entries: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
}

TodoItems.defaultProps = {
    entries: [],
    deleteItem: () => { },
}

export default TodoItems
