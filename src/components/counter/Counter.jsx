import React, { useState } from 'react'
import useCounter from '../../customHooks/useCounter'
import useApiData from '../../customHooks/useApiData'

const Counter = () => {
    const {counter, increment, decrement} = useCounter()
    const [ dataCounter, loading, error ] = useApiData("https://apisimpsons.fly.dev/api/personajes")
    console.log({dataCounter})

    return (
        <div>
            <button onClick={increment}> sumar</button>
            <p>{counter}</p>
            <button onClick={decrement}> restar</button>

        </div>
    )
}

export default Counter