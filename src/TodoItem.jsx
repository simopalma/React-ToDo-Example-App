import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
    const item = props.item;
    return <li onClick={() => props.deleteItem(item.key)}>{item.text}</li>
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired,
}

TodoItem.defaultProps = {
    item: {},
    deleteItem: () => { },
}

export default TodoItem