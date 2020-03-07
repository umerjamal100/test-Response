export const getMessage = (result) => {
   return ({ type: 'SuccessFull',
    payload: result})
}

export const getError = (result) => {
    return ({ type: 'Error',
    payload: result})
}