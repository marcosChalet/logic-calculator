function isLetter(ch) {
  if ((ch >= 'A' && ch <= 'C')
     || (ch >= 'P' && ch <= 'Q'))
    return true
  return false
}

function isBynaryOperator(ch, {and, or, implication}) {
  if (ch === and || ch === or || ch === implication)
    return true
  return false
}

function isUnary(ch, unaryOp) {
  return ch === unaryOp
}

export function isValid(formula, opLogic) {

  if (formula[0] !== ')' && formula[0] !== '('
      && formula[0] !== opLogic.not)
    return false

  if (formula[0] === opLogic.not &&  // ~p > q is invalid
      formula[1] !== '(')
    return false

  for(let i = 0; i < formula.length; i++) {

    if (isLetter(formula[i])) {
      // (PP) condition
      if (isLetter(formula[i+1]))
        return false

      // checks logic operator between terms
      if (!isBynaryOperator(formula[i-1], opLogic) && 
          !isBynaryOperator(formula[i+1], opLogic))
        if (!isUnary(formula[i-1], opLogic.not)) // (p -> ~q) is valid
          return false
    }

    if (formula[i] === '(' && formula[i+1] === ')')
      return false

    if (formula[i] === ')' && isLetter(formula[i+1]))
      return false

    if (isBynaryOperator(formula[i], opLogic)) {
      if (isBynaryOperator(formula[i+1], opLogic))
        return false

      if (formula[i-1] === '(' || formula[i+1] === ')')
        return false
    }

    if (isUnary(formula[i], opLogic.not)) {
      if (isBynaryOperator(formula[i+1], opLogic))
        return false

      if (formula[i+1] === ')')
        return false
    }
  }

  return true
}
