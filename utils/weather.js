const request = require('request')


const getWeather = (lat, lng, cb) => {
    const url = 'https://api.darksky.net/forecast/4e24db601751ebb310bb4ba30f619f80/' + lat +','+ lng
    request({ url: url, json: true }, (error, response) => {
        if (error)  {
            cb('Unable to connect to weather api', undefined)
        } else if (response.body.error){
            cb('Unable to find Location', undefined)
        } else {
            const temp = response.body.currently.temperature
            const rainChance = response.body.currently.precipProbability
            cb(undefined, `${response.body.daily.data[0].summary} It is currently ${temp} degrees out. There is a ${rainChance}% chance of rain`)
        }
    })
}

module.exports = getWeather