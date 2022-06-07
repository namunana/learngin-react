import React, {Component} from "react";
import { Input, Button, List } from 'antd';

const TodoListByAntUI = (props) => {
    return (
        <div style={{marginTop: '10px',marginLeft:'10px'}}>
            <Input placeholder="Basic usage" style={{width:'300px'}} value={props.inputValue} onChange={props.handleInputChange}/>
            <Button type="primary" style={{marginLeft:'10px'}} onClick={props.handleClick}>提交</Button>

            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index) => 
                    <List.Item onClick={() => {
                        props.handleDelete(index)
                    }}>
                        {item}
                    </List.Item>
                }
                style={{width:'300px', marginTop:'10px'}}
            />
        </div>
    )
}

// class TodoListByAntUI extends Component {
//     render() {
//         return (
//             <div style={{marginTop: '10px',marginLeft:'10px'}}>
//                 <Input placeholder="Basic usage" style={{width:'300px'}} value={this.props.inputValue} onChange={this.props.handleInputChange}/>
//                 <Button type="primary" style={{marginLeft:'10px'}} onClick={this.props.handleClick}>提交</Button>

//                 <List
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index) => 
//                         <List.Item onClick={() => {
//                             this.props.handleDelete(index)
//                         }}>
//                             {item}
//                         </List.Item>
//                     }
//                     style={{width:'300px', marginTop:'10px'}}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListByAntUI