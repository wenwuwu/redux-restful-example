
import React from 'react'

const CardForm = ({isNew, cardId, createCard, updateCard}) => {
    let input;

    return (
        <div class="section">
            <form onSubmit={e => {
                e.preventDefault()
                const val = input.value
                if (!val.trim()) {
                    return
                }
                isNew ? createCard(val) : updateCard(cardId, val)
                input.value = ''
            }}>
                <span class="name">Card Name: </span>
                <input ref={r => input = r} />

                <button class="btn" type="submit"> OK </button>
                <Link class="btn" to={isNew ? '/cards' : `/cards/${cardId}` }> Cancel </Link>
            </form>
        </div>
    )
}

export default CardForm
