import React, { useState } from 'react'
import { useCards } from '../context/CardContext'
import { CreateCardModal } from './CreateCardModal'
import { PRIORITY_LEVEL } from '../constants/priorityLevel'
import PropTypes from 'prop-types'
import editIcon from '../assets/icons/edit-icon.svg'
import deleteIcon from '../assets/icons/delete-icon.svg'
import cn from 'classnames'

import s from './Card.module.css'

export function Card({ id, title, description, priority }) {
  const { deleteCard } = useCards()
  const [isModalOpen, setIsModalOpen] = useState(false)

  function modifyCard() {
    setIsModalOpen(true)
  }

  const bgClassname = {
    [s.low]: priority === PRIORITY_LEVEL.LOW,
    [s.medium]: priority === PRIORITY_LEVEL.MEDIUM,
    [s.high]: priority === PRIORITY_LEVEL.HIGH,
  }

  return (
    <div className={cn(s.card, bgClassname)}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
      <div className={s.buttonOptions}>
        <button onClick={modifyCard} className={s.button}>
          <img src={editIcon} alt='Editar card' />
        </button>
        <button onClick={() => deleteCard(id)} className={s.button}>
          <img src={deleteIcon} alt='Deletar card' />
        </button>
      </div>
      <CreateCardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} id={id} />
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
}
