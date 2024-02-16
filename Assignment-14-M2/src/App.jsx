import React from 'react'
import './App.css'
import Heading from './components/Heading'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className="App font-semibold container py-16 px-6 min-h-screen mx-auto">
      <Heading/>
      <TodoList/>
     
    </div>
  )
}

export default App