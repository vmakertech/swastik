
export const increment = (e) => {
    return {
        type: "INC",
        e
    }
}

export const decrement = (e) => {
    return {
        type: "DEC",
        e
    }
}

export const addUser = (user) => {
    return {
        type : "ADD_USER",
        payload : user
    }
}
export const addAdmin = (user) => {
    return {
        type : "ADD_ADMIN",
        payload : user
    }
}