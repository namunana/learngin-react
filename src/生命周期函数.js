import React, {Component} from 'react'
//生命周期函数指某一个时刻组件会自动执行的函数

class Test extends Component {

    render() {
        return <div></div>
    }

    //在组件即将被挂载到页面的时刻自动执行
    //即将废除
    componentWillMount() {
        console.log('componentWillMount')
    }

    //在组件被挂载之后被执行
    componentDidMount() {
        console.log('componentDidMount')
    }

    //组件被更新之前会被执行
    //返回boolean值，true 会更行， false不更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    //组件被更新之前被执行，在 shouldComponentUpdate 之后执行
    //即将废除
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    //在组件被更新之后被执行
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    //一个组件要从父组件接收参数
    //如果这个组件第一次被渲染到页面，不会执行
    //如果已存在页面中，每次父组件更新，函数就会被执行
    //即将废除
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }

    //在组件即将被从页面剔除的时候，会被执行
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export default Test
