// const initialState = {
//     count : 0
// }

const rootReducer = (state = 0, action) => {
    switch (action.type) {
        case "INC": return state + action.e 
        case "DEC": return state == 0 ? state : state - action.e 
        default: return state
    }
}

export default rootReducer