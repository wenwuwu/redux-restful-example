
import React from 'react'
import { Link, withRouter } from 'react-router'

const CardForm = ({id, name, createCard, updateCard, router}) => {
    let input

    const pathView = `/cards/${id}`
    const pathList = '/cards'

    /*
    function handleChange (e) {
        input.value = e.target.value
    }
    */

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
                    router.push(pathView)
                }
                else {
                    createCard(val) 
                    router.push(pathList)
                }
                input.value = ''
            }}>
                <span className="name">Card Name: </span>
                { /* <input onChange={handleChange} ref={r => input = r} value={name ? name : ''} /> */ }
                <input ref={r => input = r} />

                <div className="row">
                    <button className="btn" type="submit"> OK </button>
                    <Link className="btn" to={id ? pathView : pathList}> Cancel </Link>
                </div>
            </form>
        </div>
    )
}

export default withRouter(CardForm)
