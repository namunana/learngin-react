import React, {Component} from "react";
import 'antd/dist/antd.css';
import store from "./store";
import { getChangeInputValue, getAddItem, getDeleteItem, initList, getInitList } from './store/actionCreators'
import TodoListByAntUI from "./TodoListByAntUI";
// import axios from "axios";

  
class TodoListByAnt extends Component {

    constructor(props){
        super(props)
        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

        
        store.subscribe(this.handleStoreChange)

    }
    render() {
        return (
            <TodoListByAntUI 
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                handleInputChange = {this.handleInputChange}
                handleClick = {this.handleClick}
                handleDelete = {this.handleDelete}
            />
        )
    }

    componentDidMount() {
        //redux-thunk
        // const action = getTodoList()
        // store.dispatch(action)

        //redux-saga
        const action = getInitList()
        store.dispatch(action)

        // axios.get('/api/todolist').then((res) => {
        //     const data = res.data
        //     const action = initList(data)
        //     store.dispatch(action)
        // }).catch((err) => {
        //     console.log(err)
        // })
    }

    handleStoreChange() {
        this.setState(store.getState)
    }

    handleInputChange(e) {
        const action = getChangeInputValue(e.target.value)
        store.dispatch(action)

    }

    handleClick() {
        const action = getAddItem()

        store.dispatch(action)
    }

    handleDelete(index) {
        const action = getDeleteItem(index)
        store.dispatch(action)
    }
}

export default TodoListByAnt