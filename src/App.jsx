import React, { useEffect, useState } from 'react'
import Counter from './components/counter/Counter'
import useApiData from './customHooks/useApiData'
import ListContainer from './components/List/ListContainer'
import UserProfileHoc from './components/userProfile'
import CounterRenderProps from './components/CounterRenderProps'
const App = () => {
  return (
    <div>
      App
      {/* <button onClick={onclick}>
        { loading ? "cargando" : "terminó de cargar"}
      </button> */}

      {/* <Counter /> */}
      <ListContainer />
      <UserProfileHoc />
      <CounterRenderProps>
        {
          (count, increment) => {
            return <div>
              <h5>{ count }</h5>
              <button onClick={increment}>Sumar</button>
            </div> 
          }
        }
      </CounterRenderProps>
    </div>
  )
}

export default App  