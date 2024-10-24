import { useState } from 'react'
import { CreateCardModal } from './CreateCardModal'
import { List } from './List'
import { STATUS } from '../constants/status'
import { useCards } from '../context/CardContext'

import s from './Todo.module.css'

export function Todo() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { cards } = useCards()
  const [searchTerm, setSearchTerm] = useState('')
  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const cardsList = searchTerm ? filteredCards : cards

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={s.todo}>
      <h1>Todo List</h1>
      <input
        type='text'
        placeholder='Digite para filtrar...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={openModal} className={s.button}>
        Adicionar Card
      </button>
      <CreateCardModal isOpen={isModalOpen} onClose={closeModal} />
      <div className={s.lists}>
        <List title={STATUS.TODO} cards={cardsList.filter((card) => card.status === STATUS.TODO)} />
        <List
          title={STATUS.DOING}
          cards={cardsList.filter((card) => card.status === STATUS.DOING)}
        />
        <List title={STATUS.DONE} cards={cardsList.filter((card) => card.status === STATUS.DONE)} />
      </div>
    </div>
  )
}
