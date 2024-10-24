import { Todo } from './components/Todo'
import { CardsProvider } from './context/CardContext'

import './App.css'

function App() {
  return (
    <div className='App'>
      <CardsProvider>
        <Todo />
      </CardsProvider>
    </div>
  )
}

export default App

