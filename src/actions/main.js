export const ADD_MOVE = 'add_move'
export const NEXT_MOVE = 'next_move'
export const CHOOSE_SIGN = 'choose_sign'
export const DECIDING = 'deciding'
export const WHO_STARTS = 'who_starts'
export const THINKING = 'thinking'
export const ADD_MOVE_CPU = 'add_move_cpu'

export function addMove(index, sign, increaseTurn) {
  return {
    type: ADD_MOVE,
    payload: {
      index,
      sign,
      increaseTurn,
    },
  }
}

function addMoveCpu(index, sign) {
  return {
    type: ADD_MOVE_CPU,
    payload: {
      index,
      sign,
      increaseTurn: true,
      isPlayerTurn: true,
    },
  }
}

export function cpuMove(index, sign) {
  return (dispatch) => {
    dispatch(thinking())
    setTimeout(() => {
      dispatch(addMoveCpu(index, sign))
    }, 1000)
  }
}

export function nextMove() {
  return {
    type: NEXT_MOVE,
  }
}

export function chooseSign(sign) {
  const payload = {
    playerSign: sign,
    cpuSign: sign === 'circle' ? 'cross' : 'circle',
  }
  return {
    type: CHOOSE_SIGN,
    payload,
  }
}

export function decidingTime() {
  return {
    type: DECIDING,
  }
}

export function thinking() {
  return {
    type: THINKING,
  }
}

export function whoStarts(starter) {
  return (dispatch) => {
    dispatch(decidingTime())
    setTimeout(() => {
      dispatch(start(starter))
    }, 1000)
  }
}

function start(starter) {
  const payload = {
    starter: starter === 'player',
    gameStarted: true,
  }
  return {
    type: WHO_STARTS,
    payload,
  }
}
