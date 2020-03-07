// type State = {
//     message: String
// }

const intialState = {
    message: ''
}

const Reducer = (state = intialState, action) => {
    
    switch(action.type) {
        case 'SuccessFull':
            return {...state, message: action.payload};
        case 'Error':
            return {...state, message: action.payload};  
        default:
            return {...state}  
    }
}

export default Reducer