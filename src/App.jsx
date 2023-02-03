import React from 'react'
import Nav from './Nav'
import Section from './Section'
import data from './data.jsx'

function App() {

  const dataElements = data.map(item => {
    return (
      <Section
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <Nav />
      {dataElements}
    </div>
  )
}

export default App
