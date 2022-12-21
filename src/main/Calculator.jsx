import React, { useState } from 'react'

import './Calculator.css'
import Display from '../components/Display'
import Button from '../components/Button'

const opLogic = {
  and: '\u2227',
  or:  '\u2228',
  not: '\u00AC',
  del: '\u00AB',
  enter: '\u23CE',
  implication: '\u21D2'
}

const Calculator = _ => {

  const [formula, setFormula] = useState('')

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
    const auxFormula = ''
    setFormula(auxFormula)
    console.log('Calcula a tabela verdade, se é satisfazível e a árvore de subformulas')
  }

  return (
    <div className="calculator">
    <Display formula={ formula } />
    <Button click={add} op="(" />
    <Button click={add} op=")" />
    <Button click={add} op={opLogic.and} />
    <Button click={add} op={opLogic.or} />
    <Button click={add} op={opLogic.implication} />
    <Button click={add} op={opLogic.not} />
    <Button click={pop} op={opLogic.del} />
    <Button click={calculate} op={opLogic.enter} enter />
    <Button click={add} op="P" />
    <Button click={add} op="Q" />
    <Button click={add} op="R" />
    <Button click={add} op="A"/>
    <Button click={add} op="B"/>
    <Button click={add} op="C"/>
    </div>
  )
}

export default Calculator
