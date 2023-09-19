import React, { useState } from 'react'

const CounterRenderProps = ( {children} ) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
  return children( count, increment )
}

export default CounterRenderProps