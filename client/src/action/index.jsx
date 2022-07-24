
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
