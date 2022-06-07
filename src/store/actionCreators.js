import { act } from "react-dom/test-utils";
import { CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM, INIT_LIST, GET_INIT_LIST } from "./actionTypes";
// import axios from "axios";

export const getChangeInputValue = (value) =>{
    const action = {
        type: CHANGE_INPUT_VALUE,
        value
    }

    return action
}

export const getAddItem = () => {
    const action = {
        type: ADD_ITEM
    }

    return action
}

export const getDeleteItem = (index) => {
    const action = {
        type: DELETE_ITEM,
        index
    }

    return action
}

export const initList = (data) => {
    const action = {
        type: INIT_LIST,
        data
    }

    return action
}

export const getInitList = () => {
    const action = {
        type: GET_INIT_LIST
    }
    
    return action
}

// export const getTodoList = () =>{
//     return (dispatch) => {
//         axios.get('/api/todolist').then((res) => {
//             const data = res.data
//             const action = initList(data)
//             dispatch(action)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }
// }