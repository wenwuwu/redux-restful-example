
import React from 'react'
import { Link } from 'react-router'

const CardForm = ({id, name, createCard, updateCard}) => {
    let input
    const pathView = `/cards/${id}`
    const pathList = '/cards'

    function handleChange (e) {
        input.value = e.target.value
    }

    return (
        <div className="section">
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
                <span className="name">Card Name: </span>
                <input onChange={handleChange} ref={r => input = r} value={name ? name : ''} />

                <button className="btn" type="submit"> OK </button>
                <Link className="btn" to={id ? pathView : pathList}> Cancel </Link>
            </form>
        </div>
    )
}

export default CardForm
