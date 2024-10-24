import { Modal } from './Modal'
import { useEffect, useState } from 'react'
import { STATUS } from '../constants/status'
import { useCards } from '../context/CardContext'
import { v4 as uuidv4 } from 'uuid'
import { PRIORITY_LEVEL } from '../constants/priorityLevel'
import PropTypes from 'prop-types'

import s from './CreateCardModal.module.css'

export function CreateCardModal({ isOpen, onClose, id }) {
  const { addCard, editCard, getCard } = useCards()
  const CARD_DEFAULT = {
    id: uuidv4(),
    title: '',
    description: '',
    status: STATUS.TODO,
    priority: 'Baixa',
  }

  const [card, setCard] = useState(CARD_DEFAULT)

  useEffect(() => {
    if (id) {
      setCard(getCard(id))
    } else {
      setCard(CARD_DEFAULT)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, getCard])

  function resetCard() {
    setCard(CARD_DEFAULT)
  }

  function handleCard() {
    if (id) {
      editCard(id, card)
    } else {
      addCard(card)
    }
    resetCard()
    onClose()
  }

  function handleChange(e) {
    const { name, value } = e.target
    setCard((prevCard) => ({ ...prevCard, [name]: value }))
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={s.modalContent}>
        <div className={s.form}>
          <div className={s.input}>
            <label htmlFor='title'>Título*</label>
            <input
              type='text'
              id='title'
              name='title'
              value={card.title}
              onChange={handleChange}
              placeholder='Título'
            />
          </div>

          <div className={s.input}>
            <label htmlFor='description'>Descrição*</label>
            <textarea
              id='description'
              name='description'
              value={card.description}
              onChange={handleChange}
              placeholder='Descrição'
            />
          </div>

          <div className={s.input}>
            <label htmlFor='status'>Status</label>
            <select id='status' name='status' value={card.status} onChange={handleChange}>
              <option>{STATUS.TODO}</option>
              <option>{STATUS.DOING}</option>
              <option>{STATUS.DONE}</option>
            </select>
          </div>

          <div className={s.input}>
            <label htmlFor='priority'>Prioridade</label>
            <select id='priority' name='priority' value={card.priority} onChange={handleChange}>
              <option>{PRIORITY_LEVEL.LOW}</option>
              <option>{PRIORITY_LEVEL.MEDIUM}</option>
              <option>{PRIORITY_LEVEL.HIGH}</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleCard}
          className={s.button}
          disabled={!card.title || !card.description}
        >
          {id ? 'Atualizar' : 'Criar'}
        </button>
      </div>
    </Modal>
  )
}

CreateCardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string,
}
