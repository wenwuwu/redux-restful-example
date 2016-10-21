
import fetch from 'isomorphic-fetch'

export function save (state) {

    fetch('/cards/state', {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then( res => console.log(`${res.status} ${res.statusText}`),
           err => console.log(err.message) )
}
