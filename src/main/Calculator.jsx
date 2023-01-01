import React, { useState, useRef, Fragment } from 'react'

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

const Modal = props => {
  console.log('aqui: ', props.className)
  return (
    <div className="content-modal">
      <div ref={props.modalRef} className={`${props.className} modal`}>
        <h1>Modal</h1>
      </div>
    </div>
  )
}

const Calculator = _ => {

  const [formula, setFormula] = useState('')
  const [dropdown, setDropdown] = useState('')
  const modalRef = useRef(null)

  const showDropdown = _ => {
    const asd = 'show'
    setDropdown(asd)
    console.log('mostrando: ', dropdown)
    document.body.addEventListener('click', closeDropdown)
  }

  const closeDropdown = event => {
    event.stopPropagation()
    const contain = modalRef.current.contains(event.target)

    if (contain) {
      setDropdown('')
      console.log('removendo')
      document.body.removeEventListener('click', closeDropdown)
    }
  }

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

  return (
    <Fragment>
      <Modal className={dropdown} modalRef={modalRef} />
      <div className="calculator">
        <Display formula={ formula } />
        <Button click={add} op="(" />
        <Button click={add} op=")" />
        <Button click={add} op={opLogic.and} />
        <Button click={add} op={opLogic.or} />
        <Button click={add} op={opLogic.implication} />
        <Button click={add} op={opLogic.not} />
        <Button click={pop} op={opLogic.del} />
        <Button click={calculate} calc={showDropdown}
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
