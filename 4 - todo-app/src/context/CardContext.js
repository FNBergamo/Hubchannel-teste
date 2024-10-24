import PropTypes from 'prop-types'
import React, { createContext, useState, useContext, useMemo, useEffect } from 'react'

const CardsContext = createContext()

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem('cards')
    return storedCards ? JSON.parse(storedCards) : []
  })

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  const addCard = (card) => {
    setCards([...cards, card])
  }

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id))
  }

  const editCard = (id, updatedCard) => {
    setCards(cards.map((card) => (card.id === id ? updatedCard : card)))
  }

  const getCard = (id) => {
    return cards.find((card) => card.id === id)
  }

  const value = useMemo(
    () => ({
      cards,
      addCard,
      deleteCard,
      editCard,
      getCard,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cards],
  )

  return <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
}

CardsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useCards = () => {
  return useContext(CardsContext)
}
