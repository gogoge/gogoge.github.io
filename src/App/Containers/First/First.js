import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './first.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incCounter, decCounter, fetchPostTask } from './action'
import PropTypes from 'prop-types'
import { selector as mapStateToProps } from './selector'
import { push } from 'react-router-redux'
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { push, incCounter, decCounter, fetchPostTask },
      dispatch
    ),
  }
}
const STEP = 3
@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
export default class Main extends Component {
  onInc = () => {
    this.props.actions.incCounter(STEP)
  }

  onDec = () => {
    this.props.actions.decCounter(STEP)
  }

  onNotFound = () => {
    this.props.actions.push('/gg')
  }

  onFetch = () => {
    this.props.actions.fetchPostTask()
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="title">{'Webb Lu'}</div>
        <div styleName="content">{'A frontend developer @ taipei'}</div>
        <div styleName="content">{'To Be Done.'}</div>
      </div>
    )
    // return (
    //   <div styleName="root">
    //     <h1 styleName="title">{this.props.counter}</h1>
    //     <button onClick={this.onInc}>{'+'}</button>
    //     <button onClick={this.onDec}>{'-'}</button>
    //     <button onClick={this.onFetch}>{'test saga fetch'}</button>
    //     <button onClick={this.onNotFound}>{'Go to NotFound'}</button>
    //   </div>
    // )
  }
}

Main.propTypes = {
  actions: PropTypes.object,
  // counter: PropTypes.number,
}
