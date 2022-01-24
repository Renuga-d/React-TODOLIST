import { useState } from 'react'
import Header from './Header.jsx'
import './App.css'


import Content from './Content.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import TodoList from './TodoList.jsx'
import ListItem from './ListItem.jsx'

function App() {
  

  return (
   
    <div className='container'>
     
      <TodoList />
      
      {/*<Header />
       <Body />
        <Content />
      <Footer />*/}
   </div>
   
  )
}

export default App
