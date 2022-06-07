import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, INIT_LIST } from "./actionTypes";
const defaultState = {
    inputValue: '',
    list: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {

    if(action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }

    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }

    if(action.type === ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    
    return state;
}