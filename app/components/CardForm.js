
import React from 'react'

const CardForm = ({id, name, createCard, updateCard}) => {
    let input
    const pathView = `/cards/${id}`
    const pathList = '/cards'

    return (
        <div class="section">
            <form onSubmit={e => {
                e.preventDefault()
                const val = input.value
                if (!val.trim()) {
                    return
                }
                if (id) {
                    updateCard(id, val)
                    location.pathname = pathView
                }
                else {
                    createCard(val) 
                    location.pathname = pathList
                }
                input.value = ''
            }}>
                <span class="name">Card Name: </span>
                <input ref={r => input = r} value={name ? name : ''} />

                <button class="btn" type="submit"> OK </button>
                <Link class="btn" to={id ? pathView : pathList}> Cancel </Link>
            </form>
        </div>
    )
}

export default CardForm
