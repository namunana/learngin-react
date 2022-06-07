import React, {Component, Fragment} from "react";
import './style.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list:[]
    }

    this.handleClidk = this.handleClidk.bind(this)
  }
  render() {
    return (
      <Fragment>
        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEntered={(el) => {el.style.color = 'blue'}}
          appear={true}
        >
          <div>animote</div>
        </CSSTransition> */}
        <TransitionGroup>
          {
            this.state.list.map((item,index) =>{
              return (
                  <CSSTransition
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit
                  onEntered={(el) => {el.style.color = 'blue'}}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleClidk}>tollogo</button>
      </Fragment>
    )
  }

  handleClidk() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
    // const show = this.state.show ? false : true
    // this.setState(()=>({
    //   show: show
    // }))
  }
}

export default App;
