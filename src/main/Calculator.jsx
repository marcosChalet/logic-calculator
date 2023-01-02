import React, { useState, Fragment } from 'react'

import './Calculator.css'
import Display from '../components/Display'
import Button from '../components/Button'

import { makeTable } from './mktable.js'

const opLogic = {
  and: '\u2227',
  or:  '\u2228',
  not: '\u00AC',
  del: '\u00AB',
  enter: '\u23CE',
  implication: '\u21D2'
}

const Modal = ({ fn }) => {
  const setModal = fn()
  return (
    <div className="content-modal" >
      <div className={`show modal`} onClick={() => setModal(false)} >
        <h1>Modal</h1>
      </div>
    </div>
  )
}

const Calculator = _ => {

  const [formula, setFormula] = useState('')
  const [modal, setModal] = useState(false)

  const add = op => {
    setFormula(formula + op)
  }

  const pop = _ => {
    let auxFormula = formula
    if (auxFormula !== '') {
      auxFormula = auxFormula.substring(0, auxFormula.length - 1)
      setFormula(auxFormula)
    }
  }

  const calculate = _ => {
    makeTable(formula, opLogic)
    setFormula('')
  }

  const showModal = _ => {
    setModal(true)
  }

  return (
    <Fragment>
      { modal && <Modal className={"show"} fn={() => setModal} /> }
      <div className="calculator">
        <Display formula={ formula } />
        <Button click={add} op="(" />
        <Button click={add} op=")" />
        <Button click={add} op={opLogic.and} />
        <Button click={add} op={opLogic.or} />
        <Button click={add} op={opLogic.implication} />
        <Button click={add} op={opLogic.not} />
        <Button click={pop} op={opLogic.del} />
        <Button click={calculate} calc={showModal}
          op={opLogic.enter} enter />
        <Button click={add} op="P" />
        <Button click={add} op="Q" />
        <Button click={add} op="R" />
        <Button click={add} op="A" />
        <Button click={add} op="B" />
        <Button click={add} op="C" />
      </div>
    </Fragment>
  )
}

export default Calculator
