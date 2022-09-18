import React, {Component} from 'react'

import './Calculator.css'
import Display from '../components/Display'
import Button from '../components/Button'

const initialState = {
   formula: ''
}

const opLogic = {
   and: '\u2227',
   or:  '\u2228',
   not: '\u00AC',
   del: '\u00AB',
   enter: '\u23CE',
   implication: '\u21D2'
}

export default class Calculator extends Component {

   state = {...initialState}

   constructor(props) {
      super(props)
      this.add = this.add.bind(this)
      this.pop = this.pop.bind(this)
      this.calculate = this.calculate.bind(this)
   }

   add(valor) {
      const formula = this.state.formula + valor
      this.setState({formula})
   }

   pop() {
      let formula = this.state.formula
      if (formula !== '') {
         formula = formula.substring(0, formula.length - 1)
         this.setState({formula})
      }
   }

   calculate() {
      const formula = ''
      this.setState({formula})
      console.log('Calcula a tabela verdade, se é satisfazível e a árvore de subformulas')
   }

   render() {
      return (
         <div className="calculator">
            <Display formula={this.state.formula} />
            <Button click={this.add} name="(" />
            <Button click={this.add} name=")" />
            <Button click={this.add} name={opLogic.and} />
            <Button click={this.add} name={opLogic.or} />
            <Button click={this.add} name={opLogic.implication} />
            <Button click={this.add} name={opLogic.not} />
            <Button click={this.pop} name={opLogic.del} />
            <Button click={this.calculate} name={opLogic.enter} enter />
            <Button click={this.add} name="P" />
            <Button click={this.add} name="Q" />
            <Button click={this.add} name="R" />
            <Button click={this.add} name="A"/>
            <Button click={this.add} name="B"/>
            <Button click={this.add} name="C"/>
         </div>
      )
   }
}
