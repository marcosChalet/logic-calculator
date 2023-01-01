import { isValid } from './validate.js'

export function makeTable(formula, opLogic) {
  if ( !isValid(formula, opLogic) ){
    console.log("Fórmula inválida! tente novamente.")
    return false
  } else {
    console.log('Fórmula bem formada...')
  }

}
