import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }
    //当父组件的render函数被运行时，它的子组件render都将被重新运行
    render() {
        const { content, test } = this.props
        return (
            <div onClick={this.handleDeleteItem}>
                {test}-{content}
            </div>
        )
    }

    handleDeleteItem() {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello'
}

export default TodoItem