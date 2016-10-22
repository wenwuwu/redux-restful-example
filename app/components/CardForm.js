
import React from 'react'
import { Link, withRouter } from 'react-router'

const CardForm = ({id, name, createCard, updateCard, router}) => {
    let input

    const pathView = `/cards/${id}`
    const pathList = '/cards'

    return (
        <div className="section">
            <div className="row">
                <form onSubmit={e => {
                    e.preventDefault()
                    const val = input.value
                    if (!val.trim()) {
                        return
                    }
                    if (id) {
                        updateCard(id, val)
                        router.push(pathView)
                    }
                    else {
                        createCard(val) 
                        router.push(pathList)
                    }
                    input.value = ''
                }}>
                    <div className="row">
                        <span className="name">Card Name: </span>
                        <input ref={r => input = r} defaultValue={name ? name : ''} autoFocus />
                    </div>

                    <div className="row btns">
                        <button className="btn" type="submit"> OK </button>
                        <Link className="btn" to={id ? pathView : pathList}> Cancel </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(CardForm)
