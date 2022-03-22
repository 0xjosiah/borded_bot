const ideaFetch = () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            let whatToDo = document.getElementById('whatToDo')
            console.log(data)
            whatToDo.innerHTML = printActivity(data)
        })
    }


const getIdeaBtn = document.getElementById('idea-btn')

getIdeaBtn.addEventListener('click', ideaFetch)

function printActivity(data) {
    const { accessibility, activity, key, link, participants, price, type } = data
    const displayLink = (link == "") ? '' : `<td>Link: </td><td><a href=${link} target="_blank">${link}</a></td>`
    const displayType = type.replaceAll('"', '')
    const displayPrice = priceify(price)
    return `
        <h2 id="whatToDo">${activity}</h2>
            <table>
                <tr>
                    <td>Type: </td>
                    <td>${displayType}</td>
                </tr>
                <tr>
                    <td>Accessibility: </td>
                    <td>${accessibility}</td>
                </tr>
                <tr>
                    <td>Participants: </td>
                    <td>${participants}</td>
                </tr>
                <tr>
                    <td>Price: </td>
                    <td>${displayPrice}</td>
                </tr>
                <tr>
                    ${displayLink}
                </tr>
            </table>`
}

function priceify(num) {
    return (num == 0) ? 'FREE' : new Array(num.toFixed(1) * 10).fill('$').join('')
}