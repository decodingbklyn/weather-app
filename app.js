const geocode = require('./utils/geocode')
const getWeather = require('./utils/weather')


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Enter a City?', (city) => {
    geocode(city, (error, data) => {
        if (error){
            return console.log(error)
        }
        getWeather(data.lat, data.lng, (error, weatherData ) => {
            if (error){
                return console.log(error)
            }
            console.log(data.place)
            console.log(weatherData)
        })
    })
    readline.close()
})

