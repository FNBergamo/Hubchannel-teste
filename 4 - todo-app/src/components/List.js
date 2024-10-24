import { Card } from './Card'
import PropTypes from 'prop-types'

import s from './List.module.css'

export function List({ title, cards }) {
  return (
    <div className={s.list}>
      <h2>{title}</h2>
      {cards.map(({ id, title, description, priority }) => (
        <Card key={id} id={id} title={title} description={description} priority={priority} />
      ))}
    </div>
  )
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
}
