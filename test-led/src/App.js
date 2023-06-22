import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from './context'
import Light from './light'
import WindLight from './windLight'

const url = 'https://weather-board.onrender.com'

function App() {
  const [loading, setLoading] = useState(true)
  const [render, setRender] = useState(false)
  const [dataStream, setDataStream] = useState(
    ''
  )
  
  const passContext ={dataStream, setDataStream, setLoading, render}
 
  const dataFetch =() => {
    fetch ('http://localhost:8081/lights')
    .then (res => res.text())
    .then(data => {
      setDataStream(data)})
      setLoading(false)
  }

  const warning = {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    border: '3px solid black'
  }
  const watch = {
    width: '100px',
    height: '100px',
    backgroundColor: 'yellow',
    border: '3px solid black'
  }
  const clear = {
    width: '100px',
    height: '100px',
    backgroundColor: 'green',
    border: '3px solid black'
  }
  

  useEffect(() => {
    dataFetch()
    const interval = setInterval(() => {
        dataFetch()
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  if (loading === true) {
    return (
      <div>Loading...</div>
    )
  } else {
    return (
      <AppContext.Provider value ={passContext}>
       <Light data ={dataStream}/> 
      </AppContext.Provider>
    )
  }

}
export default App;


