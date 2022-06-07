import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initList } from './actionCreators'
import axios from "axios";

function* getInitList() {
    try {
        const res = yield axios.get('/api/todolist')
        const action = initList(res.data)
        yield put(action)
    }catch(e) {
        console.log(e)
    }
    
    // axios.get('/api/todolist').then((res) => {
    //     const data = res.data
    //     const action = initList(data)
    //     console.log(action)
    //     put(action)
    //     // store.dispatch(action)
    // }).catch((err) => {
    //     console.log(err)
    // })

}

//generator函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga