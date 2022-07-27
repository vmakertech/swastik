// const initialState = {
//     count : 0
// }

export const countReducer = (state = 0, action) => {
    switch (action.type) {
        case "INC": return state + action.e
        case "DEC": return state === 0 ? state : state - action.e
        default: return state
    }
}
export const userReducer = (state = {
    users: [],
    isLoading: true
}, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                u: action.payload,
                isLoading: false
            }
        case "ADD_ADMIN":
            return {
                u: action.payload,
                isLoading: false
            }
        default: return state
    }
}
