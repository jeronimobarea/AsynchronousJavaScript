const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const API_URL = 'https://rickandmortyapi.com/api/character/'

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', urlApi, true)
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + urlApi)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}

fetchData(API_URL, function (error, data) {
    if (error) return console.error(error)
    fetchData(API_URL + data.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2)
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3)
            console.log(data.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})