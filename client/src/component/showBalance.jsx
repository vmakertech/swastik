import React from 'react'
import { useSelector } from 'react-redux'

const ShowBalance = () => {
    const count = useSelector(s => s.count)
    return (
        <>
            <p>Current Account balance is : {count} </p>
        </>
    )
}

export default ShowBalance