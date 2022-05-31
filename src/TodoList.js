import React, { Component, Fragment } from "react";
import './style.css'
import TodoItem from "./TodoItem";

class TodoList extends Component {

    constructor(props) {
        super(props)
        //当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state = {
            inputValue:'',
            list:[]
        }

        this.handleInputValue = this.handleInputValue.bind(this)
        this.handleClickBtn = this.handleClickBtn.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insetArea">输入内容</label>
                    <input
                      id="insetArea"
                      className="input"
                      value={this.state.inputValue}
                      onChange={this.handleInputValue }
                      ref={(input) => {this.input = input}}
                    />
                    <button onClick={ this.handleClickBtn }>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}> 
                    {
                        this.getTodoItem()
                    }
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return <TodoItem content={item} key={index} index={index} deleteItem={this.handleDelete.bind(this)}/>
            // return <li key={index} onClick={this.handleDelete.bind(this, index)} dangerouslySetInnerHTML={{__html:item}}></li>
        })
    }

    handleInputValue(e){
        const value = this.input.value
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleClickBtn(e){
        this.setState((prevState) => ({
           list: [...prevState.list, prevState.inputValue],
           inputValue: '' 
        }),() => {
            console.log(this.ul.querySelectorAll('div').length)
        })
    }

    handleDelete(index){
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index,1)

            return{list}
        })
    }
}

export default TodoList